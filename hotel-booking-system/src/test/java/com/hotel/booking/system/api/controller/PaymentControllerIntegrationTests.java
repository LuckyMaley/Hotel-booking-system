package com.hotel.booking.system.api.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hotel.booking.system.api.dto.post.PaymentPostDTO;
import com.hotel.booking.system.api.security.config.JwtService;
import com.hotel.booking.system.api.security.user.ApplicationUser;
import com.hotel.booking.system.api.dto.PaymentResponseDTO;
import com.hotel.booking.system.api.service.impl.PaymentServiceImpl;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional

class PaymentControllerIntegrationTests {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private PaymentServiceImpl paymentService;

    @MockBean
    private JwtService jwtService;

    @Autowired
    private ObjectMapper objectMapper;


    private String mockJwtToken;

    private PaymentPostDTO paymentPostDTO;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        
        // Setup initial Payment DTOs
        paymentPostDTO = PaymentPostDTO.builder()
        		.cardId(1L)
                .bookingId(1L)
                .transactionFee(new BigDecimal("500"))
                .paymentDate(LocalDateTime.now())
                .build();

        // Define a fixed JWT token
        mockJwtToken = "test-token";

        // Configure the JwtService mock
        when(jwtService.generateToken(any(ApplicationUser.class))).thenReturn(mockJwtToken);
        when(jwtService.isTokenValid(eq(mockJwtToken), any(ApplicationUser.class))).thenReturn(true);
        when(jwtService.extractUsername(eq(mockJwtToken))).thenReturn("testuser");
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void createPayment_ShouldReturnCreatedPayment() throws Exception {
        mockMvc.perform(post("/api/payment")
        		.header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(paymentPostDTO)))
                .andExpect(status().isCreated());
    }

    @Test
    void getAllPayments_ShouldReturnListOfPayments() throws Exception {
        paymentService.createPayment(paymentPostDTO);

        mockMvc.perform(get("/api/public/payments")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
    
    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void updatePayment_ShouldReturnUpdatedPayment() throws Exception {
    	PaymentResponseDTO responseDTO = paymentService.createPayment(paymentPostDTO);


        responseDTO.setTransactionFee(new BigDecimal("600"));

        mockMvc.perform(put("/api/payment/{id}",responseDTO.getId())
        		.header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(responseDTO)))
                .andExpect(status().isOk());
    }

    @Test
    void getPaymentById_ShouldReturnPayment() throws Exception {
    	PaymentResponseDTO responseDTO = paymentService.createPayment(paymentPostDTO);

        mockMvc.perform(get("/api/public/payment/{id}",responseDTO.getId())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void deletePayment_ShouldReturnSuccessMessage() throws Exception {
    	PaymentResponseDTO responseDTO = paymentService.createPayment(paymentPostDTO);

        mockMvc.perform(delete("/api/payment/{id}",responseDTO.getId())
        		.header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());
    }
}
