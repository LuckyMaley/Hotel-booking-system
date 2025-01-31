package com.hotel.booking.system.api.dto;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReviewResponseDTO {
	private Long id;
    private String comment;
    private Integer rating;
    private Long customerId;
    private Long hotelId;
    private String title;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
