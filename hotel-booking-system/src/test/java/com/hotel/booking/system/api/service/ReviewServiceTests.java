package com.hotel.booking.system.api.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.reset;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.hotel.booking.system.api.dto.ReviewResponseDTO;
import com.hotel.booking.system.api.dto.mapper.CustomerMapper;
import com.hotel.booking.system.api.dto.mapper.ReviewMapper;
import com.hotel.booking.system.api.dto.post.ReviewPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.model.Review;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.repository.HotelOwnerRepository;
import com.hotel.booking.system.api.repository.HotelRepository;
import com.hotel.booking.system.api.repository.ReviewRepository;
import com.hotel.booking.system.api.service.impl.ReviewServiceImpl;

@ExtendWith(MockitoExtension.class)
class ReviewServiceTest {

    @Mock
    private ReviewRepository reviewRepository;

    @Mock
    private ReviewMapper reviewMapper;
    
    @Mock
    private CustomerMapper customerMapper;
    
    //@Mock
    //private HotelMapper hotelMapper;
    
    //@Mock
    //private HotelOwnerMapper hotelOwnerMapper;
    
    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private HotelRepository hotelRepository;

    @Mock
    private HotelOwnerRepository hotelOwnerRepository;

    

    @InjectMocks
    private ReviewServiceImpl reviewService;

    private Review review;
    private ReviewPostDTO reviewPostDTO;
    private ReviewResponseDTO reviewResponseDTO;
    
    private Customer customer;

    @BeforeEach
    void setUp() {
        // Initialize test data
        reviewPostDTO = ReviewPostDTO.builder()
                .hotelId(1L)
                .customerId(1L)
                .rating(5)
                .comment("Excellent service!")
                .build();

        review = Review.builder()
                .hotel(new Hotel("Sun-fair", "34 New England Street, PMB, 3201", "Pietermaritzburg", "luxury", 5, "Pool, Gym, etc", "Free Parking", null, new HotelOwner("Jack", "Sparrow", "jack@example.com", "jack@123456", new BigDecimal("5000"), new BigDecimal("5000"))))
                .customer(new Customer("John", "Doe", "john@example.com", "john@example.com", "0864332456",  "Durban", "South Africa", "4001", "66 Hanover Road, Durban, 4001"))
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
        
       
        customer = Customer.builder()
        		.firstName("john")
                .lastName("doe")
                .userName("johndoe")
                .email("johndoe@example.com")
                .address("123 Main St")
                .build();

    }

    @AfterEach
    void tearDown() {
        // Reset mocks after each test
        reset(reviewRepository, reviewMapper);
    }

    @Test
    void createReview_ShouldReturnReviewResponseDTO() {
        // Arrange
        when(reviewMapper.toEntity(any(ReviewPostDTO.class))).thenReturn(review);
        when(reviewRepository.save(any(Review.class))).thenReturn(review);
        when(reviewMapper.toResponseDTO(any(Review.class))).thenReturn(reviewResponseDTO);
        when(customerRepository.findById(1L)).thenReturn(Optional.of(customer));
        when(hotelRepository.findById(1L)).thenReturn(Optional.of(new Hotel("Sun-fair", "34 New England Street, PMB, 3201", "Pietermaritzburg", "luxury", 5, "Pool, Gym, etc", "Free Parking", null, new HotelOwner("Jack", "Sparrow", "jack@example.com", "jack@123456", new BigDecimal("5000"), new BigDecimal("5000")))));

        // Act
        ReviewResponseDTO response = reviewService.createReview(reviewPostDTO);

        // Assert
        assertNotNull(response);
        assertEquals(reviewResponseDTO, response);
        verify(reviewMapper, times(1)).toEntity(reviewPostDTO);
        verify(reviewRepository, times(1)).save(review);
        verify(reviewMapper, times(1)).toResponseDTO(review);
    }

