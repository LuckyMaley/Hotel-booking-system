package com.hotel.booking.system.api.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.Room;
import com.hotel.booking.system.api.repository.HotelRepository;
import com.hotel.booking.system.api.repository.RoomRepository;
import com.hotel.booking.system.api.service.GenericService;

@Service
public class RoomServiceImpl implements GenericService<Room> {

	@Autowired
	private RoomRepository RoomRepository;

	@Autowired
	private HotelRepository hotelRepository;

	@Override
	public Room saveEntity(Room Room) {
		return RoomRepository.save(Room);
	}

	@Override
	public List<Room> getAllEntities() {
		return RoomRepository.findAll();
	}

	@Override
	public Room getEntityById(long id) {
		/*
		 * Optional<Room> Room = RoomRepository.findById(id); if(Room.isPresent()) {
		 * return Room.get(); } else { throw new ResourceNotFoundException("Room", "Id",
		 * Room); }
		 */

		return RoomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room", "Id", id));
	}

	@Override
	public Room updateEntity(Room room, long id) {
		Room existingRoom = RoomRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Room", "Id", id));
		existingRoom.setRoomType(room.getRoomType());
		existingRoom.setPrice(room.getPrice());
		existingRoom.setOccupancy(room.getOccupancy());
		RoomRepository.save(existingRoom);

		return existingRoom;
	}

	@Override
	public void deleteEntity(long id) {
		RoomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Room", "Id", id));
		RoomRepository.deleteById(id);
	}

	public Room getRoomWithLowestPrice(Long hotelId) {
		Hotel hotel = hotelRepository.findById(hotelId)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel", "Id", hotelId));
		Room room = RoomRepository.findByHotel(hotel).stream().min(Comparator.comparing(Room::getPrice))
				.orElseThrow(() -> new ResourceNotFoundException("Room", "HotelId", hotelId));

		return room;
	}

	public List<Room> getMyRooms(Long RoomOwnerID) {
		Room owner = RoomRepository.findById(RoomOwnerID)
				.orElseThrow(() -> new ResourceNotFoundException("Room", "Id", RoomOwnerID));

		List<Room> Rooms1 = getAllEntities();

		List<Room> availableRooms = new ArrayList<>();

		for (Room Room1 : Rooms1) {

			if (Room1.getHotel().getId() == owner.getId()) {
				availableRooms.add(Room1);
			}
		}

		return availableRooms;
	}

	public List<Room> getAllAvailableRooms(Long hotelID) {
		Hotel hotel = hotelRepository.findById(hotelID)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel", "Id", hotelID));

		List<Room> rooms = RoomRepository.findByHotel(hotel);

		List<Room> availableRooms = new ArrayList<>();

		for (Room room1 : rooms) {

			if ("Available".equals(room1.getOccupancy())) {
				availableRooms.add(room1);
			}
		}

		return availableRooms;
	}

	public List<Room> getAvailableRoomsNotBooked(Long hotelId, LocalDateTime checkInDate, LocalDateTime checkOutDate) {
		List<Room> rooms = RoomRepository.findSpecificHotelAvailableRoomsByDatesAndTypes(hotelId, checkInDate, checkOutDate);
		return rooms;
	}

}
