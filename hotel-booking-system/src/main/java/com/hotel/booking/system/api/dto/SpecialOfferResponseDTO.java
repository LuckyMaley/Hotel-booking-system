package com.hotel.booking.system.api.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SpecialOfferResponseDTO {
	private Long id;
	private BigDecimal discountPercentage;
	private Long hotelId;
	private String hotelName; // Instead of the whole Hotel object i've included hotelName for better readability
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
}
