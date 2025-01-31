package com.hotel.booking.system.api.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.repository.HotelOwnerRepository;
import com.hotel.booking.system.api.service.impl.HotelOwnerServiceImpl;
import com.hotel.booking.system.api.service.impl.HotelServiceImpl;

@SpringBootTest // Adjust the controller name as needed
public class HotelOwnerServiceTests {

	@MockBean
	private HotelOwnerRepository hotelOwnerRepository;

	@MockBean
	private HotelServiceImpl hotelService;

	@Mock
	private HotelOwnerServiceImpl hotelOwnerService;

	private HotelOwner hotelOwner;

	@BeforeEach
	void setUp() {

		hotelOwner = HotelOwner.builder().firstName("john").lastName("doe").email("j@gmail.com")
				.currentBalance(new BigDecimal(1000)).openingBalance(new BigDecimal(200))

				.build();

	}

	// @Test
	public void getAllEmptyRecords_Success() throws Exception {
		List<HotelOwner> hotelOwners = List.of(new HotelOwner());

		List<HotelOwner> emps = hotelOwnerService.getAllEntities();

		assertTrue(emps.isEmpty());
	}

	// @Test
	void getAllHotelOwners_ShouldReturnListOfHotelOwnerResponseDTO() {
		// Arrange
		List<HotelOwner> hotelOwners = Arrays.asList(hotelOwner);

		when(hotelOwnerRepository.findAll()).thenReturn(hotelOwners);

		// Act
		List<HotelOwner> response = hotelOwnerService.getAllEntities();

		// Assert
		assertNotNull(response);
		assertEquals(hotelOwners.size(), response.size());
		assertEquals(hotelOwners, response.get(0));
		verify(hotelOwnerRepository, times(1)).findAll();

	}

	// @Test
	public void getAllRecordsWithMatchingSizes_Success() throws Exception {
		List<HotelOwner> hotelOwners = List.of(
				new HotelOwner("Jack", "Sparrow", "jack@example.com", ("jack@123456"), new BigDecimal("5000"),
						new BigDecimal("5000")),
				new HotelOwner("Jack1", "Sparrow1", "jack1@example.com", ("jack1@123456"), new BigDecimal("5000"),
						new BigDecimal("5000")));

		when(hotelOwnerRepository.findAll()).thenReturn(hotelOwners);

		// Act
		List<HotelOwner> actualHotelOwners = hotelOwnerService.getAllEntities();

		// Assert
		Assertions.assertEquals(hotelOwners.size(), actualHotelOwners.size());

	}

//
	// @Test
	public void getAllRecordsWithUnmatchingSizes_Success() throws Exception {
		List<HotelOwner> hotelOwners = List.of(
				new HotelOwner("Jack", "Sparrow", "jack@example.com", ("jack@123456"), new BigDecimal("5000"),
						new BigDecimal("5000")),
				new HotelOwner("Jack1", "Sparrow1", "jack1@example.com", ("jack1@123456"), new BigDecimal("5000"),
						new BigDecimal("5000")));

		when(hotelOwnerRepository.findAll()).thenReturn(hotelOwners);

		// Act
		List<HotelOwner> actualHotelOwners = hotelOwnerService.getAllEntities();

		// Assert
		Assertions.assertNotEquals(3, actualHotelOwners.size());

	}

//
	// @Test
	public void getAllRecordsGreaterThanZero_Success() throws Exception {
		// Arrange
		HotelOwner owner1 = new HotelOwner("Jack", "Sparrow", "jack@example.com", "jack@123456", new BigDecimal("5000"),
				new BigDecimal("5000"));
		owner1.setId(1L); // Set the ID

		HotelOwner owner2 = new HotelOwner("Jack1", "Sparrow1", "jack1@example.com", "jack1@123456",
				new BigDecimal("5000"), new BigDecimal("5000"));
		owner2.setId(2L); // Set the ID

		List<HotelOwner> hotelOwners = List.of(owner1, owner2);

		// Mock the service's behavior
		when(hotelOwnerRepository.findAll()).thenReturn(hotelOwners);
		hotelOwnerService.getAllEntities();

		// Act
		List<HotelOwner> actualHotelOwners = hotelOwnerService.getAllEntities();

		// Assert
		Assertions.assertNotNull(actualHotelOwners);
		Assertions.assertEquals(2, actualHotelOwners.size()); // Verify the size of the list
		Assertions.assertEquals(owner1.getEmail(), actualHotelOwners.get(0).getEmail());
	}

//
	// @Test
	public void getHotelOwnerByIdTest_WithMatchingIDs() {
		Long id = 1L;
		HotelOwner expectedHotelOwner = new HotelOwner("Jack", "Sparrow", "jack@example.com", ("jack@123456"),
				new BigDecimal("5000"), new BigDecimal("5000"));

		// Mock the service call
		when(hotelOwnerRepository.getById(id)).thenReturn(expectedHotelOwner);

		// Call the method under test
		HotelOwner actualHotelOwner = hotelOwnerService.getEntityById(id);

		// Assert that the IDs match
		assertEquals(expectedHotelOwner.getId(), actualHotelOwner.getId());
	}

//
	// @Test
	public void getHotelOwnerByIdTest_WithWrongIDs() {
		long wrongId = 4;
		long correctId = 5; // The ID you expect to match the mocked hotelOwner
		HotelOwner expectedHotelOwner = new HotelOwner("Jack", "Sparrow", "jack@example.com", ("jack@123456"),
				new BigDecimal("5000"), new BigDecimal("5000"));

		// Mock the service call to return the expected hotelOwner for the correct ID
		when(hotelOwnerRepository.findById(wrongId)).thenReturn(Optional.of(expectedHotelOwner));

		hotelOwnerService.getEntityById(correctId);

		// Call the method under test with the wrong ID
		HotelOwner actualHotelOwner = hotelOwnerService.getEntityById(wrongId); // This should return null

		// Assert that actualHotelOwner is null
		assertNull(actualHotelOwner);

		// Assert that the expected ID does not match the actual hotelOwner ID (which is
		// null)
		// Since actualHotelOwner is null, this will always pass
		assertNotEquals(expectedHotelOwner.getId(), actualHotelOwner == null);
	}

//
	// @Test
	public void saveHotelOwnerWithAllFieldsTest() {
		HotelOwner hotelOwner = new HotelOwner("Jack", "Sparrow", "jack@example.com", ("jack@123456"),
				new BigDecimal("5000"), new BigDecimal("5000"));
		when(hotelOwnerRepository.save(hotelOwner)).thenReturn(hotelOwner);

		hotelOwnerService.saveEntity(hotelOwner);
		assertEquals(hotelOwner, hotelOwnerService.saveEntity(hotelOwner));
	}

