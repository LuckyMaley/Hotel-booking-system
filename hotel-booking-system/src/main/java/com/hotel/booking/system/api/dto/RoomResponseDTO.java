package com.hotel.booking.system.api.dto;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoomResponseDTO {

	private Long hotelId;
	private String roomType;
	private BigDecimal price;
	private String occupancy;

}
