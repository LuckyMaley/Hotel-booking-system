package com.hotel.booking.system.api.controller;

import static org.hamcrest.CoreMatchers.equalTo;
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

import org.junit.jupiter.api.AfterEach;
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
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.repository.HotelOwnerRepository;
import com.hotel.booking.system.api.security.config.JwtService;
import com.hotel.booking.system.api.security.user.ApplicationUser;
import com.hotel.booking.system.api.security.user.ApplicationUserRole;
import com.hotel.booking.system.api.service.impl.HotelOwnerServiceImpl;

@WebMvcTest(HotelOwnerController.class)
public class HotelOwnerControllerIntergrationTests {
	@Autowired
	private MockMvc mockMvc;

	@InjectMocks
	private HotelOwnerController hotelOwnerController;

	private List<HotelOwner> hotelOwners;

	@MockBean
	private HotelOwnerServiceImpl hotelOwnerService;

	@Autowired
	private ObjectMapper objectMapper;

	@Mock
	private HotelOwnerRepository hotelOwnerRepository;

	@MockBean
	private JwtService jwtService;

	@Autowired
	@MockBean
	private PasswordEncoder passwordEncoder;

	private String mockJwtToken;
	private HotelOwner hotelOwner;

	@BeforeEach
	public void setup() {

		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(hotelOwnerController).build();

		// Initialize a sample list of HotelOwners
		HotelOwner owner1 = new HotelOwner();
		owner1.setId(1L);
		owner1.setFirstName("John");
		owner1.setLastName("Doe");

		HotelOwner owner2 = new HotelOwner();
		owner2.setId(2L);
		owner2.setFirstName("Jane");
		owner2.setLastName("Smith");

		hotelOwners = Arrays.asList(owner1, owner2);

		hotelOwner = new HotelOwner();
		hotelOwner.setId(1);
		hotelOwner.setFirstName("John");
		hotelOwner.setLastName("Doe");
		hotelOwner.setPassword("john123456");
		hotelOwner.setEmail("johndoe@msn.com");
		hotelOwner.setOpeningBalance(new BigDecimal(1000));
		hotelOwner.setCurrentBalance(new BigDecimal(1000));

		// Create a test user
		ApplicationUser user = new ApplicationUser("John", "Doe", "john.doe@example.com", "0713456789",
				passwordEncoder.encode("password"), "Kroonstad", "SouthAfrica", "3900", "Kert Street",
				ApplicationUserRole.OWNER);

		// Define a fixed JWT token
		mockJwtToken = "test-token";

		// Configure the JwtService mock
		when(jwtService.generateToken(any(ApplicationUser.class))).thenReturn(mockJwtToken);
		when(jwtService.isTokenValid(eq(mockJwtToken), any(ApplicationUser.class))).thenReturn(true);
		when(jwtService.extractUsername(eq(mockJwtToken))).thenReturn("john.doe@example.com");
	}

	// Pass
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	void getAllHotelOwners_ShouldReturnListOfHotelOwners() throws Exception {
		// Arrange
		when(hotelOwnerService.getAllEntities()).thenReturn(hotelOwners);

		// Act & Assert
		mockMvc.perform(get("/api/public/hotelOwners").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk()).andExpect(jsonPath("$[0].firstName").value("John"))
				.andExpect(jsonPath("$[1].firstName").value("Jane")).andExpect(jsonPath("$[0].lastName").value("Doe"))
				.andExpect(jsonPath("$[1].lastName").value("Smith"));

		verify(hotelOwnerService, times(1)).getAllEntities(); // Verify that the service method was called once
	}

