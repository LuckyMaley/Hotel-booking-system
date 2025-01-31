package com.hotel.booking.system.api.repository;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.math.BigDecimal;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.Properties;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;


import com.hotel.booking.system.api.model.Administrator;
import com.hotel.booking.system.api.model.Booking;
import com.hotel.booking.system.api.model.Card;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.model.GlobalCharges;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.HotelOwner;
import com.hotel.booking.system.api.model.Payment;
import com.hotel.booking.system.api.model.Review;
import com.hotel.booking.system.api.model.Room;
import com.hotel.booking.system.api.model.SpecialOffer;

@DataJpaTest
@ActiveProfiles("test")
public class RepositoryH2DBTests {
	@Autowired
    private CustomerRepository customerRepository;
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private HotelOwnerRepository hotelOwnerRepository;

    @Autowired
    private SpecialOfferRepository specialOfferRepository;

    @Autowired
    private AdministratorRepository administratorRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private GlobalChargesRepository globalChargesRepository;	
    
    @BeforeEach
    public void setUp() {
    }
	
    @Test
    public void differentCredentials() {
        Assertions.assertDoesNotThrow(() -> connect("jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1", "sa", ""));
        assertThrows(SQLException.class, () -> connect("jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1", "bar", ""));
    }
    private void connect(
            String url, String username, String password
    ) throws SQLException {
        Properties props = new Properties();
        props.put("user", username);
        props.put("password", password);
        DriverManager.getConnection(url, props);
    }
    
    @Test
    public void testCustomerRepository() {
        Customer customer = new Customer();
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setUserName("johndoe21");
        customer.setEmail("johndoe21@example.com");
        customer.setAddress("34 address");
        customer.setCity("PMB");
        customer.setCountry("South Africa");
        customer.setPostalCode("4543");
        customer.setPhoneNumber("09434343443");
        customerRepository.save(customer);

        long count = customerRepository.count();
        assertEquals(3, count);
    }
    
    @Test
    public void testBookingRepository() {
    	Customer customer = new Customer();
    	customer.setId(1);
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setUserName("johndoe21");
        customer.setEmail("johndoe21@example.com");
        HotelOwner hotelOwner = new HotelOwner();
    	hotelOwner.setId(1);
        hotelOwner.setFirstName("Mr. Owner");
        hotelOwner.setLastName("Owner");
        hotelOwner.setEmail("owner@example.com");
        hotelOwner.setCurrentBalance(new BigDecimal(5000));
        hotelOwner.setOpeningBalance(new BigDecimal(5000));
        hotelOwner.setPassword("1234");
    	Hotel hotel = new Hotel();
    	hotel.setId(1);
        hotel.setName("Wonderland Inn");
        hotel.setAddress("Fantasy Land");
        hotel.setStarRating(5);
        hotel.setHotelOwner(hotelOwner);
        Room room = new Room();
        room.setId(1);
        room.setHotel(hotel);
        room.setOccupancy("Available");
        room.setPrice(new BigDecimal("100.00"));
        Booking booking = new Booking();
        booking.setCustomer(customer);
        booking.setRoom(room); 
        booking.setCheckInDate(LocalDateTime.now());
        booking.setCheckOutDate(LocalDateTime.now().plusDays(5L));
        booking.setTotalPrice(new BigDecimal("200.00"));
        bookingRepository.save(booking);

        long count = bookingRepository.count();
        assertEquals(3, count);
    }

    @Test
    public void testReviewRepository() {
    	Customer customer = new Customer();
    	customer.setId(1);
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setUserName("johndoe21");
        customer.setEmail("johndoe21@example.com");
        HotelOwner hotelOwner = new HotelOwner();
    	hotelOwner.setId(1);
        hotelOwner.setFirstName("Mr. Owner");
        hotelOwner.setLastName("Owner");
        hotelOwner.setEmail("owner@example.com");
        hotelOwner.setCurrentBalance(new BigDecimal(5000));
        hotelOwner.setOpeningBalance(new BigDecimal(5000));
        hotelOwner.setPassword("1234");
    	Hotel hotel = new Hotel();
    	hotel.setId(1);
        hotel.setName("Wonderland Inn");
        hotel.setAddress("Fantasy Land");
        hotel.setStarRating(5);
        hotel.setHotelOwner(hotelOwner);
        Review review = new Review();
        review.setCustomer(customer);
        review.setHotel(hotel);
        review.setTitle("Amazing");
        review.setRating(5);
        review.setComment("Amazing stay!");
        reviewRepository.save(review);

        long count = reviewRepository.count();
        assertEquals(3, count);
    }

    @Test
    public void testHotelRepository() {
    	HotelOwner hotelOwner = new HotelOwner();
    	hotelOwner.setId(1);
        hotelOwner.setFirstName("Mr. Owner");
        hotelOwner.setLastName("Owner");
        hotelOwner.setEmail("owner@example.com");
        hotelOwner.setCurrentBalance(new BigDecimal(5000));
        hotelOwner.setOpeningBalance(new BigDecimal(5000));
        hotelOwner.setPassword("1234");
    	Hotel hotel = new Hotel();
    	hotel.setId(3);
        hotel.setName("Wonderland Inn");
        hotel.setAddress("Fantasy Land");
        hotel.setCity("New York City");
        hotel.setStarRating(5);
        hotel.setHotelOwner(hotelOwner);
        hotelRepository.save(hotel);

        long count = hotelRepository.count();
        assertEquals(3, count);
    }

