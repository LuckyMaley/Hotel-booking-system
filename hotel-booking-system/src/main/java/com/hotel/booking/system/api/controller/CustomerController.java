package com.hotel.booking.system.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.booking.system.api.dto.CustomerResponseDTO;
import com.hotel.booking.system.api.dto.post.CustomerPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.service.impl.CustomerServiceImpl;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CustomerController {

	private final CustomerServiceImpl customerService;

	/**
     * Create a new customer
     * POST /api/customer
     */
    @PostMapping("/customer")
    public ResponseEntity<Map<String, Object>> saveCustomer(@Valid @RequestBody CustomerPostDTO customerPostDTO) {
        Map<String, Object> response = new HashMap<>();

        try {
            CustomerResponseDTO savedCustomer = customerService.createCustomer(customerPostDTO);
            response.put("customer", savedCustomer);
            response.put("message", "Customer saved successfully");
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            response.put("message", "An error occurred while saving the customer");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Retrieve all customers
     * GET /api/public/customers
     */
    @GetMapping("/public/customers")
    public ResponseEntity<Map<String, Object>> getAllCustomers() {
        Map<String, Object> response = new HashMap<>();

        try {
            List<CustomerResponseDTO> customers = customerService.getAllCustomers();
            response.put("customers", customers);
            response.put("message", "Customers retrieved successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "An error occurred while retrieving customers");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Retrieve a customer by ID
     * GET /api/public/customer/{id}
     */
    @GetMapping("/public/customer/{id}")
    public ResponseEntity<Map<String, Object>> getCustomerById(@PathVariable long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            CustomerResponseDTO customer = customerService.getCustomerById(id);
            response.put("customer", customer);
            response.put("message", "Customer retrieved successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    /**
     * Retrieve a customer by ID
     * GET /api/public/customer/{email}
     */
    @GetMapping("/public/customer-info/{email}")
    public ResponseEntity<Map<String, Object>> getCustomerById(@PathVariable String email) {
        Map<String, Object> response = new HashMap<>();

        try {
            CustomerResponseDTO customer = customerService.getCustomerByEmail(email);
            response.put("customer", customer);
            response.put("message", "Customer retrieved successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Delete a customer by ID
     * DELETE /api/customer/{id}
     */
    @DeleteMapping("/customer/{id}")
    public ResponseEntity<Map<String, Object>> deleteCustomerById(@PathVariable long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            customerService.deleteCustomer(id);
            response.put("customerId", id);
            response.put("message", "Customer deleted successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("error", "An unexpected error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Update a customer by ID
     * PUT /api/customer/{id}
     */
    @PutMapping("/customer/{id}")
    public ResponseEntity<Map<String, Object>> updateCustomer(@PathVariable Long id, @Valid @RequestBody CustomerPostDTO customerPostDTO) {
        Map<String, Object> response = new HashMap<>();

        try {
            CustomerResponseDTO updatedCustomer = customerService.updateCustomer(id, customerPostDTO);
            response.put("customer", updatedCustomer);
            response.put("message", "Customer updated successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("error", "An unexpected error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
