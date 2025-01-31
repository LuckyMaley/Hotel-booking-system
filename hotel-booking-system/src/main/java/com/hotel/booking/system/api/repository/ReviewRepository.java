package com.hotel.booking.system.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{
	List<Review> findByCustomerId(Long customerId);
	List<Review> findByHotel(Hotel hotel);
}
