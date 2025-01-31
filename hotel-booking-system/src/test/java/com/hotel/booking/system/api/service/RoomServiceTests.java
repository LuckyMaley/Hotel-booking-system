package com.hotel.booking.system.api.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.Room;
import com.hotel.booking.system.api.repository.RoomRepository;
import com.hotel.booking.system.api.service.impl.HotelServiceImpl;
import com.hotel.booking.system.api.service.impl.RoomServiceImpl;

@SpringBootTest
// Adjust the controller name as needed
public class RoomServiceTests {

	@MockBean
	private RoomRepository roomRepository;

	@MockBean
	private HotelServiceImpl hotelService;

	@Autowired
	private RoomServiceImpl roomService;

	private Hotel hotel;
	private Room room;

	@BeforeEach
	public void setup() {
		// Initialize a hotel object for testing
		hotel = new Hotel();
		hotel.setId(1L); // Set a dummy ID
		hotel.setName("Test Hotel");

		room = new Room();
		room.setId(1L); // Set a dummy ID
		room.setRoomType("Test Hotel");
		// Add other properties as needed

	}

	@Test
	public void getAllEmptyRecords_Success() throws Exception {
		List<Room> rooms = List.of(new Room());

		List<Room> emps = roomService.getAllEntities();

		assertTrue(emps.isEmpty());
	}

	@Test
	public void getAllRecordsWithMatchingSizes_Success() throws Exception {

		// Arrange
		List<Room> rooms = List.of(new Room(hotel, "Test1", new BigDecimal(100), "Test1"),
				new Room(hotel, "Test2", new BigDecimal(500), "Test2"));

		when(roomRepository.findAll()).thenReturn(rooms);

		// Act
		List<Room> actualRooms = roomService.getAllEntities();

		// Assert
		Assertions.assertEquals(rooms.size(), actualRooms.size());

	}

	@Test
	public void getAllRecordsWithUnmatchingSizes_Success() throws Exception {
		List<Room> rooms = List.of(new Room(hotel, "Test1", new BigDecimal(100), "Test1"),
				new Room(hotel, "Test2", new BigDecimal(500), "Test2"));

		// Act

		when(roomRepository.findAll()).thenReturn(rooms);

		List<Room> actualRooms = roomService.getAllEntities();

		// Assert
		Assertions.assertNotEquals(3, actualRooms.size());

	}

//
	@Test
	public void getAllRecordsGreaterThanZero_Success() throws Exception {
		List<Room> rooms = List.of(new Room(hotel, "Test1", new BigDecimal(100), "Test1"),
				new Room(hotel, "Test2", new BigDecimal(500), "Test2"));
		when(roomRepository.findAll()).thenReturn(rooms);

		// Act
		List<Room> actualRooms = roomService.getAllEntities();

		// Assert
		Assertions.assertTrue(actualRooms.size() > 0);

	}

//
	@Test
	public void getRoomByIdTest_WithMatchingIDs() {
		long id = 1;
		Room expectedRoom = new Room(hotel, "Test2", new BigDecimal(500), "Test2");

		// Mock the service call
		when(roomRepository.findById(id)).thenReturn(Optional.of(expectedRoom));
		// when(roomService.getEntityById(id)).thenReturn(expectedRoom);

		// Call the method under test
		Room actualRoom = roomService.getEntityById(id);

		// Assert that the IDs match
		assertEquals(expectedRoom.getId(), actualRoom.getId());
	}

	@Test
	void getRoomById_ShouldReturnRoomResponseDTO() {
		// Arrange
		when(roomRepository.findById(1L)).thenReturn(Optional.of(room));

		// Act
		Room response = roomService.getEntityById(1L);

		// Assert
		assertNotNull(response);
		assertEquals(room, response);
		verify(roomRepository, times(1)).findById(1L);

	}

//
	@Test
	public void saveRoomWithAllFieldsTest() {
		Room room = new Room(hotel, "Test2", new BigDecimal(500), "Test2");

		when(roomRepository.save(room)).thenReturn(room);
		when(roomService.saveEntity(room)).thenReturn(room);
		assertEquals(room, roomService.saveEntity(room));
	}

	@Test
	public void saveRoomWithMissingFieldsTest() {
		Room room = new Room();
		when(roomService.saveEntity(room)).thenReturn(room);
		assertEquals(room, roomService.saveEntity(room));
	}

	@Test
	void deleteRoom_ShouldDeleteSuccessfully() {
		// Arrange
		room.setId(1L);
		when(roomRepository.findById(1L)).thenReturn(Optional.of(room));
		doNothing().when(roomRepository).deleteById(1L);

		// Act
		roomService.deleteEntity(1L);

		// Assert
		verify(roomRepository, times(1)).deleteById(1L);
	}

	@Test
	void deleteRoom_ShouldThrowResourceNotFoundException_WhenRoomDoesNotExist() {
		// Arrange
		when(roomRepository.findById(1L)).thenReturn(Optional.empty());

		// Act & Assert
		assertThrows(ResourceNotFoundException.class, () -> roomService.deleteEntity(1L));
		verify(roomRepository, times(1)).findById(1L);
		verify(roomRepository, never()).delete(any());
	}

//
	@Test
	public void deleteRoomTestUsingIDThrowsException() {
		long idToDelete = 5; // ID of the room to delete
		Room roomToDelete = new Room(hotel, "Test2", new BigDecimal(500), "Test2");

		// Mock the behavior of the room service to return an room when it
		// exists
		when(roomRepository.findById(idToDelete)).thenReturn(Optional.of(roomToDelete));
		// when(roomService.getEntityById(idToDelete)).thenReturn(roomToDelete);

		// Perform the deletion
		roomService.deleteEntity(idToDelete);

		// Now, simulate that the room no longer exists
		when(roomService.getEntityById(idToDelete)).thenThrow(new ResourceNotFoundException("Room", "Id", idToDelete));

		// Assert that retrieving the room now throws the expected exception
		assertThrows(ResourceNotFoundException.class, () -> {
			roomService.getEntityById(idToDelete); // This should now throw an exception
		});
	}

	@Test
	void getRoomById_ShouldThrowResourceNotFoundException_WhenRoomDoesNotExist() {
		// Arrange
		when(roomRepository.findById(1L)).thenReturn(Optional.empty());

		// Act & Assert
		assertThrows(ResourceNotFoundException.class, () -> roomService.getEntityById(1L));
		verify(roomRepository, times(1)).findById(1L);

	}

}
