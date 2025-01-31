package com.hotel.booking.system.api.security.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationUserPostDTO {
	private String firstName;
    private String lastName;
    private String phoneNumber;
    private String city;
	private String country;
	private String postalCode;
	private String address;
}
