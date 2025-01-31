package com.hotel.booking.system.api.controller;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.hotel.booking.system.api.dto.BookingResponseDTO;
import com.hotel.booking.system.api.dto.post.BookingPostDTO;
import com.hotel.booking.system.api.repository.BookingRepository;
import com.hotel.booking.system.api.repository.PaymentRepository;
import com.hotel.booking.system.api.security.config.JwtService;
import com.hotel.booking.system.api.security.user.ApplicationUser;
import com.hotel.booking.system.api.service.impl.BookingServiceImpl;
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

import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional // Ensures that each test runs in a transaction that rolls back after the test completes
class BookingControllerIntegrationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private BookingRepository bookingRepository;
    
    @Autowired
    private PaymentRepository paymentRepository;
    
    @Autowired
    private BookingServiceImpl bookingService;

    @MockBean
    private JwtService jwtService;

    @Autowired
    private ObjectMapper objectMapper;


    private String mockJwtToken;
    private BookingPostDTO bookingPostDTO;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

//      Clear repositories to ensure a clean state
        paymentRepository.deleteAll();
      bookingRepository.deleteAll();



        // Initialize test BookingPostDTO with existing customerId and roomId
        bookingPostDTO = BookingPostDTO.builder()
                .customerId(1L)
                .roomId(1L)
                .checkInDate(LocalDateTime.now().plusDays(1))
                .checkOutDate(LocalDateTime.now().plusDays(5))
                .totalPrice(new BigDecimal("800"))
                .status("CONFIRMED")
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
    void createBooking_ShouldReturnCreatedBooking() throws Exception {
        // Arrange
        // No need to mock the service as we're using the actual service and repository

        // Act & Assert
        mockMvc.perform(post("/api/booking")
                .header("Authorization", "Bearer " + mockJwtToken) // Attach the mock token
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(bookingPostDTO))) // Serialize DTO to JSON
                .andDo(print()) // Prints request and response details
                .andExpect(status().isCreated())
                //.andExpect(jsonPath("$.booking.id").value(1L)) // Assuming first booking has ID 1
                .andExpect(jsonPath("$.booking.customerId").value(1L))
                .andExpect(jsonPath("$.booking.roomId").value(1L))
                .andExpect(jsonPath("$.booking.totalPrice").value(800.00))
                .andExpect(jsonPath("$.booking.status").value("CONFIRMED"))
                .andExpect(jsonPath("$.message").value("Booking saved successfully"));
    }

    @Test
    void getAllBookings_ShouldReturnListOfBookings() throws Exception {
        // Arrange
        // Create a booking to retrieve
        BookingResponseDTO createdBooking = bookingService.createBooking(bookingPostDTO);

        // Act & Assert
        mockMvc.perform(get("/api/public/bookings")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.bookings", hasSize(1)))
                .andExpect(jsonPath("$.bookings[0].id").value(createdBooking.getId()))
                .andExpect(jsonPath("$.bookings[0].customerId").value(createdBooking.getCustomerId()))
                .andExpect(jsonPath("$.bookings[0].roomId").value(createdBooking.getRoomId()))
                .andExpect(jsonPath("$.bookings[0].totalPrice").value(createdBooking.getTotalPrice()))
                .andExpect(jsonPath("$.bookings[0].status").value(createdBooking.getStatus()))
                .andExpect(jsonPath("$.message").value("Bookings retrieved successfully"));
    }

    @Test
    void getBookingById_ShouldReturnBooking() throws Exception {
        // Arrange
        BookingResponseDTO createdBooking = bookingService.createBooking(bookingPostDTO);

        // Act & Assert
        mockMvc.perform(get("/api/public/booking/{id}", createdBooking.getId())
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.booking.id").value(createdBooking.getId()))
                .andExpect(jsonPath("$.booking.customerId").value(createdBooking.getCustomerId()))
                .andExpect(jsonPath("$.booking.roomId").value(createdBooking.getRoomId()))
                .andExpect(jsonPath("$.booking.totalPrice").value(createdBooking.getTotalPrice()))
                .andExpect(jsonPath("$.booking.status").value(createdBooking.getStatus()))
                .andExpect(jsonPath("$.message").value("Booking retrieved successfully"));
    }

    @Test
    void getBookingById_ShouldReturnNotFound() throws Exception {
        // Act & Assert
        mockMvc.perform(get("/api/public/booking/{id}", 12L)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Booking not found with Id : '12'"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void updateBooking_ShouldReturnUpdatedBooking() throws Exception {
        // Arrange
        BookingResponseDTO createdBooking = bookingService.createBooking(bookingPostDTO);
        BookingPostDTO updatedBookingPostDTO = BookingPostDTO.builder()
                .customerId(1L)
                .roomId(1L)
                .checkInDate(LocalDateTime.now().plusDays(2))
                .checkOutDate(LocalDateTime.now().plusDays(6))
                .totalPrice(new BigDecimal("1000"))
                .status("CONFIRMED")
                .build();


        // Act & Assert
        mockMvc.perform(put("/api/booking/{id}", createdBooking.getId())
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedBookingPostDTO)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.booking.roomId").value(updatedBookingPostDTO.getRoomId()))
                .andExpect(jsonPath("$.booking.customerId").value(updatedBookingPostDTO.getCustomerId()))
                .andExpect(jsonPath("$.booking.totalPrice").value(updatedBookingPostDTO.getTotalPrice()))
                .andExpect(jsonPath("$.booking.status").value("CONFIRMED"))
                .andExpect(jsonPath("$.message").value("Booking updated successfully"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void updateBooking_ShouldReturnNotFound() throws Exception {
        // Arrange
        BookingPostDTO updatedBookingPostDTO = BookingPostDTO.builder()
                .customerId(1L)
                .roomId(1L)
                .checkInDate(LocalDateTime.now().plusDays(2))
                .checkOutDate(LocalDateTime.now().plusDays(6))
                .totalPrice(new BigDecimal("1000.00"))
                .status("CONFIRMED")
                .build();

        // Act & Assert
        mockMvc.perform(put("/api/booking/{id}", 12L)
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedBookingPostDTO)))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Booking not found with Id : '12'"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void deleteBooking_ShouldReturnSuccessMessage() throws Exception {
        // Arrange
        BookingResponseDTO createdBooking = bookingService.createBooking(bookingPostDTO);

        // Act & Assert
        mockMvc.perform(delete("/api/booking/{id}", createdBooking.getId())
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.bookingId").value(createdBooking.getId()))
                .andExpect(jsonPath("$.message").value(containsString("deleted successfully")));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void deleteBooking_ShouldReturnNotFound() throws Exception {
        // Act & Assert
        mockMvc.perform(delete("/api/booking/{id}", 12L)
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Booking not found with Id : '12'"));
    }
}
