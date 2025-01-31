package com.hotel.booking.system.api.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.hotel.booking.system.api.model.generic.BaseModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name="global_charges")
public class GlobalCharges extends BaseModel{
	@Column(name="base_hotel_charge")
	private BigDecimal baseHotelCharge;

	@Column(name="room_charge_per_month")
	private BigDecimal roomChargePerMonth;

	@Column(name="transaction_fee_percentage")
	private BigDecimal transactionFeePercentage;
	@Column(name="last_updated")
	private LocalDateTime lastUpdated;
}