    @Test
    public void testHotelOwnerRepository() {
    	HotelOwner hotelOwner = new HotelOwner();
        hotelOwner.setFirstName("Mr. Owner");
        hotelOwner.setLastName("Owner");
        hotelOwner.setEmail("owner@example.com");
        hotelOwner.setCurrentBalance(new BigDecimal(5000));
        hotelOwner.setOpeningBalance(new BigDecimal(5000));
        hotelOwner.setPassword("1234");
        hotelOwnerRepository.save(hotelOwner);

        long count = hotelOwnerRepository.count();
        assertEquals(3, count);
    }

    @Test
    public void testSpecialOfferRepository() {
    	HotelOwner hotelOwner = new HotelOwner();
    	hotelOwner.setId(1);
        hotelOwner.setFirstName("Mr. Owner");
        hotelOwner.setLastName("Owner");
        hotelOwner.setEmail("owner@example.com");
        hotelOwner.setCurrentBalance(new BigDecimal(5000));
        hotelOwner.setOpeningBalance(new BigDecimal(5000));
        hotelOwner.setPassword("1234");
    	Hotel hotel = new Hotel();
    	hotel.setId(1);
        hotel.setName("Wonderland Inn");
        hotel.setAddress("Fantasy Land");
        hotel.setStarRating(5);
        hotel.setHotelOwner(hotelOwner);
        SpecialOffer specialOffer = new SpecialOffer();
        specialOffer.setDiscountPercentage(new BigDecimal("20"));
        specialOffer.setHotel(hotel);
        specialOfferRepository.save(specialOffer);

        long count = specialOfferRepository.count();
        assertEquals(3, count); 
    }

    @Test
    public void testAdministratorRepository() {
        Administrator administrator = new Administrator();
        administrator.setFirstName("Admin");
        administrator.setLastName("User");
        administrator.setEmail("admin@example.com");
        administrator.setPassword("adminpass");
        administratorRepository.save(administrator);

        long count = administratorRepository.count();
        assertEquals(3, count);
    }

    @Test
    public void testPaymentRepository() {
    	Customer customer = new Customer();
    	customer.setId(1);
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setUserName("johndoe21");
        customer.setEmail("johndoe21@example.com");
        HotelOwner hotelOwner = new HotelOwner();
    	hotelOwner.setId(1);
        hotelOwner.setFirstName("Mr. Owner");
        hotelOwner.setLastName("Owner");
        hotelOwner.setEmail("owner@example.com");
        hotelOwner.setCurrentBalance(new BigDecimal(5000));
        hotelOwner.setOpeningBalance(new BigDecimal(5000));
        hotelOwner.setPassword("1234");
    	Hotel hotel = new Hotel();
    	hotel.setId(1);
        hotel.setName("Wonderland Inn");
        hotel.setAddress("Fantasy Land");
        hotel.setStarRating(5);
        hotel.setHotelOwner(hotelOwner);
        Room room = new Room();
        room.setId(1);
        room.setHotel(hotel);
        room.setOccupancy("Available");
        room.setPrice(new BigDecimal("100.00"));
        Booking booking = new Booking();
        booking.setId(1);
        booking.setCustomer(customer);
        booking.setRoom(room); 
        booking.setCheckInDate(LocalDateTime.now());
        booking.setCheckOutDate(LocalDateTime.now().plusDays(5L));
        booking.setTotalPrice(new BigDecimal("200.00"));
        Card card = new Card("Visa","454434534534545", "John", "09", "25", "456", customer);
        card.setId(1);
        Payment payment = new Payment();
        payment.setBooking(booking);
        payment.setPaymentMethod("Card");
        payment.setAmount(new BigDecimal("200.00"));
        payment.setPaymentDate(LocalDateTime.now());
        payment.setTransactionFee(new BigDecimal("20.00"));
        payment.setUpdatedAt(LocalDateTime.now());
        payment.setCard(card);
        paymentRepository.save(payment);

        long count = paymentRepository.count();
        assertEquals(3, count);
    }

    @Test
    public void testRoomRepository() {
    	HotelOwner hotelOwner = new HotelOwner();
    	hotelOwner.setId(1);
        hotelOwner.setFirstName("Mr. Owner");
        hotelOwner.setLastName("Owner");
        hotelOwner.setEmail("owner@example.com");
        hotelOwner.setCurrentBalance(new BigDecimal(5000));
        hotelOwner.setOpeningBalance(new BigDecimal(5000));
        hotelOwner.setPassword("1234");
    	Hotel hotel = new Hotel();
    	hotel.setId(1);
        hotel.setName("Wonderland Inn");
        hotel.setAddress("Fantasy Land");
        hotel.setStarRating(5);
        hotel.setHotelOwner(hotelOwner);
        Room room = new Room();
        room.setHotel(hotel);
        room.setOccupancy("Available");
        room.setPrice(new BigDecimal("100.00"));
        roomRepository.save(room);

        long count = roomRepository.count();
        assertEquals(5, count);
    }

    @Test
    public void testGlobalChargesRepository() {
        GlobalCharges globalCharges = new GlobalCharges();
        globalCharges.setTransactionFeePercentage(new BigDecimal("5"));
        globalCharges.setBaseHotelCharge(new BigDecimal("100"));
        globalCharges.setRoomChargePerMonth(new BigDecimal("10"));
        globalChargesRepository.save(globalCharges);

        long count = globalChargesRepository.count();
        assertEquals(3, count);
    }
}
