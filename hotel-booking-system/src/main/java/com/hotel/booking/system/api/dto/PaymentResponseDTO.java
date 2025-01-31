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
public class PaymentResponseDTO {
    private Long id;
    private Long bookingId;
    private Long cardId;
    private BigDecimal transactionFee;
    private LocalDateTime paymentDate;
    private BigDecimal amount;
	private String paymentMethod;
	private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
