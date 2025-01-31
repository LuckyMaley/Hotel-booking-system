package com.hotel.booking.system.api.controller;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hotel.booking.system.api.dto.ReviewResponseDTO;
import com.hotel.booking.system.api.dto.post.ReviewPostDTO;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.repository.HotelOwnerRepository;
import com.hotel.booking.system.api.repository.HotelRepository;
import com.hotel.booking.system.api.repository.ReviewRepository; // Import the ReviewRepository
import com.hotel.booking.system.api.security.config.JwtService;
import com.hotel.booking.system.api.security.user.ApplicationUser;
import com.hotel.booking.system.api.security.user.ApplicationUserRole;
import com.hotel.booking.system.api.service.impl.ReviewServiceImpl;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional // This ensures the database is rolled back after each test
class ReviewControllerIntegrationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private HotelOwnerRepository hotelOwnerRepository;

    @Autowired
    private ReviewServiceImpl reviewService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @MockBean
    private JwtService jwtService;

    @Autowired
    private ObjectMapper objectMapper;

    private String mockJwtToken;
    private ReviewPostDTO reviewPostDTO;
    private ReviewResponseDTO reviewResponseDTO;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        // Clear repositories
        reviewRepository.deleteAll();
//        customerRepository.deleteAll();
//        hotelRepository.deleteAll();
        // Initialize test data
        reviewPostDTO = ReviewPostDTO.builder()
                .hotelId(1L)
                .customerId(1L)
                .rating(5)
                .comment("Excellent service!")
                .build();

        reviewResponseDTO = ReviewResponseDTO.builder()
                .id(1L)
                .hotelId(1L)
                .customerId(1L)
                .rating(5)
                .comment("Excellent service!")
                .build();


        Customer customer1 = new Customer("John", "Doe", "john0002@example.com", "john0002@example.com", "0864332456", "Durban", "South Africa", "4001", "66 Hanover Road, Durban, 4001");
        customerRepository.save(customer1);

        HotelOwner hotelOwner1 = new HotelOwner("Jack", "Sparrow", "jack2000@example.com", passwordEncoder.encode("jack@123456"), new BigDecimal("5000"), new BigDecimal("5000"));
		hotelOwnerRepository.save(hotelOwner1);

		Hotel hotel1 = new Hotel("Sun-fair", "34 New England Street, PMB, 3201", "Pietermaritzburg", "luxury", 5, "Pool, Gym, etc", "Free Parking", null, hotelOwnerRepository.findAll().get(0));
		hotelRepository.save(hotel1);

        ApplicationUser user = new ApplicationUser("testuser", "test", "testuser", "0864332453", "1234", null, null, null, null, ApplicationUserRole.CUSTOMER);

        // Generate a mock JWT token
        mockJwtToken = jwtService.generateToken(user);

        // Configure the JwtService mock
        when(jwtService.isTokenValid(mockJwtToken, user)).thenReturn(true);
        when(jwtService.extractUsername(mockJwtToken)).thenReturn("testuser");


    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void createReview_ShouldReturnCreatedReview() throws Exception {
        // Arrange
        // We don't need to mock the service here since we're using the actual repository

        // Act & Assert
        mockMvc.perform(post("/api/review")
                .header("Authorization", "Bearer " + mockJwtToken) // Attach the mock token
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(reviewPostDTO)))
                .andDo(print()) // Prints request and response details
                .andExpect(status().isCreated())
