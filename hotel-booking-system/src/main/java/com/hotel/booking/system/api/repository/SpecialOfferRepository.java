package com.hotel.booking.system.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.booking.system.api.model.SpecialOffer;

public interface SpecialOfferRepository extends JpaRepository<SpecialOffer, Long>{
}