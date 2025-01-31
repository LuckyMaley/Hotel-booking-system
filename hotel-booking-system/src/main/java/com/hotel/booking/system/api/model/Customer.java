package com.hotel.booking.system.api.model;

import com.hotel.booking.system.api.model.generic.BaseModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name ="customers")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class Customer extends BaseModel{
	private String firstName;
	private String lastName;
	@Column(unique=true)
	private String userName;
	@Column(unique=true)
	private String email;
	private String phoneNumber;
	private String city;
	private String country;
	private String postalCode;
	private String address;
}
