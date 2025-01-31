package com.hotel.booking.system.api.controller;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.service.impl.HotelOwnerServiceImpl;

@RestController
@RequestMapping("/api")
public class HotelOwnerController {

	@Autowired
	private HotelOwnerServiceImpl hotelOwnerService;

	@ResponseStatus(HttpStatus.NOT_FOUND)
	public class HotelOwnerNotFoundException extends RuntimeException {
		public HotelOwnerNotFoundException(String message) {
			super(message);
		}
	}

	// build create hotelOwner REST API
	@PostMapping("/hotelOwner")
	public ResponseEntity<Map<String, Object>> saveHotelOwner(@RequestBody HotelOwner hotelOwner) {

		Map<String, Object> response = new HashMap<>();

		try {

			if (hotelOwner.getFirstName() == null || hotelOwner.getLastName() == null || hotelOwner.getEmail() == null
					|| hotelOwner.getPassword() == null) {

				response.put("message", "HotelOwner name,lastname, email, and password cannot be null");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
			}

			HotelOwner savedHotelOwner = hotelOwnerService.saveEntity(hotelOwner);
			response.put("hotelOwner", savedHotelOwner);
			response.put("message", "HotelOwner saved successfully");
			return ResponseEntity.status(HttpStatus.CREATED).body(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("message", "An error occurred while saving the hotelOwner");
			response.put("error", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}

	}

	@GetMapping("/public/hotelOwners")
	public List<HotelOwner> getAllHotelOwners() {
		return hotelOwnerService.getAllEntities();
	}

	@GetMapping("/public/hotelOwners/{id}")
	public ResponseEntity<Map<String, Object>> getHotelOwnerById(@PathVariable("id") Long id) {

		Map<String, Object> response = new HashMap<>();

//		if (id == null) {
//			response.put("message", "ID not detected");
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
//		}

		try {

			HotelOwner hotelOwner = hotelOwnerService.getEntityById(id);

			response.put("HotelOwner", hotelOwner);
			response.put("message", "HotelOwner retrieved successfully");
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

	@GetMapping("/hotelOwners/get-by-email/{email}")
	public ResponseEntity<Map<String, Object>> getHotelOwnerByEmail(@PathVariable("email") String email) {

		Map<String, Object> response = new HashMap<>();

		try {

			HotelOwner hotelOwner = hotelOwnerService.getUserByEmail(email);

			response.put("HotelOwner", hotelOwner);
			response.put("message", "HotelOwner retrieved successfully");
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

	@DeleteMapping("/hotelOwner/{id}")
	public ResponseEntity<Map<String, Object>> deleteHotelOwnerById(@PathVariable("id") long id) {

		Map<String, Object> response = new HashMap<>();

		try {
			HotelOwner hotelOwner = hotelOwnerService.getEntityById(id); // This will throw if not found
			hotelOwnerService.deleteEntity(hotelOwner.getId()); // Perform the deletion

			response.put("HotelOwner", hotelOwner.getId());
			response.put("message", "HotelOwner " + hotelOwner.getFirstName() + " " + hotelOwner.getLastName()
					+ " deleted successfully");
			return ResponseEntity.ok(response);
		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", "An unexpected error occurred: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}

	}

	@PutMapping("/hotelOwner/{id}")
	public ResponseEntity<Map<String, Object>> updateHotelOwner(@PathVariable Long id, @RequestBody HotelOwner entity) {

		Map<String, Object> response = new HashMap<>();

		try {
			// Check if ID or entity is null
			if (id == null || entity == null) {
				response.put("message", "ID not detected or Body is hotelOwnerty");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
			}

			// Retrieve the existing hotelOwner
			HotelOwner hotelOwner = hotelOwnerService.getEntityById(id);

			if (!id.equals(entity.getId())) {
				response.put("Error", "HotelOwner IDs do not match");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
			}

			// Update the hotelOwner
			hotelOwnerService.updateEntity(entity, id);
			response.put("HotelOwner", entity);
			response.put("message", "HotelOwner updated successfully");
			return ResponseEntity.ok(response);

		} catch (ResourceNotFoundException e) {
			response.put("message", e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
		} catch (Exception e) {
			response.put("error", "An unexpected error occurred: " + e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}

	}

	@PutMapping("/hotelOwner/update-current-balance")
	public ResponseEntity<Map<String, Object>> updateHotelOwner(@RequestParam Long hotelId,
			@RequestParam BigDecimal fee) {

		Map<String, Object> response = new HashMap<>();

		try {

			// Update the hotelOwner
			HotelOwner hotelOwner = hotelOwnerService.updateCurrentBalance(hotelId, fee);
			response.put("HotelOwner", hotelOwner);
			response.put("message", "HotelOwner updated successfully");
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