    @Test
    void getAllReviews_ShouldReturnListOfReviewResponseDTO() {
        // Arrange
        List<Review> reviews = Arrays.asList(review);
        List<ReviewResponseDTO> reviewResponses = Arrays.asList(reviewResponseDTO);

        when(reviewRepository.findAll()).thenReturn(reviews);
        when(reviewMapper.toResponseDTO(any(Review.class))).thenReturn(reviewResponseDTO);

        // Act
        List<ReviewResponseDTO> response = reviewService.getAllReviews();

        // Assert
        assertNotNull(response);
        assertEquals(reviewResponses.size(), response.size());
        assertEquals(reviewResponseDTO, response.get(0));
        verify(reviewRepository, times(1)).findAll();
        verify(reviewMapper, times(1)).toResponseDTO(review);
    }

    @Test
    void getReviewById_ShouldReturnReviewResponseDTO() {
        // Arrange
        when(reviewRepository.findById(1L)).thenReturn(Optional.of(review));
        when(reviewMapper.toResponseDTO(review)).thenReturn(reviewResponseDTO);

        // Act
        ReviewResponseDTO response = reviewService.getReviewById(1L);

        // Assert
        assertNotNull(response);
        assertEquals(reviewResponseDTO, response);
        verify(reviewRepository, times(1)).findById(1L);
        verify(reviewMapper, times(1)).toResponseDTO(review);
    }

    @Test
    void getReviewById_ShouldThrowResourceNotFoundException_WhenReviewDoesNotExist() throws Exception {
        // Arrange
        when(reviewRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> reviewService.getReviewById(1L));
        verify(reviewRepository, times(1)).findById(1L);
        verify(reviewMapper, never()).toResponseDTO(any());
    }

    @Test
    void deleteReview_ShouldDeleteSuccessfully() {
        // Arrange
    	review.setId(1L);
        when(reviewRepository.findById(1L)).thenReturn(Optional.of(review));
        doNothing().when(reviewRepository).deleteById(1L);

        // Act
        reviewService.deleteReview(1L);

        // Assert
        verify(reviewRepository, times(1)).deleteById(1L);
    }

    @Test
    void deleteReview_ShouldThrowResourceNotFoundException_WhenReviewDoesNotExist() {
        // Arrange
        when(reviewRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> reviewService.deleteReview(1L));
        verify(reviewRepository, times(1)).findById(1L);
        verify(reviewRepository, never()).delete(any());
    }

    @Test
    void updateReview_ShouldReturnUpdatedReviewResponseDTO() {
        // Arrange
        Review updatedReview = Review.builder()
                .hotel(review.getHotel())
                .customer(review.getCustomer())
                .rating(4) // Updated rating
                .comment("Good service.") // Updated comment
                .build();

        ReviewResponseDTO updatedReviewResponseDTO = ReviewResponseDTO.builder()
                .id(1L)
                .hotelId(1L)
                .customerId(1L)
                .rating(4)
                .comment("Good service.")
                .build();

        when(reviewRepository.findById(1L)).thenReturn(Optional.of(review));
        when(reviewRepository.save(review)).thenReturn(updatedReview);
        when(reviewMapper.toResponseDTO(updatedReview)).thenReturn(updatedReviewResponseDTO);

        // Act
        ReviewResponseDTO response = reviewService.updateReview(1L, reviewPostDTO);

        // Assert
        assertNotNull(response);
        assertEquals(updatedReviewResponseDTO, response);
        verify(reviewRepository, times(1)).findById(1L);
        verify(reviewRepository, times(1)).save(review);
        verify(reviewMapper, times(1)).toResponseDTO(updatedReview);
    }

    @Test
    void updateReview_ShouldThrowResourceNotFoundException_WhenReviewDoesNotExist() {
        // Arrange
        when(reviewRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> reviewService.updateReview(1L, reviewPostDTO));
        verify(reviewRepository, times(1)).findById(1L);
        verify(reviewRepository, never()).save(any());
        verify(reviewMapper, never()).toResponseDTO(any());
    }
}
