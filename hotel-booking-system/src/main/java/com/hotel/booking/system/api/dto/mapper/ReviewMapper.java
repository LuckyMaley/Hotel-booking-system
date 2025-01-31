package com.hotel.booking.system.api.dto.mapper;

import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import com.hotel.booking.system.api.dto.ReviewResponseDTO;
import com.hotel.booking.system.api.dto.post.ReviewPostDTO;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.Review;
import com.hotel.booking.system.api.service.impl.CustomerServiceImpl;
import com.hotel.booking.system.api.service.impl.HotelServiceImpl;

@Mapper(componentModel = "spring")
public abstract class ReviewMapper {

	@Autowired
	private CustomerServiceImpl customerService;

	@Autowired
	private HotelServiceImpl hotelService;

	// Mapping Review entity to ReviewResponseDTO
	@Mapping(source = "customer.id", target = "customerId")
	@Mapping(source = "hotel.id", target = "hotelId")
	public abstract ReviewResponseDTO toResponseDTO(Review review);

	// Mapping ReviewPostDTO to Review entity
	@Mapping(target = "customer", ignore = true) // Ignore direct mapping of customer
	@Mapping(target = "hotel", ignore = true) // Ignore direct mapping of hotel
	public abstract Review toEntity(ReviewPostDTO reviewPostDTO);

	// After mapping to set the correct Customer and Hotel entities
	@AfterMapping
	protected void afterToEntity(ReviewPostDTO dto, @MappingTarget Review review) {
		if (dto.getCustomerId() != null) {
			// Fetch and set Customer entity
			Customer customer = customerService.getEntityById(dto.getCustomerId());
			review.setCustomer(customer);
		}

		if (dto.getHotelId() != null) {
			// Fetch and set Hotel entity
			Hotel hotel = hotelService.getEntityById(dto.getHotelId());
			review.setHotel(hotel);
		}
	}
}
