package com.hotel.booking.system.api.security.auth;

import java.util.List;

import com.hotel.booking.system.api.dto.BookingResponseDTO;
import com.hotel.booking.system.api.dto.RoomResponseDTO;
import com.hotel.booking.system.api.security.user.ApplicationUserResponseDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
	private int statusCode;
    private String message;

    private String token;
    private String role;
    private String expirationTime;

    private ApplicationUserResponseDTO user;
    private RoomResponseDTO room;
    private BookingResponseDTO booking;
    private List<ApplicationUserResponseDTO> userList;
    private List<RoomResponseDTO> roomList;
    private List<BookingResponseDTO> bookingList;

}
