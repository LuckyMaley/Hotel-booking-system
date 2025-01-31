package com.hotel.booking.system.api.dto.post;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.hotel.booking.system.api.model.HotelOwner;

import jakarta.persistence.Column;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PaymentPostDTO {

    // Booking ID is required
    @NotNull(message = "Booking ID cannot be null")
    private Long bookingId;
    
    @NotNull(message = "Card ID cannot be null")
    private Long cardId;

    // Transaction fee must be a positive value (or greater than zero)
    @NotNull(message = "Transaction fee cannot be null")
    @DecimalMin(value = "0.0", inclusive = false, message = "Transaction fee must be greater than 0")
    private BigDecimal transactionFee;

    // Payment date cannot be in the past
    @NotNull(message = "Payment date cannot be null")
    @FutureOrPresent(message = "Payment date must be in the present or future")
    private LocalDateTime paymentDate;
    
    private BigDecimal amount;
	
	private String paymentMethod;
	
	private String status;

	
}
