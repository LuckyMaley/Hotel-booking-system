package com.hotel.booking.system.api.dto.post;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GlobalChargesPostDTO {
	@NotNull(message = "Base hotel charge cannot be null")
    @DecimalMin(value = "0.0", inclusive = false, message = "Base hotel charge must be greater than 0")
    private BigDecimal baseHotelCharge;

    @NotNull(message = "Room charge per month cannot be null")
    @DecimalMin(value = "0.0", inclusive = false, message = "Room charge per month must be greater than 0")
    private BigDecimal roomChargePerMonth;

    @NotNull(message = "Transaction fee percentage cannot be null")
    @DecimalMin(value = "0.0", inclusive = false, message = "Transaction fee percentage must be greater than 0")
    private BigDecimal transactionFeePercentage;
    
    private LocalDateTime lastUpdated;
}
