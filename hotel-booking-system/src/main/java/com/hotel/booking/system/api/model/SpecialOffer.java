package com.hotel.booking.system.api.model;

import java.math.BigDecimal;

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
@Table(name="special_offers")
public class SpecialOffer extends BaseModel{
	@Column(name="discount_percentage")
	private BigDecimal discountPercentage;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="hotel_id", referencedColumnName = "id", nullable=false)
	private Hotel hotel;
}
