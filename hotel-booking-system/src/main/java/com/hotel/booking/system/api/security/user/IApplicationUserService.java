package com.hotel.booking.system.api.security.user;

import com.hotel.booking.system.api.security.auth.AuthenticationResponse;

public interface IApplicationUserService {
	 	AuthenticationResponse getAllUsers();

	 	AuthenticationResponse getUserBookingHistory(String email);

	 	AuthenticationResponse deleteUser(String email);

	 	AuthenticationResponse getUserByEmail(String email);

	 	AuthenticationResponse getMyInfo(String email);
	 	
	 	AuthenticationResponse updateUserPassword(String email, ApplicationUserCredentialsDTO applicationUserCredentialsDTO); 
	 	
	 	AuthenticationResponse updateUser(String email, ApplicationUserPostDTO user);
}
