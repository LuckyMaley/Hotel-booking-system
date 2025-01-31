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
public class GlobalChargesResponseDTO {
	private long Id;
	private BigDecimal baseHotelCharge;
	private BigDecimal roomChargePerMonth;
	private BigDecimal transactionFeePercentage;
	private LocalDateTime lastUpdated;
}
