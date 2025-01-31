package com.hotel.booking.system.api.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.booking.system.api.dto.RoomResponseDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.Room;
import com.hotel.booking.system.api.service.impl.HotelServiceImpl;
import com.hotel.booking.system.api.service.impl.RoomServiceImpl;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class RoomController {

	@Autowired
	private RoomServiceImpl roomService;

	@Autowired
	private HotelServiceImpl hotelService;

	@ResponseStatus(HttpStatus.NOT_FOUND)
	public class RoomNotFoundException extends RuntimeException {

		public RoomNotFoundException(String message) {
			super(message);
		}
	}

	// build create room REST API
	@PostMapping("/room")
	public ResponseEntity<Map<String, Object>> saveRoom(@RequestBody RoomResponseDTO room) {

		Map<String, Object> response = new HashMap<>();

		try {

			long Id = room.getHotelId();

			Hotel hotel = hotelService.getEntityById(Id);
			if (hotel == null) {
				response.put("message", "Hotel not found.");
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
			}

			// Create a new Room instance and set the owner
			Room newRoom = new Room();
			newRoom.setOccupancy(room.getOccupancy());
			newRoom.setPrice(room.getPrice());
			newRoom.setRoomType(room.getRoomType());
			newRoom.setHotel(hotel);

			Room savedRoom = roomService.saveEntity(newRoom);
			response.put("room", savedRoom);
			response.put("message", "Room saved successfully");
			return ResponseEntity.status(HttpStatus.CREATED).body(response);

		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("message", "An error occurred while saving the room");
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}

	}

	@CrossOrigin(origins = "http://localhost:5173")
	@GetMapping("/public/rooms")
	public List<Room> getAllRooms() {
		return roomService.getAllEntities();
	}

	@CrossOrigin(origins = "http://localhost:5173")
	@GetMapping("/public/rooms/{id}")
	public ResponseEntity<Map<String, Object>> getRoomById(@PathVariable("id") long id) {

		Map<String, Object> response = new HashMap<>();

		try {
			Room room = roomService.getEntityById(id);

			response.put("Room", room);
			response.put("message", "Room retrieved successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			// TODO: handle exception
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}

	}

	@CrossOrigin(origins = "http://localhost:5173")
	@GetMapping("/public/rooms/room-with-lowest-price/{hotelId}")
	public ResponseEntity<Map<String, Object>> getRoomWithLowestPrice(@PathVariable long hotelId) {

		Map<String, Object> response = new HashMap<>();

		try {
			Room room = roomService.getRoomWithLowestPrice(hotelId);

			response.put("Room", room);
			response.put("message", "Room retrieved successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			// TODO: handle exception
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	@GetMapping("/public/rooms/available-rooms")
	public ResponseEntity<Map<String, Object>> getAvailableRooms(@RequestParam long hotelId,
			@RequestParam String checkInDate, @RequestParam String checkOutDate) {
		Map<String, Object> response = new HashMap<>();

		try {
			// Convert strings to LocalDateTime
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
			LocalDateTime checkIn = LocalDateTime.parse(checkInDate, formatter);
			LocalDateTime checkOut = LocalDateTime.parse(checkOutDate, formatter);

			// Fetch rooms
			List<Room> rooms = roomService.getAvailableRoomsNotBooked(Long.valueOf(hotelId), checkIn, checkOut);

			response.put("Rooms", rooms);
			response.put("message", "Rooms retrieved successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	@CrossOrigin(origins = "http://localhost:5173")
	@GetMapping("/public/rooms/all-available-rooms/{hotelId}")
	public ResponseEntity<Map<String, Object>> getAllAvailableRooms(@PathVariable long hotelId) {

		Map<String, Object> response = new HashMap<>();

		try {
			List<Room> rooms = roomService.getAllAvailableRooms(hotelId);

			response.put("Room", rooms);
			response.put("message", "Rooms retrieved successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			// TODO: handle exception
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}

	}

	@CrossOrigin(origins = "http://localhost:5173")
	@DeleteMapping("/room/{id}")
	public ResponseEntity<Map<String, Object>> deleteRoomById(@PathVariable("id") long id) {

		Map<String, Object> response = new HashMap<>();

		try {
			Room room = roomService.getEntityById(id); // This will throw if not found
			roomService.deleteEntity(room.getId()); // Perform the deletion

			response.put("Room", room.getId());
			response.put("message", "Room" + room.getRoomType() + " " + " deleted successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", "An unexpected error occurred: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}

	}

	@GetMapping("/rooms/owner/{ownerId}")
	public ResponseEntity<Map<String, Object>> getroomByownerId(@PathVariable long ownerId) {
		Map<String, Object> response = new HashMap<>();

		try {
			List<Room> room = roomService.getMyRooms(ownerId);
			response.put("room", room);
			response.put("message", "Rooms retrieved successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}

	@PutMapping("/room/{id}")
	public ResponseEntity<Map<String, Object>> updateRoom(@PathVariable Long id, @RequestBody RoomResponseDTO entity) {

		Map<String, Object> response = new HashMap<>();

		try {
			// Check if ID or entity is null
			if (id == null || entity == null) {
				response.put("message", "ID not detected or Body is room");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
			}

			// Get hotelID from DTO
			long Id = entity.getHotelId();

			Hotel hotel = hotelService.getEntityById(Id);
			if (hotel == null) {
				response.put("message", "Hotel not found.");
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
			}

			// Retrieve the existing room
			Room room = roomService.getEntityById(id);
			Hotel hotel1 = room.getHotel();

			if (Id != hotel1.getId()) {
				response.put("message", "The selected room does not belong to this hotel.");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
			}

			// Create a new Room instance and set the owner
			Room newRoom = new Room();
			newRoom.setOccupancy(entity.getOccupancy());
			newRoom.setPrice(entity.getPrice());
			newRoom.setRoomType(entity.getRoomType());
			newRoom.setHotel(hotel);

			// Update the room
			roomService.updateEntity(newRoom, id);
			response.put("Room", entity);
			response.put("message", "Room updated successfully");
			return ResponseEntity.ok(response);

		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", "An unexpected error occurred: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}

	}
}
