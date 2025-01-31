package com.hotel.booking.system.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.booking.system.api.model.GlobalCharges;

public interface GlobalChargesRepository extends JpaRepository<GlobalCharges, Long>{
}