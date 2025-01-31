package com.hotel.booking.system.api.security.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hotel.booking.system.api.dto.BookingResponseDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Administrator;
import com.hotel.booking.system.api.model.Booking;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.repository.AdministratorRepository;
import com.hotel.booking.system.api.repository.BookingRepository;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.repository.HotelOwnerRepository;
import com.hotel.booking.system.api.security.auth.AuthenticationResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ApplicationUserService implements IApplicationUserService {
    @Autowired
    private ApplicationUserRepository userRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private AdministratorRepository administratorRepository;
    @Autowired
    private HotelOwnerRepository hotelOwnerRepository;
    @Autowired
    private PasswordEncoder passwordEncoder; 

    @Override
    public AuthenticationResponse getAllUsers() {

    	AuthenticationResponse response = new AuthenticationResponse();
        try {
            List<ApplicationUser> userList = userRepository.findAll();
            List<ApplicationUserResponseDTO> userDTOList = mapUserListEntityToUserListDTO(userList);
            response.setStatusCode(200);
            response.setMessage("successful");
            response.setUserList(userDTOList);
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error getting all users " + e.getMessage());
        }
        return response;
    }

    @Override
    public AuthenticationResponse getUserBookingHistory(String email) {

    	AuthenticationResponse response = new AuthenticationResponse();


        try {
            ApplicationUser user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("ApplicationUser", "email", email));
            ApplicationUserResponseDTO userDTO = mapUserEntityToUserDTOPlusUserBookingsAndRoom(user);
            response.setStatusCode(200);
            response.setMessage("successful");
            response.setUser(userDTO);

        } catch (ResourceNotFoundException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());

        } catch (Exception e) {

            response.setStatusCode(500);
            response.setMessage("Error getting all users " + e.getMessage());
        }
        return response;
    }

    @Override
    public AuthenticationResponse deleteUser(String email) {

        AuthenticationResponse response = new AuthenticationResponse();

        try {
            ApplicationUser user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("ApplicationUser", "email", email));
            userRepository.deleteById(user.getId());
            response.setStatusCode(200);
            response.setMessage("successful");

        } catch (ResourceNotFoundException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());

        } catch (Exception e) {

            response.setStatusCode(500);
            response.setMessage("Error getting all users " + e.getMessage());
        }
        return response;
    }

    @Override
    public AuthenticationResponse getUserByEmail(String email) {

        AuthenticationResponse response = new AuthenticationResponse();

        try {
        	 ApplicationUser user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("ApplicationUser", "email", email));
            ApplicationUserResponseDTO userDTO = mapUserEntityToUserDTO(user);
            response.setStatusCode(200);
            response.setMessage("successful");
            response.setUser(userDTO);

        } catch (ResourceNotFoundException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());

        } catch (Exception e) {

            response.setStatusCode(500);
            response.setMessage("Error getting all users " + e.getMessage());
        }
        return response;
    }

    @Override
    public AuthenticationResponse getMyInfo(String email) {

        AuthenticationResponse response = new AuthenticationResponse();

        try {
            ApplicationUser user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("ApplicationUser", "email", email));
            ApplicationUserResponseDTO userDTO = mapUserEntityToUserDTO(user);
            response.setStatusCode(200);
            response.setMessage("successful");
            response.setUser(userDTO);

        } catch (ResourceNotFoundException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());

        } catch (Exception e) {

            response.setStatusCode(500);
            response.setMessage("Error getting all users " + e.getMessage());
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
	
	 public List<ApplicationUserResponseDTO> mapUserListEntityToUserListDTO(List<ApplicationUser> userList) {
		 List<ApplicationUserResponseDTO> applicationUserResponseDTOs = new ArrayList<ApplicationUserResponseDTO>();
	     for(ApplicationUser user : userList) {
	    	 applicationUserResponseDTOs.add(mapUserEntityToUserDTO(user));
	     }
		 return applicationUserResponseDTOs;
	 }
	 
	 public ApplicationUserResponseDTO mapUserEntityToUserDTOPlusUserBookingsAndRoom(ApplicationUser user) {
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
        Optional<Customer> customer = customerRepository.findByEmail(user.getEmail());
        if(customer.isPresent()) {
        List<Booking> bookings = bookingRepository.findAll().stream().filter(booking -> booking.getCustomer().getId() == customer.get().getId()).collect(Collectors.toList());
        if (bookings.size() > 0) {
        	List<BookingResponseDTO> bookingResponseDTOs = new ArrayList<BookingResponseDTO>();
        	for(Booking booking : bookings) {
        		BookingResponseDTO bookingResponseDTO = new BookingResponseDTO();
        		bookingResponseDTO.setId(booking.getId());
        		bookingResponseDTO.setCheckInDate(booking.getCheckInDate());
        		bookingResponseDTO.setCheckOutDate(booking.getCheckOutDate());
        		bookingResponseDTO.setTotalPrice(booking.getTotalPrice());
        		bookingResponseDTO.setStatus(booking.getStatus());
        		bookingResponseDTOs.add(bookingResponseDTO);
        	}
            userDTO.setBookings(bookingResponseDTOs);
        }
        }
        return userDTO;
    }
	 
	 @Override
	    public AuthenticationResponse updateUserPassword(String email, ApplicationUserCredentialsDTO applicationUserCredentialsDTO) {

	        AuthenticationResponse response = new AuthenticationResponse();

	        try {
	        	 ApplicationUser user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("ApplicationUser", "email", email));
	        	 if(passwordEncoder.matches(applicationUserCredentialsDTO.getOldPassword(), user.getPassword())) {
	        		user.setPassword(passwordEncoder.encode(applicationUserCredentialsDTO.getNewPassword()));
	        		userRepository.save(user);
	        		ApplicationUserResponseDTO userDTO = mapUserEntityToUserDTO(user);
	 	            response.setStatusCode(200);
	 	            response.setMessage("successful");
	 	            response.setUser(userDTO);
	        	 }
	        	 else {
	        		response.setStatusCode(400);
	 	            response.setMessage("Error setting user password, please make sure old password is correct");
	        	 }
	            

	        } catch (ResourceNotFoundException e) {
	            response.setStatusCode(404);
	            response.setMessage(e.getMessage());

	        } catch (Exception e) {

	            response.setStatusCode(500);
	            response.setMessage("Error setting user password " + e.getMessage());
	        }
	        return response;
	    }
	 
	 @Override
	    public AuthenticationResponse updateUser(String email, ApplicationUserPostDTO userData) {

	        AuthenticationResponse response = new AuthenticationResponse();

	        try {
	        	
	        	 ApplicationUser user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("ApplicationUser", "email", email));
	        	 if(userData.getFirstName() != null || userData.getFirstName() != "") {
	        		 user.setFirstName(userData.getFirstName());
	        	 }
	        	 if(userData.getLastName() !=null || userData.getLastName() != "") {
	        		 user.setLastName(userData.getLastName());
	        	 }
	        	 if(userData.getPhoneNumber() !=null || userData.getPhoneNumber() != "") {
	        		 user.setPhoneNumber(userData.getPhoneNumber());
	        	 }
	        	 if(userData.getAddress() !=null || userData.getAddress() != "") {
	        		 user.setAddress(userData.getAddress());
	        	 }
	        	 if(userData.getCity() !=null || userData.getCity() != "") {
	        		 user.setCity(userData.getCity());
	        	 }
	        	 if(userData.getCountry() !=null || userData.getCountry() != "") {
	        		 user.setCountry(userData.getCountry());
	        	 }
	        	 if(userData.getPostalCode() !=null || userData.getPostalCode() != "") {
	        		 user.setPostalCode(userData.getPostalCode());
	        	 }
	        	 userRepository.save(user);
	        	 if(user.getRole() == ApplicationUserRole.ADMIN) {
	        		 Administrator administrator = administratorRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("ApplicationUser", "email", email));
	        		 administrator.setFirstName(userData.getFirstName());
	        		 administrator.setLastName(userData.getLastName());
//	        		 administrator.setPhoneNumber(userData.getPhoneNumber());
//	        		 administrator.setAddress(userData.getAddress());
//	        		 administrator.setCity(userData.getCity());
//	        		 administrator.setCountry(userData.getCountry());
//	        		 administrator.setPostalCode(userData.getPostalCode());
	        		 administratorRepository.save(administrator);
	        	 }
	        	 else if(user.getRole() == ApplicationUserRole.OWNER) {
	        		 HotelOwner hotelOwner = hotelOwnerRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("ApplicationUser", "email", email));
	        		 hotelOwner.setFirstName(userData.getFirstName());
	        		 hotelOwner.setLastName(userData.getLastName());
