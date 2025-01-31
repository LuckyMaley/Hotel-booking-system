package com.hotel.booking.system.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hotel.booking.system.api.dto.HotelResponseDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.service.impl.HotelOwnerServiceImpl;
import com.hotel.booking.system.api.service.impl.HotelServiceImpl;

@RestController
@RequestMapping("/api")

public class HotelController {

	@Autowired
	private HotelServiceImpl hotelService;

	@Autowired
	private HotelOwnerServiceImpl hotelOwnerService;

	@ResponseStatus(HttpStatus.NOT_FOUND)
	public class HotelNotFoundException extends RuntimeException {

		public HotelNotFoundException(String message) {
			super(message);
		}
	}

	@CrossOrigin(origins = "http://localhost:5173")
	@PostMapping("/hotel")
	public ResponseEntity<Map<String, Object>> saveHotel(@ModelAttribute HotelResponseDTO hotelDto,
			@RequestPart(value = "pictureURL", required = false) MultipartFile pictureURL) {
		Map<String, Object> response = new HashMap<>();

		long Id = hotelDto.getOwnerId();

		if (hotelDto == null) {
			response.put("message", "Body is empty");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
		}

		// Fetch the HotelOwner based on ownerId
		HotelOwner hotelOwner = hotelOwnerService.getEntityById(Id);
		if (hotelOwner == null) {
			response.put("message", "Hotel owner not found.");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		}

		// Create a new Hotel instance and set the owner
		Hotel hotel = new Hotel();
		hotel.setName(hotelDto.getName());
		hotel.setAddress(hotelDto.getAddress());
		hotel.setDescription(hotelDto.getDescription());
		hotel.setStarRating(hotelDto.getStarRating());
		hotel.setFacilities(hotelDto.getFacilities());
		hotel.setAmenities(hotelDto.getAmenities());
		hotel.setCity(hotelDto.getCity());
		hotel.setHotelOwner(hotelOwner); // Associate the HotelOwner

		// Handle the picture upload
		if (pictureURL != null && !pictureURL.isEmpty()) {
			try {
				hotelService.upload(hotel, pictureURL);

				Hotel savedHotel = hotelService.saveEntity(hotel);
				response.put("hotel", savedHotel);

			} catch (ResourceNotFoundException e) {
				response.put("message", "Error: " + e.getMessage());
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
			} catch (Exception e) {
				response.put("message", "Error during file upload: " + e.getMessage());
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
			}
		}

		response.put("message 1",
				pictureURL != null && !pictureURL.isEmpty() ? "File upload success :) " : "File upload failed :(");
		response.put("message 2", "Hotel saved successfully");
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
	}

	@GetMapping("/public/hotels")
	public List<Hotel> getAllHotels() {
		return hotelService.getAllEntities();
	}

	@GetMapping("/public/hotel/{id}")
	public ResponseEntity<Map<String, Object>> getHotelById(@PathVariable("id") long id) {

		Map<String, Object> response = new HashMap<>();

		try {
			Hotel hotel = hotelService.getEntityById(id);

			response.put("Hotel", hotel);
			response.put("message", "Hotel retrieved successfully");
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
	@DeleteMapping("/hotels/{id}")
	public ResponseEntity<Map<String, Object>> deleteHotelById(@PathVariable("id") long id) {

		Map<String, Object> response = new HashMap<>();

		try {
			Hotel hotel = hotelService.getEntityById(id); // This will throw if not found
			hotelService.deleteEntity(hotel.getId()); // Perform the deletion

			response.put("Hotel", hotel.getId());
			response.put("message", "Hotel " + hotel.getName() + " " + " deleted successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", "An unexpected error occurred: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}

	}

	@GetMapping("/hotels/owner/{ownerId}")
	public ResponseEntity<Map<String, Object>> gethotelByownerId(@PathVariable long ownerId) {
		Map<String, Object> response = new HashMap<>();

		try {
			List<Hotel> hotel = hotelService.getMyHotels(ownerId);
			response.put("hotel", hotel);
			response.put("message", "Hotels retrieved successfully");
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
	@PutMapping("/hotels/{id}")
	public ResponseEntity<Map<String, Object>> updateHotel(@PathVariable Long id,
			@ModelAttribute HotelResponseDTO entity, @RequestParam("pictureURL") MultipartFile file) {

		Map<String, Object> response = new HashMap<>();

		try {
			// Check if ID or entity is null
			if (id == null || entity == null) {
				response.put("message", "ID or Body not detected");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
			}

			long Id = entity.getOwnerId();

			// Fetch the HotelOwner based on ownerId
			HotelOwner hotelOwner = hotelOwnerService.getEntityById(Id);
			if (hotelOwner == null) {
				response.put("message", "Hotel owner not found.");
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
			}

			// Check if Model Hotel Owner ID equals retrieved Hotel Owner ID
			if (hotelOwner.getId() != entity.getOwnerId()) {
				response.put("message", "Hotel owner IDs don't match.");
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
			}

			// Retrieve the existing hotel
			Hotel hotel = hotelService.getEntityById(id);

			if (!id.equals(hotel.getId())) {
				response.put("Error", "Hotel IDs do not match");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
			}

			// Update the hotel
			Hotel updateHotel = new Hotel();
			updateHotel.setName(entity.getName());
			updateHotel.setAddress(entity.getAddress());
			updateHotel.setDescription(entity.getDescription());
			updateHotel.setStarRating(entity.getStarRating());
			updateHotel.setFacilities(entity.getFacilities());
			updateHotel.setAmenities(entity.getAmenities());
			updateHotel.setCity(entity.getCity());
			updateHotel.setHotelOwner(hotelOwner);

			if (file != null && !file.isEmpty() && !file.equals(hotel.getPictureURL())) {
				try {
					hotelService.upload(updateHotel, file);

					updateHotel.setPictureURL(hotel.getPictureURL());
					hotelService.updateEntity(updateHotel, id);

				} catch (ResourceNotFoundException e) {
					response.put("message", "Error: " + e.getMessage());
					return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
				} catch (Exception e) {
					response.put("message", "Error during file upload: " + e.getMessage());
					return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
				}
			}

			response.put("Hotel", hotel);
			response.put("message",
					file != null && !file.isEmpty() ? "File upload success :) " : "File upload failed :(");
			response.put("message", "Hotel updated successfully");

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
