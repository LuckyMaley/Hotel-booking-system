package com.hotel.booking.system.api.model;

import com.hotel.booking.system.api.model.generic.BaseModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hotels")
@EqualsAndHashCode(callSuper = true)
public class Hotel extends BaseModel {

	private String name;

	@Column(columnDefinition = "TEXT")
	private String address;
	
	@Column(columnDefinition = "TEXT")
	private String city;

	@Column(columnDefinition = "TEXT")
	private String description;

	private int starRating;

	@Column(columnDefinition = "TEXT")
	private String facilities;

	@Column(columnDefinition = "TEXT")
	private String amenities;

	@Column(columnDefinition = "LONGTEXT")
	private String pictureURL;

	@ManyToOne
	@JoinColumn(name = "owner_id", referencedColumnName = "id", nullable = false)
	private HotelOwner hotelOwner;

}
