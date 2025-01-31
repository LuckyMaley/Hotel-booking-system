package com.hotel.booking.system.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.booking.system.api.model.Booking;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.Room;

public interface BookingRepository extends JpaRepository<Booking, Long> {
	List<Booking> findByCustomer(Customer customer);
	List<Booking> findByRoom(Room room);
}