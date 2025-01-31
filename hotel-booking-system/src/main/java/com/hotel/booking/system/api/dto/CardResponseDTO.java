package com.hotel.booking.system.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CardResponseDTO {
	private Long id;
	private String cardType;
	private String cardNumber;
	private String cardHolderName;
	private String expiryMonth;
	private String expiryYear;
	private String securityCode;
	private Long customerId;
}
