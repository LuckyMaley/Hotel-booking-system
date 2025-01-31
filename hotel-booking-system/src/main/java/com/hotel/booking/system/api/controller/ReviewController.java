package com.hotel.booking.system.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.booking.system.api.dto.ReviewResponseDTO;
import com.hotel.booking.system.api.dto.post.ReviewPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.service.impl.ReviewServiceImpl;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ReviewController {

	private final ReviewServiceImpl reviewService;

	/**
	 * Create a new review POST /api/review
	 */
	@PostMapping("/review")
	public ResponseEntity<Map<String, Object>> createReview(@Valid @RequestBody ReviewPostDTO reviewPostDTO) {
		Map<String, Object> response = new HashMap<>();

		try {
			ReviewResponseDTO savedReview = reviewService.createReview(reviewPostDTO);
			response.put("review", savedReview);
			response.put("message", "Review created successfully");
			return ResponseEntity.status(HttpStatus.CREATED).body(response);
		} catch (Exception e) {
			response.put("message", "An error occurred while creating the review");
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	/**
	 * Create a new review POST /api/review/customer-review
	 */
	@PostMapping("/review/customer-review")
	public ResponseEntity<Map<String, Object>> createCustomerReview(@RequestParam Long hotelId,
			@RequestParam String email, @Valid @RequestBody ReviewPostDTO reviewPostDTO) {
		Map<String, Object> response = new HashMap<>();

		try {
			ReviewResponseDTO savedReview = reviewService.createCustomerReview(hotelId, email, reviewPostDTO);
			if (savedReview != null) {
				response.put("review", savedReview);
				response.put("message", "Review created successfully");
				return ResponseEntity.status(HttpStatus.CREATED).body(response);
			} else {
				response.put("message", "You must have booked the hotel before you can review it");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
			}
		} catch (Exception e) {
			response.put("message", "An error occurred while creating the review");
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	/**
	 * Retrieve all reviews GET /api/public/reviews
	 */

	@GetMapping("/public/reviews")
	public ResponseEntity<Map<String, Object>> getAllReviews() {
		Map<String, Object> response = new HashMap<>();

		try {
			List<ReviewResponseDTO> reviews = reviewService.getAllReviews();
			response.put("reviews", reviews);
			response.put("message", "Reviews retrieved successfully");
			return ResponseEntity.ok(response);
		} catch (Exception e) {
			response.put("message", "An error occurred while retrieving reviews");
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	/**
	 * Retrieve a review by ID GET /api/public/review/{id}
	 */
	@GetMapping("/public/review/{id}")
	public ResponseEntity<Map<String, Object>> getReviewById(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();

		try {
			ReviewResponseDTO review = reviewService.getReviewById(id);
			response.put("review", review);
			response.put("message", "Review retrieved successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	/**
	 * Delete a review by ID DELETE /api/review/{id}
	 */
	@DeleteMapping("/review/{id}")
	public ResponseEntity<Map<String, Object>> deleteReviewById(@PathVariable Long id) {
		Map<String, Object> response = new HashMap<>();

		try {
			reviewService.deleteReview(id);
			response.put("reviewId", id);
			response.put("message", "Review deleted successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", "An unexpected error occurred: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	/**
	 * Update a review by ID PUT /api/review/{id}
	 */
	@PutMapping("/review/{id}")
	public ResponseEntity<Map<String, Object>> updateReview(@PathVariable Long id,
			@Valid @RequestBody ReviewPostDTO reviewPostDTO) {
		Map<String, Object> response = new HashMap<>();

		try {
			ReviewResponseDTO updatedReview = reviewService.updateReview(id, reviewPostDTO);
			response.put("review", updatedReview);
			response.put("message", "Review updated successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", "An unexpected error occurred: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	@GetMapping("/public/review/reviews-for-hotel/{hotelId}")
	public ResponseEntity<Map<String, Object>> getHotelReviews(@PathVariable long hotelId) {

		Map<String, Object> response = new HashMap<>();

		try {
			List<ReviewResponseDTO> reviews = reviewService.getHotelReviews(hotelId);

			response.put("reviews", reviews);
			response.put("message", "Review retrieved successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			// TODO: handle exception
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}
