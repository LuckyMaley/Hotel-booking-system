package com.hotel.booking.system.api.model;

import java.math.BigDecimal;

import com.hotel.booking.system.api.model.generic.BaseModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "rooms")
@EqualsAndHashCode(callSuper = true)
public class Room extends BaseModel {
	@ManyToOne
	@JoinColumn(name = "hotel_id", referencedColumnName = "id", nullable = false)
	private Hotel hotel;

	private String roomType;

	@Column(precision = 10, scale = 2)
	private BigDecimal price;

	private String occupancy;

}
