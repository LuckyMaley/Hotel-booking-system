package com.hotel.booking.system.api.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.reset;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.time.LocalDateTime;
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

import com.hotel.booking.system.api.dto.BookingResponseDTO;
import com.hotel.booking.system.api.dto.CustomerResponseDTO;
import com.hotel.booking.system.api.dto.mapper.BookingMapper;
import com.hotel.booking.system.api.dto.mapper.CustomerMapper;
import com.hotel.booking.system.api.dto.post.BookingPostDTO;
import com.hotel.booking.system.api.dto.post.CustomerPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Booking;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.Room;
import com.hotel.booking.system.api.repository.BookingRepository;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.repository.RoomRepository;
import com.hotel.booking.system.api.service.impl.BookingServiceImpl;

@ExtendWith(MockitoExtension.class)
class BookingServiceTest {

    @Mock
    private BookingRepository bookingRepository;
    
    @Mock
    private CustomerRepository customerRepository;
    
    @Mock
    private RoomRepository roomRepository;
    
    //@Mock
    //private RoomMapper roomMapper;
    
    @Mock
    private CustomerMapper customerMapper;

    @Mock
    private BookingMapper bookingMapper;

    @InjectMocks
    private BookingServiceImpl bookingService;

    private Booking booking;
    private BookingPostDTO bookingPostDTO;
    private BookingResponseDTO bookingResponseDTO;
    
    private Customer customer;
    private CustomerResponseDTO customerResponseDTO;

    @BeforeEach
    void setUp() {
        // Initialize test data
        bookingPostDTO = BookingPostDTO.builder()
                .customerId(1L)
                .roomId(1L)
                .checkInDate(LocalDateTime.now().plusDays(1))
                .checkOutDate(LocalDateTime.now().plusDays(5))
                .totalPrice(new BigDecimal("500.00"))
                .status("CONFIRMED")
                .build();

        booking = Booking.builder()
                .customer(null) // Will be set in mapper
                .room(null)     // Will be set in mapper
                .checkInDate(bookingPostDTO.getCheckInDate())
                .checkOutDate(bookingPostDTO.getCheckOutDate())
                .totalPrice(bookingPostDTO.getTotalPrice())
                .status(bookingPostDTO.getStatus())
                .build();

        bookingResponseDTO = BookingResponseDTO.builder()
                .id(1L)
                .customerId(1L)
                .roomId(1L)
                .checkInDate(booking.getCheckInDate())
                .checkOutDate(booking.getCheckOutDate())
                .totalPrice(booking.getTotalPrice())
                .status(booking.getStatus())
                .build();
        
        customer = Customer.builder()
        		.firstName("john")
                .lastName("doe")
                .userName("johndoe")
                .email("johndoe@example.com")
                .address("123 Main St")
                .build();

        customerResponseDTO = CustomerResponseDTO.builder()
        		.id(1L)
                .firstName("john")
                .lastName("Doe")
                .userName("johndoe")
                .email("johndoe@example.com")
                .address("123 Main St")
                .build();
    }

    @AfterEach
    void tearDown() {
        // Reset mocks after each test
        reset(bookingRepository, bookingMapper, customerRepository, customerMapper);
    }

    @Test
    void createBooking_ShouldReturnBookingResponseDTO() {
        // Arrange
        when(bookingMapper.toEntity(any(BookingPostDTO.class))).thenReturn(booking);
        when(bookingRepository.save(any(Booking.class))).thenReturn(booking);
        when(bookingMapper.toResponseDTO(any(Booking.class))).thenReturn(bookingResponseDTO);
     
        when(customerMapper.toEntity(any(CustomerPostDTO.class))).thenReturn(customer);
        when(customerRepository.save(any(Customer.class))).thenReturn(customer);
        when(customerMapper.toResponseDTO(any(Customer.class))).thenReturn(customerResponseDTO);
        when(customerRepository.findById(1L)).thenReturn(Optional.of(customer));
        when(roomRepository.findById(1L)).thenReturn(Optional.of(new Room(null, "Single", new BigDecimal("3400"), "Available")));
        // Act
        BookingResponseDTO response = bookingService.createBooking(bookingPostDTO);

        // Assert
        assertNotNull(response);
        assertEquals(bookingResponseDTO.getId(), response.getId());
        verify(bookingMapper, times(1)).toEntity(bookingPostDTO);
        verify(bookingRepository, times(1)).save(booking);
        verify(bookingMapper, times(1)).toResponseDTO(booking);
    }

