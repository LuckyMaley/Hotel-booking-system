package com.hotel.booking.system.api.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.booking.system.api.dto.PaymentResponseDTO;
import com.hotel.booking.system.api.dto.mapper.PaymentMapper;
import com.hotel.booking.system.api.dto.post.PaymentPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Booking;
import com.hotel.booking.system.api.model.Card;
import com.hotel.booking.system.api.model.Payment;
import com.hotel.booking.system.api.repository.BookingRepository;
import com.hotel.booking.system.api.repository.CardRepository;
import com.hotel.booking.system.api.repository.PaymentRepository;
import com.hotel.booking.system.api.service.GenericService;

import jakarta.transaction.Transactional;

@Service
public class PaymentServiceImpl implements GenericService<Payment> {
	@Autowired
	private PaymentRepository paymentRepository;

	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	private CardRepository cardRepository;

	@Override
	public Payment saveEntity(Payment payment) {
		return paymentRepository.save(payment);
	}

	@Override
	public List<Payment> getAllEntities() {
		return paymentRepository.findAll();
	}

	@Override
	public Payment getEntityById(long id) {
		return paymentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Payment", "Id", id));
	}

	@Override
	public Payment updateEntity(Payment payment, long id) {
		Payment existingPayment = paymentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Payment", "Id", id));

		existingPayment.setAmount(payment.getAmount());
		existingPayment.setPaymentDate(payment.getPaymentDate());
		existingPayment.setBooking(payment.getBooking());
		existingPayment.setCard(payment.getCard());

		existingPayment.setAmount(payment.getAmount());
		existingPayment.setPaymentDate(payment.getPaymentDate());
		existingPayment.setBooking(payment.getBooking());

		return paymentRepository.save(existingPayment);
	}

	@Override
	public void deleteEntity(long id) {
		paymentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Payment", "Id", id));
		paymentRepository.deleteById(id);
	}

	@Transactional
	public PaymentResponseDTO createPayment(PaymentPostDTO paymentPostDTO) {

		Booking booking = bookingRepository.findById(paymentPostDTO.getBookingId())
				.orElseThrow(() -> new ResourceNotFoundException("Booking", "Id", paymentPostDTO.getBookingId()));
		Card card = cardRepository.findById(paymentPostDTO.getCardId())
				.orElseThrow(() -> new ResourceNotFoundException("Payment", "Id", "new"));
		Payment payment = PaymentMapper.toEntity(paymentPostDTO, booking, card);
		Payment savedPayment = saveEntity(payment);
		return PaymentMapper.toDTO(savedPayment);
	}

	public List<PaymentResponseDTO> getAllPayments() {
		return getAllEntities().stream().map(PaymentMapper::toDTO).collect(Collectors.toList());
	}

	public PaymentResponseDTO getPaymentById(Long id) {
		Payment payment = getEntityById(id);
		return PaymentMapper.toDTO(payment);
	}

	@Transactional
	public PaymentResponseDTO updatePayment(Long id, PaymentPostDTO paymentPostDTO) {
		Payment existingPayment = getEntityById(id);

		existingPayment.setAmount(paymentPostDTO.getTransactionFee());
		existingPayment.setPaymentDate(paymentPostDTO.getPaymentDate());
		Booking booking = bookingRepository.findById(paymentPostDTO.getBookingId())
				.orElseThrow(() -> new ResourceNotFoundException("Payment", "Id", id));
		existingPayment.setBooking(booking);
		Card card = cardRepository.findById(paymentPostDTO.getCardId())
				.orElseThrow(() -> new ResourceNotFoundException("Payment", "Id", id));
		existingPayment.setCard(card);
		Payment updatedPayment = saveEntity(existingPayment);
		return PaymentMapper.toDTO(updatedPayment);
	}

	@Transactional
	public void deletePayment(Long id) {
		Payment payment = getEntityById(id);
		deleteEntity(payment.getId());
	}
}
