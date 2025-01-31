package com.hotel.booking.system.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hotel.booking.system.api.dto.PaymentResponseDTO;
import com.hotel.booking.system.api.dto.post.PaymentPostDTO;
import com.hotel.booking.system.api.service.impl.PaymentServiceImpl;

@RestController
@RequestMapping("/api")
public class PaymentController {
    @Autowired
    private PaymentServiceImpl paymentService;

    // Create Payment
    @PostMapping("/payment")
    public ResponseEntity<PaymentResponseDTO> createPayment(@RequestBody PaymentPostDTO paymentPostDTO) {
        PaymentResponseDTO createdPayment = paymentService.createPayment(paymentPostDTO);
        return new ResponseEntity<>(createdPayment, HttpStatus.CREATED);
    }

    // Get All Payments
    @GetMapping("/public/payments")
    public ResponseEntity<List<PaymentResponseDTO>> getAllPayments() {
        List<PaymentResponseDTO> payments = paymentService.getAllPayments();
        return ResponseEntity.ok(payments);
    }

    // Get Payment by ID
    @GetMapping("/public/payment/{id}")
    public ResponseEntity<PaymentResponseDTO> getPaymentById(@PathVariable Long id) {
        PaymentResponseDTO payment = paymentService.getPaymentById(id);
        return ResponseEntity.ok(payment);
    }

    // Update Payment
    @PutMapping("/payment/{id}")
    public ResponseEntity<PaymentResponseDTO> updatePayment(
        @PathVariable Long id,
        @RequestBody PaymentPostDTO paymentPostDTO) {
        
        PaymentResponseDTO updatedPayment = paymentService.updatePayment(id, paymentPostDTO);
        return ResponseEntity.ok(updatedPayment);
    }

    // Delete Payment
    @DeleteMapping("/payment/{id}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