    @Test
    void getAllBookings_ShouldReturnListOfBookingResponseDTO() {
        // Arrange
        List<Booking> bookings = Arrays.asList(booking);
        List<BookingResponseDTO> bookingResponses = Arrays.asList(bookingResponseDTO);

        when(bookingRepository.findAll()).thenReturn(bookings);
        when(bookingMapper.toResponseDTO(any(Booking.class))).thenReturn(bookingResponseDTO);

        // Act
        List<BookingResponseDTO> response = bookingService.getAllBookings();

        // Assert
        assertNotNull(response);
        assertEquals(bookingResponses.size(), response.size());
        assertEquals(bookingResponseDTO, response.get(0));
        verify(bookingRepository, times(1)).findAll();
        verify(bookingMapper, times(1)).toResponseDTO(booking);
    }

    @Test
    void getBookingById_ShouldReturnBookingResponseDTO() {
        // Arrange
        when(bookingRepository.findById(1L)).thenReturn(Optional.of(booking));
        when(bookingMapper.toResponseDTO(booking)).thenReturn(bookingResponseDTO);

        // Act
        BookingResponseDTO response = bookingService.getBookingById(1L);

        // Assert
        assertNotNull(response);
        assertEquals(bookingResponseDTO, response);
        verify(bookingRepository, times(1)).findById(1L);
        verify(bookingMapper, times(1)).toResponseDTO(booking);
    }

    @Test
    void getBookingById_ShouldThrowResourceNotFoundException_WhenBookingDoesNotExist() {
        // Arrange
        when(bookingRepository.findById(10L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> bookingService.getBookingById(10L));
        verify(bookingRepository, times(1)).findById(10L);
        verify(bookingMapper, never()).toResponseDTO(any());
    }

    @Test
    void deleteBooking_ShouldDeleteSuccessfully() {
        // Arrange
        booking.setId(1L);
    	when(bookingRepository.findById(1L)).thenReturn(Optional.of(booking));


        // Act
        bookingService.deleteBooking(1L);

        // Assert
        verify(bookingRepository, times(1)).deleteById(1L);
    }

    @Test
    void deleteBooking_ShouldThrowResourceNotFoundException_WhenBookingDoesNotExist() {
        // Arrange
        when(bookingRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> bookingService.deleteBooking(1L));
        verify(bookingRepository, times(1)).findById(1L);
        verify(bookingRepository, never()).delete(any());
    }

    @Test
    void updateBooking_ShouldReturnUpdatedBookingResponseDTO() {
        // Arrange
        when(bookingRepository.findById(1L)).thenReturn(Optional.of(booking));
        when(bookingRepository.save(booking)).thenReturn(booking);
        when(bookingMapper.toResponseDTO(booking)).thenReturn(bookingResponseDTO);

        // Act
        BookingResponseDTO response = bookingService.updateBooking(1L, bookingPostDTO);

        // Assert
        assertNotNull(response);
        assertEquals(bookingResponseDTO, response);
        verify(bookingRepository, times(1)).findById(1L);
        verify(bookingRepository, times(1)).save(booking);
        verify(bookingMapper, times(1)).toResponseDTO(booking);
    }

    @Test
    void updateBooking_ShouldThrowResourceNotFoundException_WhenBookingDoesNotExist() {
        // Arrange
        when(bookingRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> bookingService.updateBooking(1L, bookingPostDTO));
        verify(bookingRepository, times(1)).findById(1L);
        verify(bookingRepository, never()).save(any());
        verify(bookingMapper, never()).toResponseDTO(any());
    }
}