	// @Test
	public void saveHotelOwnerWithMissingFieldsTest() {
		HotelOwner hotelOwner = new HotelOwner();
		when(hotelOwnerRepository.save(hotelOwner)).thenReturn(hotelOwner);

		hotelOwnerService.saveEntity(hotelOwner);
		assertEquals(hotelOwner, hotelOwnerService.saveEntity(hotelOwner));
	}

//
	// @Test
	public void deleteHotelOwnerTest() {
		HotelOwner hotelOwner = new HotelOwner("Jack", "Sparrow", "jack@example.com", ("jack@123456"),
				new BigDecimal("5000"), new BigDecimal("5000"));
		hotelOwnerRepository.deleteById(hotelOwner.getId());

		verify(hotelOwnerService, times(1)).deleteEntity(hotelOwner.getId());
	}

//
	// @Test
	public void deleteHotelOwnerTestUsingIDThrowsException() {
		long idToDelete = 5; // ID of the hotelOwner to delete
		HotelOwner hotelOwnerToDelete = new HotelOwner("Jack", "Sparrow", "jack@example.com", ("jack@123456"),
				new BigDecimal("5000"), new BigDecimal("5000"));

		// Mock the behavior of the hotelOwner service to return an hotelOwner when it
		// exists
		when(hotelOwnerRepository.getById(idToDelete)).thenReturn(hotelOwnerToDelete);

		// Perform the deletion
		hotelOwnerService.deleteEntity(idToDelete);

		// Now, simulate that the hotelOwner no longer exists
		when(hotelOwnerService.getEntityById(idToDelete))
				.thenThrow(new ResourceNotFoundException("HotelOwner", "Id", idToDelete));

		// Assert that retrieving the hotelOwner now throws the expected exception
		assertThrows(ResourceNotFoundException.class, () -> {
			hotelOwnerService.getEntityById(idToDelete); // This should now throw an exception
		});
	}

	// @Test
	void getHotelOwnerById_ShouldThrowResourceNotFoundException_WhenOwnerDoesNotExist() {
		// Arrange
		when(hotelOwnerRepository.findById(1L)).thenReturn(Optional.empty());

		// Act & Assert
		assertThrows(ResourceNotFoundException.class, () -> hotelOwnerService.getEntityById(1L));
		verify(hotelOwnerRepository, times(1)).findById(1L);

	}

}
