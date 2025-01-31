package com.hotel.booking.system.api.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hotel.booking.system.api.dto.RoomResponseDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.Room;
import com.hotel.booking.system.api.repository.RoomRepository;
import com.hotel.booking.system.api.security.config.JwtService;
import com.hotel.booking.system.api.security.user.ApplicationUser;
import com.hotel.booking.system.api.security.user.ApplicationUserRole;
import com.hotel.booking.system.api.service.impl.HotelServiceImpl;
import com.hotel.booking.system.api.service.impl.RoomServiceImpl;

@WebMvcTest(RoomController.class)
public class RoomControllerIntergrationTests {

	@Autowired
	private MockMvc mockMvc;

	@InjectMocks
	private RoomController roomController;

	private List<RoomResponseDTO> roomsDTO;
	private List<Room> rooms;

	@MockBean
	private RoomServiceImpl roomService;

	@MockBean
	private HotelServiceImpl hotelService;

	@Autowired
	private ObjectMapper objectMapper;

	@Mock
	private RoomRepository roomRepository;

	@MockBean
	private JwtService jwtService;

	@Autowired
	@MockBean
	private PasswordEncoder passwordEncoder;

	private String mockJwtToken;
	private RoomResponseDTO roomDTO;
	private Room room;

	@BeforeEach
	public void setup() {

		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(roomController).build();

		// Initialize a sample list of Rooms
		RoomResponseDTO roomDTO1 = new RoomResponseDTO();
		roomDTO1.setHotelId(1L);
		roomDTO1.setOccupancy("Available");
		roomDTO1.setRoomType("Suite");
		roomDTO1.setPrice(new BigDecimal(1000));

		RoomResponseDTO roomDTO2 = new RoomResponseDTO();
		roomDTO2.setHotelId(1L);
		roomDTO2.setOccupancy("Booked");
		roomDTO2.setRoomType("Single");
		roomDTO2.setPrice(new BigDecimal(1000));

		roomsDTO = Arrays.asList(roomDTO1, roomDTO2);

		// Room Model
		Room room1 = new Room();

		room1.setId(roomDTO1.getHotelId());
		room1.setOccupancy(roomDTO1.getOccupancy());
		room1.setRoomType(roomDTO1.getRoomType());
		room1.setPrice(roomDTO1.getPrice());

		Room room2 = new Room();

		room2.setId(roomDTO2.getHotelId());
		room2.setOccupancy(roomDTO2.getOccupancy());
		room2.setRoomType(roomDTO2.getRoomType());
		room2.setPrice(roomDTO2.getPrice());

		rooms = Arrays.asList(room1, room2);


		// Define a fixed JWT token
		mockJwtToken = "test-token";

		// Configure the JwtService mock
		when(jwtService.generateToken(any(ApplicationUser.class))).thenReturn(mockJwtToken);
		when(jwtService.isTokenValid(eq(mockJwtToken), any(ApplicationUser.class))).thenReturn(true);
		when(jwtService.extractUsername(eq(mockJwtToken))).thenReturn("john.doe@example.com");

	}

