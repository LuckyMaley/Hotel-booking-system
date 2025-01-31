package com.hotel.booking.system.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomerResponseDTO {
	private Long id;
	private String firstName;
	private String lastName;
    private String userName;
    private String email;
    private String phoneNumber;

	private String city;
	private String country;
	private String postalCode;
	private String address;
}
