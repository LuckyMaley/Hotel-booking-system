package com.hotel.booking.system.api.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String phoneNumber;
	private String city;
	private String country;
	private String postalCode;
	private String address;	
	private String role;
}
