package com.hotel.booking.system.api.model;

import com.hotel.booking.system.api.model.generic.BaseModel;

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
@Table(name = "reviews")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
public class Review extends BaseModel {
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name="hotel_id", referencedColumnName = "id", nullable = false)
	private Hotel hotel;
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "customer_id", referencedColumnName = "id", nullable = false)
    private Customer customer;
	private double rating;
	private String title;
	private String comment;
}
