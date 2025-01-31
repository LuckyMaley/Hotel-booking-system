package com.hotel.booking.system.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.booking.system.api.model.Card;
import com.hotel.booking.system.api.model.Customer;

public interface CardRepository extends JpaRepository<Card, Long>{
	List<Card> findByCustomer(Customer customer);
}
