package com.hotel.booking.system.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.booking.system.api.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>{

}