	// Pass
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	void givenHotelOwner_whenAddHotelOwner_thenReturnHotelOwner() throws JsonProcessingException, Exception {
		//@formatter:off
		//arrange

		hotelOwner = new HotelOwner();
		hotelOwner.setId(1);
		hotelOwner.setFirstName("J");
		hotelOwner.setLastName("D");
		hotelOwner.setPassword("john123456");
		hotelOwner.setEmail("johndoe@msn.com");
		hotelOwner.setOpeningBalance(new BigDecimal(1000));
		hotelOwner.setCurrentBalance(new BigDecimal(1000));

	    when(hotelOwnerService.saveEntity(hotelOwner)).thenReturn(hotelOwner);
		
		mockMvc.perform(
					post("/api/hotelOwner")
					.header("Authorization", "Bearer " + mockJwtToken)
					.content(objectMapper.writeValueAsString(hotelOwner))
					.contentType(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("$.hotelOwner.firstName").value("J"))
			.andExpect(jsonPath("$.hotelOwner.lastName").value("D"))
	        .andExpect(jsonPath("$.hotelOwner.email").value("johndoe@msn.com"))
	        .andExpect(jsonPath("$.hotelOwner.password").value("john123456"))
	        .andExpect(jsonPath("$.hotelOwner.openingBalance").value(hotelOwner.getOpeningBalance().intValue()))
	        .andExpect(jsonPath("$.hotelOwner.currentBalance").value(hotelOwner.getCurrentBalance().intValue()))
	        .andExpect(jsonPath("$.message").value("HotelOwner saved successfully"))
			.andExpect(status().isCreated())
			.andDo(print());
		
		verify(hotelOwnerService, times(1)).saveEntity(hotelOwner);
		//formatter:on
	}
	
	
	
	@Test
	public void getHotelById_InternalServerError_ReturnsErrorMessage() throws Exception {
		// Arrange
		long hotelOwnerId = 1L;
		when(hotelOwnerService.getEntityById(hotelOwnerId)).thenThrow(new RuntimeException("Something went wrong"));

		// Act & Assert
		mockMvc.perform(get("/api/public/hotelOwners/{id}", hotelOwnerId)).andExpect(status().isInternalServerError())
				.andExpect(jsonPath("$.error").value("Something went wrong")).andDo(print());
	}
	
 		@Test
		@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
		void givenHotelOwner_whenAddHotelOwnerWithMissingFields_thenReturnBadRequest() throws JsonProcessingException, Exception {
			//@formatter:off
			//arrange

			hotelOwner = new HotelOwner();
			hotelOwner.setId(1);
			hotelOwner.setFirstName(null);
			hotelOwner.setLastName("D");
			hotelOwner.setPassword("john123456");
			hotelOwner.setEmail(null);
			hotelOwner.setOpeningBalance(new BigDecimal(1000));
			hotelOwner.setCurrentBalance(new BigDecimal(1000));

		    when(hotelOwnerService.saveEntity(hotelOwner)).thenReturn(hotelOwner);
			
			mockMvc.perform(
						post("/api/hotelOwner")
						.header("Authorization", "Bearer " + mockJwtToken)
						.content(objectMapper.writeValueAsString(hotelOwner))
						.contentType(MediaType.APPLICATION_JSON))
		        .andExpect(jsonPath("$.message").value("HotelOwner name,lastname, email, and password cannot be null"))
				.andExpect(status().isBadRequest())
				.andDo(print());
			
	
			//formatter:on
		}
    //Pass	
    @Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	public void givenHotelOwnerList_whenFindAllHotelOwners_thenReturnListofHotelOwnerFromDB() throws JsonProcessingException, Exception {
		List<HotelOwner> hotelOwners = List.of(hotelOwner);
		when(hotelOwnerService.getAllEntities()).thenReturn(hotelOwners);

		
		mockMvc.perform(
				get("/api/public/hotelOwners")
				.header("Authorization", "Bearer " + mockJwtToken)
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON))
		.andDo(print())
	//	.andExpect(jsonPath("$.length()", equalTo(1)))
		.andExpect(jsonPath("$[0].firstName", equalTo("John")))
		.andExpect(status().isOk());
		
		verify(hotelOwnerService, times(1)).getAllEntities();
	}
	
	//Pass
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	void deleteHotelOwner_ShouldReturnIsOK() throws Exception {
		
		//Arrange
		HotelOwner owner = new HotelOwner();
		owner.setId(1L);
		owner.setFirstName("J");
		owner.setLastName("Smith");
		// Act & Assert
		
		
		when(hotelOwnerService.getEntityById(1L)).thenReturn(owner);
		
		mockMvc.perform(delete("/api/hotelOwner/{id}", 1L) // Non-existent ID
				.header("Authorization", "Bearer " + mockJwtToken).contentType(MediaType.APPLICATION_JSON))
				.andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$.message").value("HotelOwner J Smith deleted successfully"));
	}
	
	@Test
	@WithMockUser(username = "john.doe@example.com", roles = { "OWNER" })
	void deleteHotelOwner_ShouldReturnIsNotFound() throws Exception {
		
		//Arrange
		// Act & Assert
		
		
		when(hotelOwnerService.getEntityById(999L)).thenThrow(new ResourceNotFoundException("HotelOwner", "Id", 999L));
		
		mockMvc.perform(delete("/api/hotelOwner/{id}", 999L) // Non-existent ID
				.header("Authorization", "Bearer " + mockJwtToken).contentType(MediaType.APPLICATION_JSON))
				.andDo(print()).andExpect(status().isNotFound())
				.andExpect(jsonPath("$.message").value("HotelOwner not found with Id : '999'"));
	}
	
    //Pass	
	@Test
	public void givenID1_whenHotelOWNER_thenReturnsIsOK() throws Exception {
		Long hotelOwnerId = 1L;
		given(hotelOwnerService.getEntityById(hotelOwnerId)).willReturn(hotelOwner);
		
		mockMvc.perform(
				get("/api/public/hotelOwners/{Id}", hotelOwner.getId())
				.contentType(MediaType.APPLICATION_JSON)
				.accept(MediaType.APPLICATION_JSON))
		.andDo(print())
		   .andExpect(jsonPath("$.HotelOwner.firstName").value("John")) // Updated path
		    .andExpect(jsonPath("$.HotelOwner.lastName").value("Doe"))
		.andExpect(status().isOk());
	}
	
	
	
