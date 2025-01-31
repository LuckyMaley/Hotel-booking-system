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

import com.hotel.booking.system.api.dto.CustomerResponseDTO;
import com.hotel.booking.system.api.dto.mapper.CustomerMapper;
import com.hotel.booking.system.api.dto.post.CustomerPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.service.impl.CustomerServiceImpl;


@ExtendWith(MockitoExtension.class)
class CustomerServiceTest {

    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private CustomerMapper customerMapper;

    @InjectMocks
    private CustomerServiceImpl customerService;

    private Customer customer;
    private CustomerPostDTO customerPostDTO;
    private CustomerResponseDTO customerResponseDTO;

    @BeforeEach
    void setUp() {
        // Initialize test data
        customerPostDTO = CustomerPostDTO.builder()
                .firstName("john")
                .lastName("doe")
                .email("johndoe@example.com")
                .userName("johndoe")
                .address("123 Main St")
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
        reset(customerRepository, customerMapper);
    }

    @Test
    void createCustomer_ShouldReturnCustomerResponseDTO() {
        // Arrange
        when(customerMapper.toEntity(any(CustomerPostDTO.class))).thenReturn(customer);
        when(customerRepository.save(any(Customer.class))).thenReturn(customer);
        when(customerMapper.toResponseDTO(any(Customer.class))).thenReturn(customerResponseDTO);

        // Act
        CustomerResponseDTO response = customerService.createCustomer(customerPostDTO);

        // Assert
        assertNotNull(response);
        assertEquals(customerResponseDTO.getUserName(), response.getUserName());
        verify(customerMapper, times(1)).toEntity(customerPostDTO);
        verify(customerRepository, times(1)).save(customer);
        verify(customerMapper, times(1)).toResponseDTO(customer);
    }

    @Test
    void getAllCustomers_ShouldReturnListOfCustomerResponseDTO() {
        // Arrange
        List<Customer> customers = Arrays.asList(customer);
        List<CustomerResponseDTO> customerResponses = Arrays.asList(customerResponseDTO);

        when(customerRepository.findAll()).thenReturn(customers);
        when(customerMapper.toResponseDTO(any(Customer.class))).thenReturn(customerResponseDTO);

        // Act
        List<CustomerResponseDTO> response = customerService.getAllCustomers();

        // Assert
        assertNotNull(response);
        assertEquals(customerResponses.size(), response.size());
        assertEquals(customerResponseDTO, response.get(0));
        verify(customerRepository, times(1)).findAll();
        verify(customerMapper, times(1)).toResponseDTO(customer);
    }

    @Test
    void getCustomerById_ShouldReturnCustomerResponseDTO() {
        // Arrange
        when(customerRepository.findById(1L)).thenReturn(Optional.of(customer));
        when(customerMapper.toResponseDTO(customer)).thenReturn(customerResponseDTO);

        // Act
        CustomerResponseDTO response = customerService.getCustomerById(1L);

        // Assert
        assertNotNull(response);
        assertEquals(customerResponseDTO, response);
        verify(customerRepository, times(1)).findById(1L);
        verify(customerMapper, times(1)).toResponseDTO(customer);
    }

    @Test
    void getCustomerById_ShouldThrowResourceNotFoundException_WhenCustomerDoesNotExist() {
        // Arrange
        when(customerRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> customerService.getCustomerById(1L));
        verify(customerRepository, times(1)).findById(1L);
        verify(customerMapper, never()).toResponseDTO(any());
    }

    @Test
    void deleteCustomer_ShouldDeleteSuccessfully() {
        // Arrange
    	customer.setId(1L);
        when(customerRepository.findById(1L)).thenReturn(Optional.of(customer));
        doNothing().when(customerRepository).deleteById(1L);

        // Act
        customerService.deleteCustomer(1L);

        // Assert
        verify(customerRepository, times(1)).deleteById(1L);
    }

    @Test
    void deleteCustomer_ShouldThrowResourceNotFoundException_WhenCustomerDoesNotExist() {
        // Arrange
        when(customerRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> customerService.deleteCustomer(1L));
        verify(customerRepository, times(1)).findById(1L);
        verify(customerRepository, never()).delete(any());
    }

    @Test
    void updateCustomer_ShouldReturnUpdatedCustomerResponseDTO() {
        // Arrange
        Customer updatedCustomer = Customer.builder()
                .userName("johndoe")
                .email("john.doe@example.com") // Updated email
                .address("456 Elm St") // Updated address
                .build();

        CustomerResponseDTO updatedCustomerResponseDTO = CustomerResponseDTO.builder()
                .id(1L)
                .userName("johndoe")
                .email("john.doe@example.com")
                .address("456 Elm St")
                .build();

        when(customerRepository.findById(1L)).thenReturn(Optional.of(customer));
        when(customerRepository.save(any(Customer.class))).thenReturn(updatedCustomer);
        when(customerMapper.toResponseDTO(updatedCustomer)).thenReturn(updatedCustomerResponseDTO);

        // Act
        CustomerResponseDTO response = customerService.updateCustomer(1L, customerPostDTO);

        // Assert
        assertNotNull(response);
        assertEquals("john.doe@example.com", response.getEmail());
        assertEquals("456 Elm St", response.getAddress());
        verify(customerRepository, times(1)).findById(1L);
        verify(customerRepository, times(1)).save(customer);
        verify(customerMapper, times(1)).toResponseDTO(updatedCustomer);
    }

    @Test
    void updateCustomer_ShouldThrowResourceNotFoundException_WhenCustomerDoesNotExist() {
        // Arrange
        when(customerRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> customerService.updateCustomer(1L, customerPostDTO));
        verify(customerRepository, times(1)).findById(1L);
        verify(customerRepository, never()).save(any());
        verify(customerMapper, never()).toResponseDTO(any());
    }
}
