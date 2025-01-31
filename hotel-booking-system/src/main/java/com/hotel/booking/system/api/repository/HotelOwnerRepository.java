package com.hotel.booking.system.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.booking.system.api.model.HotelOwner;

public interface HotelOwnerRepository extends JpaRepository<HotelOwner, Long> {
	Optional<HotelOwner> findByEmail(String email);
}
