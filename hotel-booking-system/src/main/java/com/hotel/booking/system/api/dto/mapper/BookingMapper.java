package com.hotel.booking.system.api.dto.mapper;

import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import com.hotel.booking.system.api.dto.BookingResponseDTO;
import com.hotel.booking.system.api.dto.post.BookingPostDTO;
import com.hotel.booking.system.api.model.Booking;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.Room;
import com.hotel.booking.system.api.service.impl.CustomerServiceImpl;
import com.hotel.booking.system.api.service.impl.RoomServiceImpl;

@Mapper(componentModel = "spring")
public abstract class BookingMapper {

	@Autowired
	private CustomerServiceImpl customerService;

	@Autowired
	private RoomServiceImpl roomService;

	// Mapping Booking entity to BookingResponseDTO
	@Mapping(source = "customer.id", target = "customerId")
	@Mapping(source = "room.id", target = "roomId")
	public abstract BookingResponseDTO toResponseDTO(Booking booking);

	// Mapping BookingPostDTO to Booking entity without setting customer/room
	// directly
	@Mapping(target = "customer", ignore = true)
	@Mapping(target = "room", ignore = true)
	public abstract Booking toEntity(BookingPostDTO bookingPostDTO);

	// Manually setting customer and room entities after the basic mapping
	@AfterMapping
	protected void afterToEntity(BookingPostDTO dto, @MappingTarget Booking booking) {
		if (dto.getCustomerId() != null) {
			// Fetch and set Customer entity
			Customer customer = customerService.getEntityById(dto.getCustomerId());
			booking.setCustomer(customer);
		}

		if (dto.getRoomId() != null) {
			// Fetch and set Room entity
			Room room = roomService.getEntityById(dto.getRoomId());
			booking.setRoom(room);
		}
	}
}
