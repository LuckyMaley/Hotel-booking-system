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
import org.springframework.web.bind.annotation.RestController;

import com.hotel.booking.system.api.dto.BookingResponseDTO;
import com.hotel.booking.system.api.dto.post.BookingPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.service.impl.BookingServiceImpl;
import com.hotel.booking.system.api.service.impl.CustomerServiceImpl;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class BookingController {
	private final BookingServiceImpl bookingService;
	private final CustomerServiceImpl customerService;

    /**
     * Create a new booking
     * POST /api/booking
     */
    @PostMapping("/booking")
    public ResponseEntity<Map<String, Object>> saveBooking(@Valid @RequestBody BookingPostDTO bookingPostDTO) {
        Map<String, Object> response = new HashMap<>();

        try {
            BookingResponseDTO savedBooking = bookingService.createBooking(bookingPostDTO);
            response.put("booking", savedBooking);
            response.put("message", "Booking saved successfully");
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            response.put("message", "An error occurred while saving the booking");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Retrieve all bookings
     * GET /api/public/bookings
     */
    @GetMapping("/public/bookings")
    public ResponseEntity<Map<String, Object>> getAllBookings() {
        Map<String, Object> response = new HashMap<>();

        try {
            List<BookingResponseDTO> bookings = bookingService.getAllBookings();
            response.put("bookings", bookings);
            response.put("message", "Bookings retrieved successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "An error occurred while retrieving bookings");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Retrieve a booking by ID
     * GET /api/public/booking/{id}
     */
    @GetMapping("/public/booking/{id}")
    public ResponseEntity<Map<String, Object>> getBookingById(@PathVariable long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            BookingResponseDTO booking = bookingService.getBookingById(id);
            response.put("booking", booking);
            response.put("message", "Booking retrieved successfully");
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
     * Retrieve a booking by ID
     * GET /api/public/booking/customer/{id}
     */
    @GetMapping("/public/booking/customer/{customerId}")
    public ResponseEntity<Map<String, Object>> getBookingByCustomerId(@PathVariable long customerId) {
        Map<String, Object> response = new HashMap<>();

        try {
            List<BookingResponseDTO> booking = bookingService.getBookingByCustomerId(customerId);
            response.put("booking", booking);
            response.put("message", "Booking retrieved successfully");
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
     * Delete a booking by ID
     * DELETE /api/booking/{id}
     */
    @DeleteMapping("/booking/{id}")
    public ResponseEntity<Map<String, Object>> deleteBookingById(@PathVariable long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            BookingResponseDTO booking = bookingService.getBookingById(id);
            bookingService.deleteBooking(id);

            response.put("bookingId", booking.getId());
            Customer customer = customerService.getEntityById(booking.getCustomerId());
            response.put("message", "Booking for " + customer.getFirstName() +  " " + customer.getLastName() + " deleted successfully");
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
     * Update a booking by ID
     * PUT /api/booking/{id}
     */
    @PutMapping("/booking/{id}")
    public ResponseEntity<Map<String, Object>> updateBooking(@PathVariable Long id, @Valid @RequestBody BookingPostDTO bookingPostDTO) {
        Map<String, Object> response = new HashMap<>();

        try {
            BookingResponseDTO updatedBooking = bookingService.updateBooking(id, bookingPostDTO);
            response.put("booking", updatedBooking);
            response.put("message", "Booking updated successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (IllegalArgumentException e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            response.put("error", "An unexpected error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
