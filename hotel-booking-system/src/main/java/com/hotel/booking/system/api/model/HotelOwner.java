package com.hotel.booking.system.api.model;

import java.math.BigDecimal;

import com.hotel.booking.system.api.model.generic.BaseModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "owners")
@EqualsAndHashCode(callSuper = true)
public class HotelOwner extends BaseModel {

	private String firstName;

	private String lastName;

	@Column(unique = true)
	private String email;

	private String password;

	@Column(precision = 10, scale = 2)
	private BigDecimal openingBalance;

	@Column(precision = 10, scale = 2)
	private BigDecimal currentBalance;

}
