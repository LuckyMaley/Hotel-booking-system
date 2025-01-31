package com.hotel.booking.system.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotel.booking.system.api.dto.BookingResponseDTO;
import com.hotel.booking.system.api.dto.mapper.BookingMapper;
import com.hotel.booking.system.api.dto.post.BookingPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Booking;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.Room;
import com.hotel.booking.system.api.repository.BookingRepository;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.repository.RoomRepository;
import com.hotel.booking.system.api.service.GenericService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements GenericService<Booking> {

	@Autowired
	private BookingRepository bookingRepository;
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private RoomRepository roomRepository;

	@Autowired
	private BookingMapper bookingMapper;

	@Override
	public Booking saveEntity(Booking booking) {
		return bookingRepository.save(booking);
	}

	@Override
	public List<Booking> getAllEntities() {
		return bookingRepository.findAll();
	}

	@Override
	public Booking getEntityById(long id) {
		/*
		 * Optional<Booking> booking = bookingRepository.findById(id);
		 * if(booking.isPresent()) { return booking.get(); } else { throw new
		 * ResourceNotFoundException("Booking", "Id", booking); }
		 */

		return bookingRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Booking", "Id", id));
	}

	@Override
	public Booking updateEntity(Booking booking, long id) {
		Booking existingBooking = bookingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Booking", "Id", id));
		existingBooking.setCustomer(booking.getCustomer());
		existingBooking.setRoom(booking.getRoom());
		existingBooking.setCheckInDate(booking.getCheckInDate());
		existingBooking.setCheckOutDate(booking.getCheckOutDate());
		existingBooking.setTotalPrice(booking.getTotalPrice());
		existingBooking.setStatus(booking.getStatus());
		existingBooking.setBillingAddress(booking.getBillingAddress());
		existingBooking.setBillingCity(booking.getBillingCity());
		existingBooking.setBillingCountry(booking.getBillingCountry());
		existingBooking.setBillingPostalCode(booking.getBillingPostalCode());
		bookingRepository.save(existingBooking);

		return existingBooking;
	}

	@Override
	public void deleteEntity(long id) {
		bookingRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Booking", "Id", id));
		bookingRepository.deleteById(id);
	}

	@Transactional
	public BookingResponseDTO createBooking(BookingPostDTO bookingPostDTO) {
		Booking booking = bookingMapper.toEntity(bookingPostDTO);

		Room room = roomRepository.findById(bookingPostDTO.getRoomId())
				.orElseThrow(() -> new ResourceNotFoundException("Room", "ID", bookingPostDTO.getRoomId()));
		booking.setRoom(room);

		Customer customer = customerRepository.findById(bookingPostDTO.getCustomerId())
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "ID", bookingPostDTO.getCustomerId()));
		booking.setCustomer(customer);

		Booking savedBooking = saveEntity(booking);
		return bookingMapper.toResponseDTO(savedBooking);
	}

	public BookingResponseDTO getBookingById(Long id) {
		Booking booking = getEntityById(id);
		return bookingMapper.toResponseDTO(booking);
	}

	public List<BookingResponseDTO> getBookingByCustomerId(Long customerId) {
		Customer customer = customerRepository.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "ID", customerId));
		List<Booking> bookings = bookingRepository.findByCustomer(customer);
		List<BookingResponseDTO> bookingResponseDTOs = new ArrayList<BookingResponseDTO>();
		for (Booking booking : bookings) {
			bookingResponseDTOs.add(bookingMapper.toResponseDTO(booking));
		}
		return bookingResponseDTOs;
	}

	public List<BookingResponseDTO> getAllBookings() {
		return getAllEntities().stream().map(bookingMapper::toResponseDTO).collect(Collectors.toList());
	}

	@Transactional
	public void deleteBooking(Long id) {
		Booking booking = getEntityById(id);
		deleteEntity(booking.getId());
	}

	@Transactional
	public BookingResponseDTO updateBooking(Long id, BookingPostDTO bookingPostDTO) {
		Booking existingBooking = getEntityById(id);

		// Map new values to existing booking entity
		Optional<Customer> customer = customerRepository.findById(bookingPostDTO.getCustomerId());
		if (customer.isPresent()) {
			existingBooking.setCustomer(customer.get());
		}
		Optional<Room> room = roomRepository.findById(bookingPostDTO.getRoomId());
		if (room.isPresent()) {
			existingBooking.setRoom(room.get());
		}
		existingBooking.setCheckInDate(bookingPostDTO.getCheckInDate());
		existingBooking.setCheckOutDate(bookingPostDTO.getCheckOutDate());
		existingBooking.setTotalPrice(bookingPostDTO.getTotalPrice());
		existingBooking.setStatus(bookingPostDTO.getStatus());
		existingBooking.setBillingAddress(bookingPostDTO.getBillingAddress());
		existingBooking.setBillingCity(bookingPostDTO.getBillingCity());
		existingBooking.setBillingCountry(bookingPostDTO.getBillingCountry());
		existingBooking.setBillingPostalCode(bookingPostDTO.getBillingPostalCode());

		// Save the updated booking
		Booking updatedBooking = saveEntity(existingBooking);
		return bookingMapper.toResponseDTO(updatedBooking);
	}
}