	//Pass
    @Test
    void getHotelOwnerById_ShouldReturnNotFound() throws Exception {
        // Act & Assert
    	when(hotelOwnerService.getEntityById(122L)).thenThrow(new ResourceNotFoundException("HotelOwner", "Id", 122L)); 
    	
        mockMvc.perform(get("/api/public/hotelOwners/{id}", 122L)
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.message").value("HotelOwner not found with Id : '122'"));
    }
    
    //Pass
    @Test
    @WithMockUser(username = "john.doe@example.com", roles = {"OWNER"})
    void updateHotelOwner_ShouldReturnUpdatedHotelOwner() throws Exception {
    	
    	hotelOwner = new HotelOwner();
		hotelOwner.setId(1L);
		hotelOwner.setFirstName("John");
		hotelOwner.setLastName("Doe");
		hotelOwner.setPassword("john123456");
		hotelOwner.setEmail("johndoe@msn.com");
		hotelOwner.setOpeningBalance(new BigDecimal(1000));
		hotelOwner.setCurrentBalance(new BigDecimal(1000));
    	
    //	when(hotelOwnerService.updateEntity(hotelOwner, hotelOwner.getId());
    			
    	
    	HotelOwner updatedHotelOwner = new HotelOwner(); 
    	updatedHotelOwner.setId(1L);
    	updatedHotelOwner.setFirstName("J");
    	updatedHotelOwner.setLastName("D");
    	updatedHotelOwner.setPassword("john123456");
    	updatedHotelOwner.setEmail("johndoe@msn.com");
    	updatedHotelOwner.setOpeningBalance(new BigDecimal(1000));
    	updatedHotelOwner.setCurrentBalance(new BigDecimal(1000));
    	
    	when(hotelOwnerService.updateEntity(hotelOwner, hotelOwner.getId())).thenReturn(updatedHotelOwner); 
    	
    	// Act & AssertcreatedOwner
        mockMvc.perform(put("/api/hotelOwner/{id}", 1L)
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedHotelOwner)))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.HotelOwner.firstName").value(updatedHotelOwner.getFirstName()))
                .andExpect(jsonPath("$.HotelOwner.lastName").value(updatedHotelOwner.getLastName()))
                .andExpect(jsonPath("$.message").value("HotelOwner updated successfully"));
    }
    
    //Pass
    @Test
    @WithMockUser(username = "john.doe@example.com", roles = {"OWNER"})
    void updateHotelOwner_ShouldReturnBadRequest() throws Exception {
    	
    	hotelOwner = new HotelOwner();
		
    	when(hotelOwnerService.updateEntity(hotelOwner, hotelOwner.getId())).thenReturn(null); 
    	
    	// Act & AssertcreatedOwner
        mockMvc.perform(put("/api/hotelOwner/{id}", 0)
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(null)))
                .andDo(print())
                .andExpect(status().isBadRequest());
               // .andExpect(jsonPath("$.message").value("ID not detected or Body is hotelOwnerty"));
    }
    
    //Pass
    @Test
    @WithMockUser(username = "john.doe@example.com", roles = {"OWNER"})
    void updateHotelOwner_ShouldReturnBadRequest_HotelOwnerIDsDoNotMatch() throws Exception {
    	
    	hotelOwner = new HotelOwner();
		hotelOwner.setId(1L);
		hotelOwner.setFirstName("John");
		hotelOwner.setLastName("Doe");
		hotelOwner.setPassword("john123456");
		hotelOwner.setEmail("johndoe@msn.com");
		hotelOwner.setOpeningBalance(new BigDecimal(1000));
		hotelOwner.setCurrentBalance(new BigDecimal(1000));
    	
    //	when(hotelOwnerService.updateEntity(hotelOwner, hotelOwner.getId());
    			
    	
    	HotelOwner updatedHotelOwner = new HotelOwner(); 
    	updatedHotelOwner.setId(1L);
    	updatedHotelOwner.setFirstName("J");
    	updatedHotelOwner.setLastName("D");
    	updatedHotelOwner.setPassword("john123456");
    	updatedHotelOwner.setEmail("johndoe@msn.com");
    	updatedHotelOwner.setOpeningBalance(new BigDecimal(1000));
    	updatedHotelOwner.setCurrentBalance(new BigDecimal(1000));
    	
    	when(hotelOwnerService.updateEntity(hotelOwner, hotelOwner.getId())).thenReturn(updatedHotelOwner); 
    	
    	// Act & AssertcreatedOwner
        mockMvc.perform(put("/api/hotelOwner/{id}", 2L)
                .header("Authorization", "Bearer " + mockJwtToken)
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updatedHotelOwner)))
                .andDo(print())
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.Error").value("HotelOwner IDs do not match"));
    }
	
	@AfterEach
	public void tearDown() {
		//hotelOwner = null;
	}

}
