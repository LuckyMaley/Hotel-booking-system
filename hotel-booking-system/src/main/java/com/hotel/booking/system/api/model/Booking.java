package com.hotel.booking.system.api.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.hotel.booking.system.api.model.generic.BaseModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "bookings")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class Booking extends BaseModel {
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "customer_id", referencedColumnName = "id", nullable = false)
    private Customer customer;
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "room_id", referencedColumnName = "id", nullable = false)
	private Room room;
	private LocalDateTime checkInDate;
	private LocalDateTime checkOutDate;
	@Column(precision = 10, scale = 2)
	private BigDecimal totalPrice;
	private String status;

	private String billingCity;
	private String billingCountry;
	private String billingPostalCode;
	private String billingAddress;
}
