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
public class SpecialOfferPostDTO {
    @NotNull(message = "Discount percentage cannot be null")
    @DecimalMin(value = "0.0", inclusive = false, message = "Discount percentage must be greater than 0")
    private BigDecimal discountPercentage;

    @NotNull(message = "Hotel ID cannot be null")
    private Long hotelId;

    @NotNull(message = "Creation date cannot be null")
    private LocalDateTime createdAt;

    @NotNull(message = "Update date cannot be null")
    private LocalDateTime updatedAt;
}