//                .andExpect(jsonPath("$.review.id").value(reviewResponseDTO.getId()))
                .andExpect(jsonPath("$.review.hotelId").value(reviewResponseDTO.getHotelId()))
                .andExpect(jsonPath("$.review.customerId").value(reviewResponseDTO.getCustomerId()))
                .andExpect(jsonPath("$.review.rating").value(reviewResponseDTO.getRating()))
                .andExpect(jsonPath("$.review.comment").value(reviewResponseDTO.getComment()))
                .andExpect(jsonPath("$.message").value("Review created successfully"));
    }

    @Test
    void getAllReviews_ShouldReturnListOfReviews() throws Exception {
        // Arrange
        reviewService.createReview(reviewPostDTO); // Create a review to retrieve
        List<ReviewResponseDTO> reviews = reviewService.getAllReviews(); // This will fetch the reviews from the DB

        // Act & Assert
        mockMvc.perform(get("/api/public/reviews")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.reviews", hasSize(reviews.size())))
                .andExpect(jsonPath("$.reviews[0].id").value(reviews.get(0).getId()))
                .andExpect(jsonPath("$.reviews[0].hotelId").value(reviews.get(0).getHotelId()))
                .andExpect(jsonPath("$.reviews[0].customerId").value(reviews.get(0).getCustomerId()))
                .andExpect(jsonPath("$.reviews[0].rating").value(reviews.get(0).getRating()))
                .andExpect(jsonPath("$.reviews[0].comment").value(reviews.get(0).getComment()))
                .andExpect(jsonPath("$.message").value("Reviews retrieved successfully"));
    }

    @Test
    void getReviewById_ShouldReturnReview() throws Exception {
        // Arrange
        ReviewResponseDTO createdReview = reviewService.createReview(reviewPostDTO);

        // Act & Assert
        mockMvc.perform(get("/api/public/review/{id}", createdReview.getId())
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.review.id").value(createdReview.getId()))
                .andExpect(jsonPath("$.review.hotelId").value(createdReview.getHotelId()))
                .andExpect(jsonPath("$.review.customerId").value(createdReview.getCustomerId()))
                .andExpect(jsonPath("$.review.rating").value(createdReview.getRating()))
                .andExpect(jsonPath("$.review.comment").value(createdReview.getComment()))
                .andExpect(jsonPath("$.message").value("Review retrieved successfully"));
    }

    @Test
    void getReviewById_ShouldReturnNotFound() throws Exception {
        // Act & Assert
        mockMvc.perform(get("/api/public/review/{id}", 12L)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Review not found with Id : '12'"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void deleteReview_ShouldReturnSuccessMessage() throws Exception {
        // Arrange
        ReviewResponseDTO createdReview = reviewService.createReview(reviewPostDTO);

        // Act & Assert
        mockMvc.perform(delete("/api/review/{id}", createdReview.getId())
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.reviewId").value(createdReview.getId()))
                .andExpect(jsonPath("$.message").value("Review deleted successfully"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void deleteReview_ShouldReturnNotFound() throws Exception {
        // Act & Assert
        mockMvc.perform(delete("/api/review/{id}", 12L)
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Review not found with Id : '12'"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void updateReview_ShouldReturnUpdatedReview() throws Exception {
        // Arrange
        ReviewResponseDTO createdReview = reviewService.createReview(reviewPostDTO);
        ReviewPostDTO updatedReviewPostDTO = ReviewPostDTO.builder()
                .hotelId(1L)
                .customerId(1L)
                .rating(4)
                .comment("Good service.")
                .build();

        // Act & Assert
        mockMvc.perform(put("/api/review/{id}", createdReview.getId())
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedReviewPostDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.review.hotelId").value(updatedReviewPostDTO.getHotelId()))
                .andExpect(jsonPath("$.review.customerId").value(updatedReviewPostDTO.getCustomerId()))
                .andExpect(jsonPath("$.review.rating").value(updatedReviewPostDTO.getRating()))
                .andExpect(jsonPath("$.review.comment").value(updatedReviewPostDTO.getComment()))
                .andExpect(jsonPath("$.message").value("Review updated successfully"));
    }

    @Test
    @WithMockUser(username = "testuser", roles = {"CUSTOMER"})
    void updateReview_ShouldReturnNotFound() throws Exception {
        // Arrange
        ReviewPostDTO updatedReviewPostDTO = ReviewPostDTO.builder()
                .hotelId(1L)
                .customerId(1L)
                .rating(4)
                .comment("Good service.")
                .build();

        // Act & Assert
        mockMvc.perform(put("/api/review/{id}", 12L)
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedReviewPostDTO)))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("Review not found with Id : '12'"));
    }
}
