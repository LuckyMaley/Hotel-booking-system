package com.hotel.booking.system.api.security.user;

import java.util.ArrayList;
import java.util.List;

import com.hotel.booking.system.api.dto.BookingResponseDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Builder.Default;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationUserResponseDTO {
	private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private String userName;
    private String phoneNumber;
    private String city;
	private String country;
	private String postalCode;
	private String address;
    private String role;
    @Default
    private List<BookingResponseDTO> bookings = new ArrayList<>();
}
