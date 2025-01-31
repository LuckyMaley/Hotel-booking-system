package com.hotel.booking.system.api.security.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {
	Optional<ApplicationUser> findByEmail(String email);
}
