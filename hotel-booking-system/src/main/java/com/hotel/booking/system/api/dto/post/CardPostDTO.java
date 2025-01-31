package com.hotel.booking.system.api.dto.post;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CardPostDTO {
	private String cardType;
	private String cardNumber;
	private String cardHolderName;
	private String expiryMonth;
	private String expiryYear;
	private String securityCode;
	@NotNull(message = "Customer ID is required")
	private Long customerId;
}
