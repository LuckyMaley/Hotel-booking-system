package com.hotel.booking.system.api.controller;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.greaterThan;
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

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hotel.booking.system.api.dto.CustomerResponseDTO;
import com.hotel.booking.system.api.dto.post.CustomerPostDTO;
import com.hotel.booking.system.api.security.config.JwtService;
import com.hotel.booking.system.api.security.user.ApplicationUser;
import com.hotel.booking.system.api.service.impl.CustomerServiceImpl;
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

@SpringBootTest
@AutoConfigureMockMvc
@Transactional // Ensures each test is rolled back after execution
class CustomerControllerIntegrationTests {

    @Autowired
    private MockMvc mockMvc;


//    @Autowired
//    private BookingRepository bookingRepository;
//    
//    @Autowired
//    private ReviewRepository reviewRepository;

    @Autowired
    private CustomerServiceImpl customerService;

    @MockBean
    private JwtService jwtService;

    @Autowired
    private ObjectMapper objectMapper;


    private String mockJwtToken;
    private CustomerPostDTO customerPostDTO;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        // Initialize test CustomerPostDTO
        customerPostDTO = CustomerPostDTO.builder()
                .firstName("Jane")
                .lastName("Smith")
                .userName("janesmith")
                .email("jane.smith@example.com")
                .address("789 Pine St, Villagetown")
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
    void createCustomer_ShouldReturnCreatedCustomer() throws Exception {
        // Act & Assert
        mockMvc.perform(post("/api/customer")
                .header("Authorization", "Bearer " + mockJwtToken) 
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(customerPostDTO))) 
                .andDo(print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.customer.firstName").value("Jane"))
                .andExpect(jsonPath("$.customer.lastName").value("Smith"))
                .andExpect(jsonPath("$.customer.userName").value("janesmith"))
                .andExpect(jsonPath("$.customer.email").value("jane.smith@example.com"))
                .andExpect(jsonPath("$.customer.address").value("789 Pine St, Villagetown"))
                .andExpect(jsonPath("$.message").value("Customer saved successfully"));
    }

    @Test
    void getAllCustomers_ShouldReturnListOfCustomers() throws Exception {
        // Arrange
        
        // Act & Assert
        mockMvc.perform(get("/api/public/customers")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.customers", hasSize(greaterThan(0))))
                .andExpect(jsonPath("$.message").value("Customers retrieved successfully"));
    }

    @Test
    void getCustomerById_ShouldReurnCustomer() throws Exception {
        // Arrange
        CustomerResponseDTO createdCustomer = customerService.createCustomer(customerPostDTO);

        // Act & Assert
        mockMvc.perform(get("/api/public/customer/{id}", createdCustomer.getId())
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.customer.id").value(createdCustomer.getId()))
                .andExpect(jsonPath("$.customer.firstName").value(createdCustomer.getFirstName()))
                .andExpect(jsonPath("$.customer.lastName").value(createdCustomer.getLastName()))
                .andExpect(jsonPath("$.customer.userName").value(createdCustomer.getUserName()))
                .andExpect(jsonPath("$.customer.email").value(createdCustomer.getEmail()))
                .andExpect(jsonPath("$.customer.address").value(createdCustomer.getAddress()))
                .andExpect(jsonPath("$.message").value("Customer retrieved successfully"));
    }

    @Test
    void getCustomerById_ShouldReturnNotFound() throws Exception {
        // Act & Assert
        mockMvc.perform(get("/api/public/customer/{id}", 999L)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Customer not found with Id : '999'"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void updateCustomer_ShouldReturnUpdatedCustomer() throws Exception {
        // Arrange
        CustomerResponseDTO createdCustomer = customerService.createCustomer(customerPostDTO);
        CustomerPostDTO updatedCustomerPostDTO = CustomerPostDTO.builder()
                .firstName("Jane Updated")
                .lastName("Smith Updated")
                .userName("janeupdated")
                .email("jane.updated@example.com")
                .address("789 Pine St, Villagetown")
                .build();


        
        when(jwtService.isTokenValid(eq(mockJwtToken), any(ApplicationUser.class))).thenReturn(true);
        when(jwtService.extractUsername(eq(mockJwtToken))).thenReturn("testuser");

        // Act & Assert
        mockMvc.perform(put("/api/customer/{id}", createdCustomer.getId())
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedCustomerPostDTO)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("Customer updated successfully"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void updateCustomer_ShouldReturnNotFound() throws Exception {
        // Arrange
        CustomerPostDTO updatedCustomerPostDTO = CustomerPostDTO.builder()
                .firstName("Nonexistent")
                .lastName("User")
                .userName("nonexistentuser")
                .email("nonexistent@example.com")
                .address("Unknown Address")
                .build();

        // Act & Assert
        mockMvc.perform(put("/api/customer/{id}", 999L) // Non-existent ID
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedCustomerPostDTO)))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Customer not found with Id : '999'"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void deleteCustomer_ShouldReturnSuccessMessage() throws Exception {
        // Arrange
        CustomerResponseDTO createdCustomer = customerService.createCustomer(customerPostDTO);

        // Act & Assert
        mockMvc.perform(delete("/api/customer/{id}", createdCustomer.getId())
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.customerId").value(createdCustomer.getId()))
                .andExpect(jsonPath("$.message").value("Customer deleted successfully"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void deleteCustomer_ShouldReturnNotFound() throws Exception {
        // Act & Assert
        mockMvc.perform(delete("/api/customer/{id}", 999L) // Non-existent ID
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Customer not found with Id : '999'"));
    }
}