	// Pass
	@Test
	void getAllRooms_ShouldReturnListOfRooms() throws Exception {
		// Arrange
		when(roomService.getAllEntities()).thenReturn(rooms);

		// Act & Assert
		mockMvc.perform(get("/api/public/rooms").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
				.andExpect(jsonPath("$[0].roomType").value("Suite"))
				.andExpect(jsonPath("$[1].roomType").value("Single"));

		verify(roomService, times(1)).getAllEntities(); // Verify that the service method was called once
	}

	// @Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	void givenRoom_whenAddRoom_thenReturnRoomIsCreated() throws JsonProcessingException, Exception {
		//@formatter:off
		//arrange

		RoomResponseDTO room = new RoomResponseDTO();
		room.setRoomType("Suite");
		room.setOccupancy("Available");
		room.setPrice(new BigDecimal(1000));

		Hotel hotel = new Hotel();
	    hotel.setId(6L);
	    hotel.setName("Persian Rugs");
	    
	    Room room1 = new Room();
	    
	    room1.setOccupancy(room.getOccupancy());
	    room1.setPrice(room.getPrice());
	    room1.setRoomType(room.getRoomType());
	    room1.setHotel(hotel);
		
	    when(roomService.saveEntity(room1)).thenReturn(room1);
//		
		mockMvc.perform(
					post("/api/room")
					.header("Authorization", "Bearer " + mockJwtToken)
					.content(objectMapper.writeValueAsString(room1))
					.contentType(MediaType.APPLICATION_JSON))
//			.andExpect(jsonPath("$.room.roomType").value("Suite"))
//			.andExpect(jsonPath("$.Room.occupancy").value("Available"))
//	        .andExpect(jsonPath("$.Room.price").value(room.getPrice().intValue()))
//	        .andExpect(jsonPath("$.message").value("Room saved successfully"))
			.andExpect(status().isCreated())
			.andDo(print());
		
		verify(roomService, times(1)).saveEntity(room1);
		//formatter:on
	}
	
	
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	void deleteHotel_ShouldReturn_isOkaySuccessMessage() throws Exception {

		// Arrange
		Room room = new Room();
		room.setId(1L);
		room.setOccupancy("Jacaranda");
		room.setPrice(new BigDecimal(1000));
		room.setRoomType("Single");

		// Act & Assert

		when(roomService.getEntityById(1L)).thenReturn(room);

		mockMvc.perform(delete("/api/room/{id}", 1L).header("Authorization", "Bearer " + mockJwtToken)
				.contentType(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.message").value("Room" + room.getRoomType() + " " + " deleted successfully"));
	}
	
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	public void deleteRoomById_RoomIsNotFound_ReturnsRoomNotFoundAndMessage() throws Exception {
		// Arrange

		// Mock the behavior of the service layer
		when(roomService.getEntityById(999L)).thenThrow(new ResourceNotFoundException("Room", "Id", 999L));

		// Act & Assert
		mockMvc.perform(delete("/api/room/{id}", 999L).header("Authorization", "Bearer " + mockJwtToken))
				.andExpect(status().isNotFound())
				.andExpect(jsonPath("$.message").value("Room not found with Id : '999'")).andDo(print());
	}
	
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	public void getRoomById_Room_ReturnsNotFoundAndMessage() throws Exception {

		// Act & Assert
		when(roomService.getEntityById(999L)).thenThrow(new ResourceNotFoundException("Room", "Id", 999L));

		mockMvc.perform(get("/api/public/rooms/{id}", 999L).header("Authorization", "Bearer " + mockJwtToken))
				.andExpect(status().isNotFound())
				.andExpect(jsonPath("$.message").value("Room not found with Id : '999'")).andDo(print());
	}
	
	@Test
	public void givenID1_whenRoomIsPresent_thenReturnsIsOK() throws Exception {
		Long roomId = 1L;

		Room room = new Room();
		room.setId(roomId);
		room.setOccupancy("Booked");
		room.setPrice(new BigDecimal(1000));
		room.setRoomType("Single");

		given(roomService.getEntityById(roomId)).willReturn(room);

		mockMvc.perform(get("/api/public/rooms/{Id}", room.getId()).contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(jsonPath("$.Room.occupancy").value("Booked"))
				.andExpect(jsonPath("$.Room.price").value(room.getPrice().intValue()))// Updated path
				.andExpect(jsonPath("$.Room.roomType").value("Single")).andExpect(status().isOk());
	}
	
	@Test
	public void getRoomById_InternalServerError_ReturnsErrorMessage() throws Exception {
		// Arrange
		long roomId = 1L;
		when(roomService.getEntityById(roomId)).thenThrow(new RuntimeException("Something went wrong"));

		// Act & Assert
		mockMvc.perform(get("/api/public/rooms/{id}", roomId)).andExpect(status().isInternalServerError())
				.andExpect(jsonPath("$.error").value("Something went wrong")).andDo(print());
	}
	
	@Test
	void updateRoom_ShouldReturnBadRequest_WhenIdOrEntityIsNull() throws Exception {
	    // Arrange
	    RoomResponseDTO roomDto = null; // Simulating a null entity

	    // Act & Assert
	    mockMvc.perform(put("/api/room/{id}", 1L)
	            .contentType(MediaType.APPLICATION_JSON)
	            .content(new ObjectMapper().writeValueAsString(roomDto)))
	            .andExpect(status().isBadRequest());
	
	}
	
	@Test
	void updateRoom_ShouldReturnNotFound_WhenHotelDoesNotExist() throws Exception {
	    // Arrange
	    RoomResponseDTO roomDto = new RoomResponseDTO();
	    roomDto.setHotelId(999L); // Non-existent hotel ID

	    when(hotelService.getEntityById(999L)).thenReturn(null);

	    // Act & Assert
	    mockMvc.perform(put("/api/room/{id}", 1L)
	            .contentType(MediaType.APPLICATION_JSON)
	            .content(new ObjectMapper().writeValueAsString(roomDto)))
	            .andExpect(status().isNotFound())
	            .andExpect(jsonPath("$.message").value("Hotel not found."));
	}
	
	@Test
	void updateRoom_ShouldReturnBadRequest_WhenRoomDoesNotBelongToHotel() throws Exception {
	    // Arrange
	    RoomResponseDTO roomDto = new RoomResponseDTO();
	    roomDto.setHotelId(2L); // Different hotel ID

	    Room existingRoom = new Room();
	    existingRoom.setHotel(new Hotel()); // Set to a different hotel
	    existingRoom.getHotel().setId(1L); // Existing hotel ID

	    when(roomService.getEntityById(1L)).thenReturn(existingRoom);
	    when(hotelService.getEntityById(2L)).thenReturn(new Hotel());

	    // Act & Assert
	    mockMvc.perform(put("/api/room/{id}", 1L)
	            .contentType(MediaType.APPLICATION_JSON)
	            .content(new ObjectMapper().writeValueAsString(roomDto)))
	            .andExpect(status().isBadRequest())
	            .andExpect(jsonPath("$.message").value("The selected room does not belong to this hotel."));
	}



	@Test
	void updateRoom_ShouldReturnSuccess_WhenRoomIsUpdated() throws Exception {
	    // Arrange
	    RoomResponseDTO roomDto = new RoomResponseDTO();
	    roomDto.setHotelId(1L); // Existing hotel ID
	    roomDto.setOccupancy("Available");
	    roomDto.setPrice(new BigDecimal(100));
	    roomDto.setRoomType("Suite");

	    Room existingRoom = new Room();
	    existingRoom.setHotel(new Hotel());
	    existingRoom.getHotel().setId(1L); // Same hotel ID

	    when(roomService.getEntityById(1L)).thenReturn(existingRoom);
	    when(hotelService.getEntityById(1L)).thenReturn(new Hotel()); // Return existing hotel

	    // Act & Assert
	    mockMvc.perform(put("/api/room/{id}", 1L)
	            .contentType(MediaType.APPLICATION_JSON)
	            .content(new ObjectMapper().writeValueAsString(roomDto)))
	            .andExpect(status().isOk())
	            .andExpect(jsonPath("$.message").value("Room updated successfully"));
	}


}