package com.hotel.booking.system.api.service.impl;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.repository.HotelOwnerRepository;
import com.hotel.booking.system.api.repository.HotelRepository;
import com.hotel.booking.system.api.service.GenericService;

@Service
public class HotelServiceImpl implements GenericService<Hotel> {

	@Autowired
	private HotelRepository HotelRepository;

	@Autowired
	private HotelOwnerRepository hotelOwnerRepository;

	@Override
	public Hotel saveEntity(Hotel Hotel) {
		return HotelRepository.save(Hotel);
	}

	@Override
	public List<Hotel> getAllEntities() {
		return HotelRepository.findAll();
	}

	@Override
	public Hotel getEntityById(long id) {
		/*
		 * Optional<Hotel> Hotel = HotelRepository.findById(id); if(Hotel.isPresent()) {
		 * return Hotel.get(); } else { throw new ResourceNotFoundException("Hotel",
		 * "Id", Hotel); }
		 */

		return HotelRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Hotel", "Id", id));
	}

	@Override
	public Hotel updateEntity(Hotel hotel, long id) {
		Hotel existingHotel = HotelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel", "Id", id));
		existingHotel.setName(hotel.getName());
		existingHotel.setAddress(hotel.getAddress());
		existingHotel.setDescription(hotel.getDescription());
		existingHotel.setStarRating(hotel.getStarRating());
		existingHotel.setFacilities(hotel.getFacilities());
		existingHotel.setAmenities(hotel.getAmenities());
		existingHotel.setPictureURL(hotel.getPictureURL());
		existingHotel.setCity(hotel.getCity());
		HotelRepository.save(existingHotel);

		return existingHotel;
	}

	public List<Hotel> getMyHotels(Long hotelOwnerID) {
		HotelOwner owner = hotelOwnerRepository.findById(hotelOwnerID)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel", "Id", hotelOwnerID));

		List<Hotel> hotels1 = getAllEntities();

		List<Hotel> availableHotels = new ArrayList<>();

		for (Hotel Hotel1 : hotels1) {

			if (Hotel1.getHotelOwner().getId() == owner.getId()) {
				availableHotels.add(Hotel1);
			}
		}

		return availableHotels;
	}

	@Override
	public void deleteEntity(long id) {
		HotelRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Hotel", "Id", id));
		HotelRepository.deleteById(id);
	}

	public void upload(Hotel hotel, MultipartFile file) throws IOException {

		try {
			byte[] photoData = file.getBytes();

			if (photoData.length == 0) {
				System.out.println("Failed to read the file data.");
			}

			String contentType = file.getContentType();
			String base64Image = "data:" + contentType + ";base64,"
					+ java.util.Base64.getEncoder().encodeToString(photoData);

			// hotel.setPictureURL(base64Image);

			hotel.setPictureURL(base64Image);

			System.out.println("File uploaded successfully.");
		} catch (IOException e) {
			e.getMessage();
		}

//		if (file.isEmpty()) {
//			return "No file uploaded.";
//		}
//
//		try {
//			byte[] photoData = file.getBytes();
//
//			if (photoData.length == 0) {
//				return "Failed to read the file data.";
//			}
//
//			String contentType = file.getContentType();
//			String base64Image = "data:" + contentType + ";base64,"
//					+ java.util.Base64.getEncoder().encodeToString(photoData);
//
//			// hotel.setPictureURL(base64Image);
//
//			hotel.setPictureURL(base64Image);
//			HotelRepository.save(hotel);
//
//			return "File uploaded successfully.";
//		} catch (IOException e) {
//			return "Error processing file: " + e.getMessage();
//		}
//	}

	}
}
