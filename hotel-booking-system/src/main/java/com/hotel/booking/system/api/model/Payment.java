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
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name="payments")
public class Payment extends BaseModel{


	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="booking_id", referencedColumnName = "id", nullable=false)
	private Booking booking;

	private BigDecimal amount;
	
	@Column(name="payment_method")
	private String paymentMethod;
	
	private String status;

	@Column(name="payment_date")
	private LocalDateTime paymentDate;
	
	@Column(name="transaction_fee")
	private BigDecimal transactionFee;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="card_id", referencedColumnName = "id", nullable=false)
	private Card card;
}