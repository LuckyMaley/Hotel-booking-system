package com.hotel.booking.system.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.booking.system.api.model.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
	List<Hotel> findByCity(String city);
	
}
