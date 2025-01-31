package com.hotel.booking.system.api.dto.post;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookingPostDTO {

    @NotNull(message = "Customer ID is required")
    private Long customerId;

    @NotNull(message = "Room ID is required")
    private Long roomId;

    @NotNull(message = "Check-in date is required")
    @FutureOrPresent(message = "Check-in date must be today or in the future")
    private LocalDateTime checkInDate;

    @NotNull(message = "Check-out date is required")
    @Future(message = "Check-out date must be in the future")
    private LocalDateTime checkOutDate;

    @NotNull(message = "Total price is required")
    @DecimalMin(value = "0.00", inclusive = false, message = "Total price must be greater than zero")
    @Digits(integer = 8, fraction = 2, message = "Total price must be a valid monetary amount")
    private BigDecimal totalPrice;

    @NotBlank(message = "Status is required")
    @Pattern(regexp = "CONFIRMED|PENDING|CANCELLED", message = "Status must be CONFIRMED, PENDING, or CANCELLED")
    private String status;
    private String billingCity;
	private String billingCountry;
	private String billingPostalCode;
	private String billingAddress;

}
