package com.hotel.booking.system.api.controller;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hotel.booking.system.api.dto.HotelResponseDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.repository.HotelOwnerRepository;
import com.hotel.booking.system.api.repository.HotelRepository;
import com.hotel.booking.system.api.security.config.JwtService;
import com.hotel.booking.system.api.security.user.ApplicationUser;
import com.hotel.booking.system.api.service.impl.HotelServiceImpl;

@SpringBootTest
@AutoConfigureMockMvc
public class HotelControllerIntergrationTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private HotelRepository hotelRepository;

	@Autowired
	private HotelOwnerRepository hotelOwnerRepository;

	@MockBean
	private JwtService jwtService;

	@MockBean
	private HotelServiceImpl hotelService;

	@Autowired
	private ObjectMapper objectMapper;

	@Autowired
	private PasswordEncoder passwordEncoder;

	private String mockJwtToken;
	private HotelResponseDTO hotelResponseDTO;
	private Hotel hotel;
	private HotelOwner hotelOwnerResponse;
	private List<Hotel> hotels;

	@BeforeEach
	public void setUp() throws IOException {

		// Initialize test HotelDTO
		HotelOwner owner1 = new HotelOwner("Jack", "Sparrow", "jack@example.com", passwordEncoder.encode("jack@123456"),
				new BigDecimal("5000"), new BigDecimal("5000"));

		MultipartFile file = new MockMultipartFile("file", "filename.png", "image/png", "some-image-data".getBytes());

		hotelResponseDTO = HotelResponseDTO.builder().name("Sun-fair").address("34 New England Street, PMB, 3201")
				.description("luxury").starRating(5).facilities("Pool, Gym, etc").amenities("Free Parking")
				.pictureURL(file).ownerId(1L).build();

		byte[] photoData = file.getBytes();
		String contentType = file.getContentType();
		String base64Image = "data:" + contentType + ";base64,"
				+ java.util.Base64.getEncoder().encodeToString(photoData);

		Hotel hotel = new Hotel();
		hotel.setName(hotelResponseDTO.getName());
		hotel.setAddress(hotelResponseDTO.getAddress());
		hotel.setDescription(hotelResponseDTO.getDescription());
		hotel.setStarRating(hotelResponseDTO.getStarRating());
		hotel.setFacilities(hotelResponseDTO.getFacilities());
		hotel.setAmenities(hotelResponseDTO.getAmenities());
		hotel.setPictureURL(base64Image);
		hotel.setHotelOwner(owner1);

		Hotel h1 = new Hotel();
		h1.setId(1L);
		h1.setName("Sun-fair");
		h1.setDescription("Luxury");
		h1.setHotelOwner(owner1);

		Hotel h2 = new Hotel();
		h2.setId(2L);
		h2.setName("SunArena");
		h2.setDescription("Luxury");
		h2.setHotelOwner(owner1);

		hotels = Arrays.asList(h1, h2);

		// Define a fixed JWT token
		mockJwtToken = "test-token";

		// Configure the JwtService mock
		when(jwtService.generateToken(any(ApplicationUser.class))).thenReturn(mockJwtToken);
		when(jwtService.isTokenValid(eq(mockJwtToken), any(ApplicationUser.class))).thenReturn(true);
		when(jwtService.extractUsername(eq(mockJwtToken))).thenReturn("testuser");
	}

	// @Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	void createBooking_ShouldReturnCreatedBooking() throws Exception {
		// Arrange
		HotelOwner owner1 = new HotelOwner("Jack", "Sparrow", "jack@example.com", passwordEncoder.encode("jack@123456"),
				new BigDecimal("5000"), new BigDecimal("5000"));

		HotelResponseDTO hDTO = new HotelResponseDTO();
		hDTO.setOwnerId(owner1.getId());

		Hotel h1 = new Hotel();
		h1.setHotelOwner(owner1);

		MockMultipartFile file = new MockMultipartFile("file", "filename.png", "image/png",
				"some-image-data".getBytes());
		MockMultipartFile hotelJson = new MockMultipartFile("hotelDto", "", MediaType.APPLICATION_JSON_VALUE,
				new ObjectMapper().writeValueAsString(h1).getBytes());

		// Act & Assert
		mockMvc.perform(multipart("/api/hotel").file(file).file(hotelJson)
				.header("Authorization", "Bearer " + mockJwtToken).contentType(MediaType.MULTIPART_FORM_DATA))
				.andDo(print()).andExpect(status().isBadRequest())
				.andExpect(jsonPath("$.message").value("Owner ID cannot be null"));

	}

	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	public void givenHotelList_whenFindAllHotels_thenReturnListofHotelFromDB()
			throws JsonProcessingException, Exception {

		when(hotelService.getAllEntities()).thenReturn(hotels);

		mockMvc.perform(get("/api/public/hotels").header("Authorization", "Bearer " + mockJwtToken)
				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(jsonPath("$.length()", equalTo(2))).andExpect(jsonPath("$.[0].name", equalTo("Sun-fair")))
				.andExpect(jsonPath("$.[1].name", equalTo("SunArena"))).andExpect(status().isOk());

		verify(hotelService, times(1)).getAllEntities();
	}

	// Pass
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	public void givenHotelList_whenFindAllHotelsGreaterThanZero_thenReturnListofHotels()
			throws JsonProcessingException, Exception {

		when(hotelService.getAllEntities()).thenReturn(hotels);

		mockMvc.perform(get("/api/public/hotels").header("Authorization", "Bearer " + mockJwtToken)
				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(jsonPath("$.[0].name", equalTo("Sun-fair")))
				.andExpect(jsonPath("$.[1].name", equalTo("SunArena"))).andExpect(status().isOk());

		assertTrue(hotels.size() > 0);

	}

//
	// @Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	public void test_saveHotel() throws Exception {
		// Initialize test HotelOwner
		HotelOwner owner1 = new HotelOwner("Jack", "Sparrow", "jack@example.com", passwordEncoder.encode("jack@123456"),
				new BigDecimal("5000"), new BigDecimal("5000"));

		// Create a MockMultipartFile
		MockMultipartFile file = new MockMultipartFile("file", "filename.png", "image/png",
				"some-image-data".getBytes());

		// Prepare the hotel request parameters
		HotelResponseDTO hotelResponseDTO = HotelResponseDTO.builder().name("Sun-fair")
				.address("34 New England Street, PMB, 3201").description("luxury").starRating(5)
				.facilities("Pool, Gym, etc").amenities("Free Parking").pictureURL(file).ownerId(owner1.getId()) // Ensure
																													// this
																													// is
																													// set
																													// correctly
				.build();

		MockMultipartFile hotelJson = new MockMultipartFile("hotel", "", MediaType.APPLICATION_JSON_VALUE,
				new ObjectMapper().writeValueAsString(hotelResponseDTO).getBytes());

		// Perform the multipart request
		mockMvc.perform(multipart("/api/hotel").file(file).file(hotelJson)
				.header("Authorization", "Bearer " + mockJwtToken).contentType(MediaType.MULTIPART_FORM_DATA))
				.andExpect(status().isOk());
	}

	// Pass
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	void deleteHotel_ShouldReturn_isOkaySuccessMessage() throws Exception {

		// Arrange
		Hotel hotel = new Hotel();
		hotel.setId(1L);
		hotel.setName("Jacaranda");
		hotel.setDescription("Luxury");

		// Act & Assert

		when(hotelService.getEntityById(1L)).thenReturn(hotel);

		mockMvc.perform(delete("/api/hotels/{id}", 1L).header("Authorization", "Bearer " + mockJwtToken)
				.contentType(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.message").value("Hotel " + hotel.getName() + " " + " deleted successfully"));
	}

	// Pass
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	public void deleteHotelById_HotelIsNotFound_ReturnsHotelNotFoundAndMessage() throws Exception {
		// Arrange

		// Mock the behavior of the service layer
		when(hotelService.getEntityById(999L)).thenThrow(new ResourceNotFoundException("Hotel", "Id", 999L));

		// Act & Assert
		mockMvc.perform(delete("/api/hotels/{id}", 999L).header("Authorization", "Bearer " + mockJwtToken))
				.andExpect(status().isNotFound())
				.andExpect(jsonPath("$.message").value("Hotel not found with Id : '999'")).andDo(print());
	}

	// Pass
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	public void getHotelById_Hotel_ReturnsNotFoundAndMessage() throws Exception {

		// Act & Assert
		when(hotelService.getEntityById(999L)).thenThrow(new ResourceNotFoundException("Hotel", "Id", 999L));

		mockMvc.perform(get("/api/public/hotel/{id}", 999L).header("Authorization", "Bearer " + mockJwtToken))
				.andExpect(status().isNotFound())
				.andExpect(jsonPath("$.message").value("Hotel not found with Id : '999'")).andDo(print());
	}

	// Pass
	@Test
	public void givenID1_whenHotelIsPresent_thenReturnsIsOK() throws Exception {
		Long hotelId = 1L;
		HotelOwner owner = new HotelOwner();

		Hotel hotel = new Hotel();

		hotel.setId(hotelId);
		hotel.setHotelOwner(owner);
		hotel.setName("Sun-fair");
		hotel.setDescription("luxury");

		given(hotelService.getEntityById(hotelId)).willReturn(hotel);

		mockMvc.perform(get("/api/public/hotel/{Id}", hotel.getId()).contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(jsonPath("$.Hotel.name").value("Sun-fair")) // Updated path
				.andExpect(jsonPath("$.Hotel.description").value("luxury")).andExpect(status().isOk());
	}

//

	@Test
	public void getHotelById_InternalServerError_ReturnsErrorMessage() throws Exception {
		// Arrange
		long hotelId = 1L;
		when(hotelService.getEntityById(hotelId)).thenThrow(new RuntimeException("Something went wrong"));

		// Act & Assert
		mockMvc.perform(get("/api/public/hotel/{id}", hotelId)).andExpect(status().isInternalServerError())
				.andExpect(jsonPath("$.error").value("Something went wrong")).andDo(print());
	}

	@AfterEach
	void teardown() {
		// hotelRepository.deleteAll();
		//// Now clear the hotel owners after hotels have been removed
		// hotelOwnerRepository.deleteAll();
		hotel = null;
	}
}
