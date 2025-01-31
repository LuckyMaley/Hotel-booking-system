package com.hotel.booking.system.api.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotel.booking.system.api.dto.CustomerResponseDTO;
import com.hotel.booking.system.api.dto.mapper.CustomerMapper;
import com.hotel.booking.system.api.dto.post.CustomerPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.service.GenericService;

@Service
public class CustomerServiceImpl implements GenericService<Customer> {
	@Autowired
	private CustomerRepository customerRepository;

	// Removed Autowired , was causing bean type issues
	@Autowired
	private CustomerMapper customerMapper;

	@Override
	public Customer saveEntity(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public List<Customer> getAllEntities() {
		return customerRepository.findAll();
	}

	@Override
	public Customer getEntityById(long id) {
		/*
		 * Optional<Customer> customer = customerRepository.findById(id);
		 * if(customer.isPresent()) { return customer.get(); } else { throw new
		 * ResourceNotFoundException("Customer", "Id", Customer); }
		 */

		return customerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer", "Id", id));
	}

	@Override
	public Customer updateEntity(Customer customer, long id) {
		Customer existingCustomer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "Id", id));
		existingCustomer.setFirstName(customer.getFirstName());
		existingCustomer.setLastName(customer.getLastName());
		existingCustomer.setEmail(customer.getEmail());
		existingCustomer.setAddress(customer.getAddress());
		existingCustomer.setCity(customer.getCity());
		existingCustomer.setCountry(customer.getCountry());
		existingCustomer.setPostalCode(customer.getPostalCode());
		customerRepository.save(existingCustomer);

		return existingCustomer;
	}

	@Override
	public void deleteEntity(long id) {
		customerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer", "Id", id));
		customerRepository.deleteById(id);
	}

	@Transactional
	public CustomerResponseDTO createCustomer(CustomerPostDTO customerPostDTO) {
		Customer customer = customerMapper.toEntity(customerPostDTO);
		Customer savedCustomer = saveEntity(customer);
		return customerMapper.toResponseDTO(savedCustomer);
	}

	public List<CustomerResponseDTO> getAllCustomers() {
		return getAllEntities().stream().map(customerMapper::toResponseDTO).collect(Collectors.toList());
	}

	public CustomerResponseDTO getCustomerById(Long id) {
		Customer customer = getEntityById(id);
		return customerMapper.toResponseDTO(customer);
	}

	public CustomerResponseDTO getCustomerByEmail(String email) {
		Customer customer = customerRepository.findByEmail(email)
				.orElseThrow(() -> new ResourceNotFoundException("Customer", "Email", email));
		return customerMapper.toResponseDTO(customer);
	}

	@Transactional
	public void deleteCustomer(Long id) {
		Customer customer = getEntityById(id);
		deleteEntity(customer.getId());
	}

	@Transactional
	public CustomerResponseDTO updateCustomer(Long id, CustomerPostDTO customerPostDTO) {
		Customer existingCustomer = getEntityById(id);

		existingCustomer.setFirstName(customerPostDTO.getFirstName());
		existingCustomer.setLastName(customerPostDTO.getLastName());
		existingCustomer.setEmail(customerPostDTO.getEmail());
		existingCustomer.setAddress(customerPostDTO.getAddress());
		existingCustomer.setCity(customerPostDTO.getCity());
		existingCustomer.setCountry(customerPostDTO.getCountry());
		existingCustomer.setPostalCode(customerPostDTO.getPostalCode());
		existingCustomer.setPhoneNumber(customerPostDTO.getPhoneNumber());
		Customer updatedCustomer = saveEntity(existingCustomer);
		return customerMapper.toResponseDTO(updatedCustomer);
	}

}
