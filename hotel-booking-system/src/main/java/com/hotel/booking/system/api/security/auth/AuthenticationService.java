package com.hotel.booking.system.api.security.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Administrator;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.repository.AdministratorRepository;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.repository.HotelOwnerRepository;
import com.hotel.booking.system.api.security.config.JwtService;
import com.hotel.booking.system.api.security.user.ApplicationUser;
import com.hotel.booking.system.api.security.user.ApplicationUserRepository;
import com.hotel.booking.system.api.security.user.ApplicationUserResponseDTO;
import com.hotel.booking.system.api.security.user.ApplicationUserRole;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

	private final ApplicationUserRepository repository;
	private final HotelOwnerRepository hotelOwnerRepository;
	private final AdministratorRepository administratorRepository;
	private final CustomerRepository customerRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;

	public AuthenticationResponse register(RegisterRequest request) {
		AuthenticationResponse response = new AuthenticationResponse();

		try {
			ApplicationUserRole userRole = ApplicationUserRole.CUSTOMER;
			if (request.getRole() != "" && request.getRole() != null) {
				String roleString = request.getRole().toUpperCase();
				if (roleString.equals("ADMIN")) {
					userRole = ApplicationUserRole.ADMIN;
				}
				else if(roleString.equals("CUSTOMER")) {
					userRole = ApplicationUserRole.CUSTOMER;
				} else {
					userRole = ApplicationUserRole.OWNER;
				}
			}
			var user = ApplicationUser.builder().firstName(request.getFirstName()).lastName(request.getLastName())
					.email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
					.address(request.getAddress()).city(request.getCity()).country(request.getCountry())
					.postalCode(request.getPostalCode()).role(userRole).build();
			repository.save(user);
			if (userRole == ApplicationUserRole.ADMIN) {
				administratorRepository.save(new Administrator(request.getFirstName(), request.getLastName(),
						request.getEmail(), request.getPassword()));
			} else if (userRole == ApplicationUserRole.OWNER) {
				hotelOwnerRepository.save(new HotelOwner(request.getFirstName(), request.getLastName(),
						request.getEmail(), request.getPassword(), null, null));
			} else {
				customerRepository.save(new Customer(request.getFirstName(), request.getLastName(), request.getEmail(),
						request.getEmail(), request.getPhoneNumber(), request.getCity(), request.getCountry(),
						request.getPostalCode(), request.getAddress()));
			}
			var jwtToken = jwtService.generateToken(user);
			response = AuthenticationResponse.builder().token(jwtToken).role(userRole.toString())
					.expirationTime("7 days").message("Successfully Registered User: " + user.getEmail())
					.user(mapUserEntityToUserDTO(user)).statusCode(200).build();
		} catch (ResourceNotFoundException e) {
			response.setStatusCode(400);
			response.setMessage(e.getMessage());

		} catch (Exception e) {
			response.setStatusCode(500);
			response.setMessage("Error Occurred During User Registration: " + e.getMessage());

		}

		return response;
	}

	public ApplicationUserResponseDTO mapUserEntityToUserDTO(ApplicationUser user) {

		ApplicationUserResponseDTO userDTO = new ApplicationUserResponseDTO();

		userDTO.setId(user.getId());
		userDTO.setFirstName(user.getFirstName());
		userDTO.setLastName(user.getLastName());
		userDTO.setEmail(user.getEmail());
		userDTO.setUserName(user.getUsername());
		userDTO.setPhoneNumber(user.getPhoneNumber());
		userDTO.setAddress(user.getAddress());
		userDTO.setCity(user.getCity());
		userDTO.setCountry(user.getCountry());
		userDTO.setPostalCode(user.getPostalCode());
		userDTO.setRole(user.getRole().toString());
		return userDTO;
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {

		AuthenticationResponse response = new AuthenticationResponse();
		try {
			authenticationManager.authenticate(

					new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
			var user = repository.findByEmail(request.getEmail())
					.orElseThrow(() -> new ResourceNotFoundException("Login", "User", request.getEmail()));
			var jwtToken = jwtService.generateToken(user);
			response = AuthenticationResponse.builder().token(jwtToken).statusCode(200).role(user.getRole().toString())
					.user(mapUserEntityToUserDTO(user)).expirationTime("7 Days").message("Successfully Logged In").build();
		} catch (ResourceNotFoundException e) {
			response.setStatusCode(400);
			response.setMessage(e.getMessage());

		} catch (Exception e) {
			response.setStatusCode(500);
			response.setMessage("Error Occurred During User Login: " + e.getMessage());

		}
		return response;

	}

}