//		        	 hotelOwner.setPhoneNumber(userData.getPhoneNumber());
//		        	 hotelOwner.setAddress(userData.getAddress());
//		        	 hotelOwner.setCity(userData.getCity());
//		        	 hotelOwner.setCountry(userData.getCountry());
//		        	 hotelOwner.setPostalCode(userData.getPostalCode());
	        		 hotelOwnerRepository.save(hotelOwner);
	        	 }
	        	 else {
	        		 Customer customer = customerRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("ApplicationUser", "email", email));
	        		 customer.setFirstName(userData.getFirstName());
	        		 customer.setLastName(userData.getLastName());
	        		 customer.setPhoneNumber(userData.getPhoneNumber());
	        		 customer.setAddress(userData.getAddress());
	        		 customer.setCity(userData.getCity());
	        		 customer.setCountry(userData.getCountry());
	        		 customer.setPostalCode(userData.getPostalCode());
	        		 customerRepository.save(customer);
	        	 }
        		ApplicationUserResponseDTO userDTO = mapUserEntityToUserDTO(user);
 	            response.setStatusCode(200);
 	            response.setMessage("successful");
 	            response.setUser(userDTO);
	        	 
	        	 

	        } catch (ResourceNotFoundException e) {
	            response.setStatusCode(404);
	            response.setMessage(e.getMessage());

	        } catch (Exception e) {

	            response.setStatusCode(500);
	            response.setMessage("Error setting user password " + e.getMessage());
	        }
	        return response;
	    }
}

