package com.hotel.booking.system.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotel.booking.system.api.dto.ReviewResponseDTO;
import com.hotel.booking.system.api.dto.mapper.ReviewMapper;
import com.hotel.booking.system.api.dto.post.ReviewPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Booking;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.Review;
import com.hotel.booking.system.api.model.Room;
import com.hotel.booking.system.api.repository.BookingRepository;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.repository.HotelRepository;
import com.hotel.booking.system.api.repository.ReviewRepository;
import com.hotel.booking.system.api.repository.RoomRepository;
import com.hotel.booking.system.api.service.GenericService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@ComponentScan(basePackages = { "com.hotel.booking.system.api", "com.hotel.booking.system.api.dto.mapper" })
public class ReviewServiceImpl implements GenericService<Review> {

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private ReviewMapper reviewMapper;

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private BookingRepository bookingRepository;
	@Autowired
	private HotelRepository hotelRepository;
	@Autowired
	private RoomRepository roomRepository;

	// Removed Autowired , was causing bean type issues

	@Override
	public Review saveEntity(Review review) {
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getAllEntities() {
		return reviewRepository.findAll();
	}

	@Override
	public Review getEntityById(long id) {
		/*
		 * Optional<Review> review = reviewRepository.findById(id);
		 * if(review.isPresent()) { return review.get(); } else { throw new
		 * ResourceNotFoundException("Review", "Id", review); }
		 */

		return reviewRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Review", "Id", id));
	}

	@Override
	public Review updateEntity(Review review, long id) {
		Review existingReview = reviewRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Review", "Id", id));
		existingReview.setHotel(review.getHotel());
		existingReview.setCustomer(review.getCustomer());
		existingReview.setRating(review.getRating());
		existingReview.setComment(review.getComment());
		existingReview.setTitle(review.getTitle());
		reviewRepository.save(existingReview);

		return existingReview;
	}

	@Override
	public void deleteEntity(long id) {
		reviewRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Review", "Id", id));
		reviewRepository.deleteById(id);
	}

	@Transactional
	public ReviewResponseDTO createReview(ReviewPostDTO reviewPostDTO) {
		Review review = reviewMapper.toEntity(reviewPostDTO);
		Customer customer = customerRepository.findById(reviewPostDTO.getCustomerId())
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "ID", reviewPostDTO.getCustomerId()));
		review.setCustomer(customer);

		Hotel hotel = hotelRepository.findById(reviewPostDTO.getHotelId())
				.orElseThrow(() -> new ResourceNotFoundException("Hotel", "ID", reviewPostDTO.getHotelId()));
		review.setHotel(hotel);

		Review savedReview = saveEntity(review);
		return reviewMapper.toResponseDTO(savedReview);
	}

	@Transactional

	public ReviewResponseDTO createCustomerReview(Long hotelId, String email, ReviewPostDTO reviewPostDTO) {
		Review review = reviewMapper.toEntity(reviewPostDTO);
		Customer customer = customerRepository.findByEmail(email)
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "Email", email));
		review.setCustomer(customer);

		Hotel hotel = hotelRepository.findById(hotelId)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel", "ID", reviewPostDTO.getHotelId()));
		review.setHotel(hotel);
		List<Room> rooms = roomRepository.findByHotel(hotel);
		int count = 0;
		for (Room room : rooms) {
			List<Booking> list = bookingRepository.findByRoom(room);
			if (list.size() > 0) {
				count++;
			}
		}
		if (count == 0) {
			return null;
		}
		Review savedReview = saveEntity(review);
		return reviewMapper.toResponseDTO(savedReview);
	}

	public List<ReviewResponseDTO> getAllReviews() {
		return getAllEntities().stream().map(reviewMapper::toResponseDTO).collect(Collectors.toList());
	}

	public ReviewResponseDTO getReviewById(Long id) {
		Review review = getEntityById(id);
		return reviewMapper.toResponseDTO(review);
	}

	@Transactional
	public void deleteReview(Long id) {
		Review review = getEntityById(id);
		deleteEntity(review.getId());
	}

	@Transactional
	public ReviewResponseDTO updateReview(Long id, ReviewPostDTO reviewPostDTO) {
		Review existingReview = getEntityById(id);
		Optional<Hotel> hotel = hotelRepository.findById(reviewPostDTO.getHotelId());
		if (hotel.isPresent()) {
			existingReview.setHotel(hotel.get());
		}
		Optional<Customer> customer = customerRepository.findById(reviewPostDTO.getCustomerId());
		if (customer.isPresent()) {
			existingReview.setCustomer(customer.get());
		}
		existingReview.setComment(reviewPostDTO.getComment());
		existingReview.setRating(reviewPostDTO.getRating());

		Review updatedReview = saveEntity(existingReview);
		return reviewMapper.toResponseDTO(updatedReview);
	}

	public List<ReviewResponseDTO> getHotelReviews(Long hotelId) {
		List<ReviewResponseDTO> reviewResponseDTO = new ArrayList<ReviewResponseDTO>();
		Hotel hotel = hotelRepository.findById(hotelId)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel", "ID", hotelId));
		List<Review> reviews = reviewRepository.findByHotel(hotel);
		for (Review review : reviews) {
			reviewResponseDTO.add(reviewMapper.toResponseDTO(review));
		}
		return reviewResponseDTO;
	}

}
