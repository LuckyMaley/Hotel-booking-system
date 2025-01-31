package com.hotel.booking.system.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.booking.system.api.model.Administrator;

public interface AdministratorRepository extends JpaRepository<Administrator, Long>{
	Optional<Administrator> findByEmail(String email);
}