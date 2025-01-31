package com.hotel.booking.system.api.migrations;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

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
import com.hotel.booking.system.api.repository.AdministratorRepository;
import com.hotel.booking.system.api.repository.BookingRepository;
import com.hotel.booking.system.api.repository.CardRepository;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.repository.GlobalChargesRepository;
import com.hotel.booking.system.api.repository.HotelOwnerRepository;
import com.hotel.booking.system.api.repository.HotelRepository;
import com.hotel.booking.system.api.repository.PaymentRepository;
import com.hotel.booking.system.api.repository.ReviewRepository;
import com.hotel.booking.system.api.repository.RoomRepository;
import com.hotel.booking.system.api.repository.SpecialOfferRepository;
import com.hotel.booking.system.api.security.user.ApplicationUser;
import com.hotel.booking.system.api.security.user.ApplicationUserRepository;
import com.hotel.booking.system.api.security.user.ApplicationUserRole;
import com.hotel.booking.system.api.utils.ImageUtils;


@Component
@Configuration
@Profile("!test")
public class MigrationDataLoader {
	@Autowired
    private CustomerRepository customerRepository;
	
	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private ApplicationUserRepository applicationUserRepository;

	@Autowired
	private HotelOwnerRepository hotelOwnerRepository;

	@Autowired
	private HotelRepository hotelRepository;

	@Autowired
	private RoomRepository roomRepository;

	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	private ReviewRepository reviewRepository;

	@Autowired
	private AdministratorRepository administratorRepository;
	
	@Autowired
	private PaymentRepository paymentRepository;
	
	@Autowired
	private SpecialOfferRepository specialOfferRepository;
	
	@Autowired
	private GlobalChargesRepository globalChargesRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Bean
    CommandLineRunner initDatabase() {
        return args -> {
            seedCustomersAndCards();
            seedHotelOwnersAndHotels();
            seedRooms();
            seedBookings();
            seedReviews();
            seedAdministrators();
            seedSpecialOffers();
            seedGlobalCharges();
            seedPayments();
        };
    }

    private void seedCustomersAndCards() {
        if (customerRepository.count() == 0) {
            Customer customer1 = new Customer("John", "Doe", "john1@example.com", "john1@example.com", "0816565778", "Durban", "South Africa", "4001", "66 Hanover Road, Durban, 4001");
            Customer customer2 = new Customer("Zack", "Efron", "zack@example.com", "zack@example.com", "0713536675", "Durban", "South Africa", "4306", "45 London Road, Durban, 4306");
            Customer customer3 = new Customer("Alice", "Smith", "alice3@example.com", "alice3@example.com", "0813456789", "Johannesburg", "South Africa", "2001", "12 Hilltop Street, Johannesburg, 2001");
            Customer customer4 = new Customer("Bob", "Johnson", "bob4@example.com", "bob4@example.com", "0832345678", "Cape Town", "South Africa", "8001", "99 Mountain Road, Cape Town, 8001");
            Customer customer5 = new Customer("Charlie", "Brown", "charlie5@example.com", "charlie5@example.com", "0843456789", "Pretoria", "South Africa", "0001", "10 Freedom Way, Pretoria, 0001");
            Customer customer6 = new Customer("David", "White", "david6@example.com", "david6@example.com", "0821234567", "Port Elizabeth", "South Africa", "6001", "23 Waterfront Drive, Port Elizabeth, 6001");
            Customer customer7 = new Customer("Emma", "Stone", "emma7@example.com", "emma7@example.com", "0724567890", "East London", "South Africa", "5201", "44 Ocean Drive, East London, 5201");
            Customer customer8 = new Customer("Frank", "Taylor", "frank8@example.com", "frank8@example.com", "0798765432", "Bloemfontein", "South Africa", "9301", "55 Rose Street, Bloemfontein, 9301");
            Customer customer9 = new Customer("Grace", "Green", "grace9@example.com", "grace9@example.com", "0712345678", "Durban", "South Africa", "4001", "88 Seaside Avenue, Durban, 4001");
            Customer customer10 = new Customer("Hannah", "Blue", "hannah10@example.com", "hannah10@example.com", "0762345678", "Durban", "South Africa", "4001", "77 Skyline Road, Durban, 4001");

            customerRepository.saveAll(List.of(customer1, customer2, customer3, customer4, customer5, customer6, customer7, customer8, customer9, customer10));

            ApplicationUser user1 = new ApplicationUser("John", "Doe", "john1@example.com", "0816475676", passwordEncoder.encode("Lg@123456"), "Durban", "South Africa", "4001", "66 Hanover Road, Durban, 4001", ApplicationUserRole.CUSTOMER);
            ApplicationUser user2 = new ApplicationUser("Zack", "Efron", "zack@example.com", "0823334658", passwordEncoder.encode("Lg@123457"), "Durban", "South Africa", "4306", "45 London Road, Durban, 4306", ApplicationUserRole.CUSTOMER);
            ApplicationUser user3 = new ApplicationUser("Alice", "Smith", "alice3@example.com", "0833456789", passwordEncoder.encode("Lg@123458"), "Johannesburg", "South Africa", "2001", "12 Hilltop Street, Johannesburg, 2001", ApplicationUserRole.CUSTOMER);
            ApplicationUser user4 = new ApplicationUser("Bob", "Johnson", "bob4@example.com", "0842345678", passwordEncoder.encode("Lg@123459"), "Cape Town", "South Africa", "8001", "99 Mountain Road, Cape Town, 8001", ApplicationUserRole.CUSTOMER);
            ApplicationUser user5 = new ApplicationUser("Charlie", "Brown", "charlie5@example.com", "0853456789", passwordEncoder.encode("Lg@123450"), "Pretoria", "South Africa", "0001", "10 Freedom Way, Pretoria, 0001", ApplicationUserRole.CUSTOMER);
            ApplicationUser user6 = new ApplicationUser("David", "White", "david6@example.com", "0861234567", passwordEncoder.encode("Lg@123451"), "Port Elizabeth", "South Africa", "6001", "23 Waterfront Drive, Port Elizabeth, 6001", ApplicationUserRole.CUSTOMER);
            ApplicationUser user7 = new ApplicationUser("Emma", "Stone", "emma7@example.com", "0874567890", passwordEncoder.encode("Lg@123452"), "East London", "South Africa", "5201", "44 Ocean Drive, East London, 5201", ApplicationUserRole.CUSTOMER);
            ApplicationUser user8 = new ApplicationUser("Frank", "Taylor", "frank8@example.com", "0888765432", passwordEncoder.encode("Lg@123453"), "Bloemfontein", "South Africa", "9301", "55 Rose Street, Bloemfontein, 9301", ApplicationUserRole.CUSTOMER);
            ApplicationUser user9 = new ApplicationUser("Grace", "Green", "grace9@example.com", "0892345678", passwordEncoder.encode("Lg@123454"), "Durban", "South Africa", "4001", "88 Seaside Avenue, Durban, 4001", ApplicationUserRole.CUSTOMER);
            ApplicationUser user10 = new ApplicationUser("Hannah", "Blue", "hannah10@example.com", "0802345678", passwordEncoder.encode("Lg@123455"), "Durban", "South Africa", "4001", "77 Skyline Road, Durban, 4001", ApplicationUserRole.CUSTOMER);

            applicationUserRepository.saveAll(List.of(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10));

            Card card1 = new Card("Visa", "454434534534545", "John", "09", "25", "456", customer1);
            Card card2 = new Card("Mastercard", "454434223423435", "Zack", "09", "25", "754", customer2);
            Card card3 = new Card("American Express", "377856789012345", "Alice", "08", "24", "123", customer3);
            Card card4 = new Card("Discover", "6011111111111117", "Bob", "10", "26", "321", customer4);
            Card card5 = new Card("Visa", "4556345678901234", "Charlie", "07", "23", "234", customer5);
            Card card6 = new Card("Mastercard", "5500000000000004", "David", "11", "27", "567", customer6);
            Card card7 = new Card("Visa", "4532767890123456", "Emma", "09", "25", "876", customer7);
            Card card8 = new Card("Visa", "4485040000000000", "Frank", "07", "24", "345", customer8);
            Card card9 = new Card("Visa", "4111111111111111", "Grace", "08", "26", "654", customer9);
            Card card10 = new Card("Mastercard", "5105105105105100", "Hannah", "06", "22", "098", customer10);

            cardRepository.saveAll(List.of(card1, card2, card3, card4, card5, card6, card7, card8, card9, card10));
        }
    }

    private void seedHotelOwnersAndHotels() throws Exception {
        if (hotelOwnerRepository.count() == 0) {
        	HotelOwner owner1 = new HotelOwner("Jack", "Sparrow", "jack@example.com", passwordEncoder.encode("jack@123456"), new BigDecimal("5000"), new BigDecimal("5000"));
            HotelOwner owner2 = new HotelOwner("Laura", "Croft", "laura2@example.com", passwordEncoder.encode("laura@123456"), new BigDecimal("6000"), new BigDecimal("6000"));
            HotelOwner owner3 = new HotelOwner("Bruce", "Wayne", "bruce3@example.com", passwordEncoder.encode("bruce@123456"), new BigDecimal("7000"), new BigDecimal("7000"));
            HotelOwner owner4 = new HotelOwner("Diana", "Prince", "diana4@example.com", passwordEncoder.encode("diana@123456"), new BigDecimal("8000"), new BigDecimal("8000"));
            HotelOwner owner5 = new HotelOwner("Clark", "Kent", "clark5@example.com", passwordEncoder.encode("clark@123456"), new BigDecimal("9000"), new BigDecimal("9000"));
            HotelOwner owner6 = new HotelOwner("Peter", "Parker", "peter6@example.com", passwordEncoder.encode("peter@123456"), new BigDecimal("10000"), new BigDecimal("10000"));
            HotelOwner owner7 = new HotelOwner("Tony", "Stark", "tony7@example.com", passwordEncoder.encode("tony@123456"), new BigDecimal("11000"), new BigDecimal("11000"));
            HotelOwner owner8 = new HotelOwner("Natasha", "Romanoff", "natasha8@example.com", passwordEncoder.encode("natasha@123456"), new BigDecimal("12000"), new BigDecimal("12000"));
            HotelOwner owner9 = new HotelOwner("Steve", "Rogers", "steve9@example.com", passwordEncoder.encode("steve@123456"), new BigDecimal("13000"), new BigDecimal("13000"));
            HotelOwner owner10 = new HotelOwner("Bruce", "Banner", "bruce10@example.com", passwordEncoder.encode("bruce@123456"), new BigDecimal("14000"), new BigDecimal("14000"));

            hotelOwnerRepository.saveAll(List.of(owner1, owner2, owner3, owner4, owner5, owner6, owner7, owner8, owner9, owner10));
            
            ApplicationUser applicationUserOwner1 = new ApplicationUser("Jack", "Sparrow", "jack@example.com", "0847897851", passwordEncoder.encode("jack@123456"), null, null, null, null, ApplicationUserRole.OWNER);
            ApplicationUser applicationUserOwner2 = new ApplicationUser("Laura", "Croft", "laura2@example.com", "0847897852", passwordEncoder.encode("laura@123456"), null, null, null, null, ApplicationUserRole.OWNER);
            ApplicationUser applicationUserOwner3 = new ApplicationUser("Bruce", "Wayne", "bruce3@example.com", "0847897853", passwordEncoder.encode("bruce@123456"), null, null, null, null, ApplicationUserRole.OWNER);
            ApplicationUser applicationUserOwner4 = new ApplicationUser("Diana", "Prince", "diana4@example.com", "0847897854", passwordEncoder.encode("diana@123456"), null, null, null, null, ApplicationUserRole.OWNER);
            ApplicationUser applicationUserOwner5 = new ApplicationUser("Clark", "Kent", "clark5@example.com", "0847897855", passwordEncoder.encode("clark@123456"),  null, null, null, null, ApplicationUserRole.OWNER);
            ApplicationUser applicationUserOwner6 = new ApplicationUser("Peter", "Parker", "peter6@example.com", "0847897856", passwordEncoder.encode("peter@123456"), null, null, null, null, ApplicationUserRole.OWNER);
            ApplicationUser applicationUserOwner7 = new ApplicationUser("Tony", "Stark", "tony7@example.com", "0847897857", passwordEncoder.encode("tony@123456"), null, null, null, null, ApplicationUserRole.OWNER);
            ApplicationUser applicationUserOwner8 = new ApplicationUser("Natasha", "Romanoff", "natasha8@example.com", "0847897858", passwordEncoder.encode("natasha@123456"), null, null, null, null, ApplicationUserRole.OWNER);
            ApplicationUser applicationUserOwner9 = new ApplicationUser("Steve", "Rogers", "steve9@example.com", "0847897859", passwordEncoder.encode("steve@123456"), null, null, null, null, ApplicationUserRole.OWNER);
            ApplicationUser applicationUserOwner10 = new ApplicationUser("Bruce", "Banner", "bruce10@example.com", "0847897850", passwordEncoder.encode("bruce@123456"), null, null, null, null, ApplicationUserRole.OWNER);
            
            applicationUserRepository.saveAll(List.of(applicationUserOwner1, applicationUserOwner2, applicationUserOwner3, applicationUserOwner4, applicationUserOwner5, applicationUserOwner6, applicationUserOwner7, applicationUserOwner8, applicationUserOwner9, applicationUserOwner10));
            
            Hotel hotel1 = new Hotel("Sun-Fair", "34 New England Street, PMB, 3201", "Pietermaritzburg", "Luxury", 5, "Pool, Gym, Spa", "Free Parking",
                    ImageUtils.encodeImageToBase64("static/hotel1.jpg"), owner1);
            Hotel hotel2 = new Hotel("Moonlight Inn", "12 Sunset Blvd, Cape Town, 8001", "Cape Town", "Boutique", 4, "Rooftop Bar, Free Wi-Fi", "Paid Parking",
                    ImageUtils.encodeImageToBase64("static/hotel2.jpg"), owner2);
            Hotel hotel3 = new Hotel("Starry Nights", "56 Galaxy Road, Johannesburg, 2001", "Johannesburg", "Business", 3, "Conference Hall, Free Breakfast", "Free Parking",
                    ImageUtils.encodeImageToBase64("static/hotel3.jpg"), owner3);
            Hotel hotel4 = new Hotel("Ocean Breeze", "78 Coastal Avenue, Durban, 4001", "Durban", "Resort", 5, "Beach Access, Swimming Pool", "Free Parking",
                    ImageUtils.encodeImageToBase64("static/hotel4.jpg"), owner4);
            Hotel hotel5 = new Hotel("Mountain Retreat", "90 Alpine Street, Bloemfontein, 9301", "Bloemfontein", "Eco-Friendly", 4, "Hiking Trails, Organic Restaurant", "Free Parking",
                    ImageUtils.encodeImageToBase64("static/hotel5.png"), owner5);
            Hotel hotel6 = new Hotel("City Lights", "34 Downtown Road, Pretoria, 0001", "Pretoria", "Modern", 4, "Sky Lounge, Fitness Center", "Paid Parking",
                    ImageUtils.encodeImageToBase64("static/hotel6.jpg"), owner6);
            Hotel hotel7 = new Hotel("Forest Haven", "22 Woodland Lane, Port Elizabeth, 6001", "Port Elizabeth", "Boutique", 3, "Garden, Free Wi-Fi", "Free Parking",
                    ImageUtils.encodeImageToBase64("static/hotel7.jpg"), owner7);
            Hotel hotel8 = new Hotel("Desert Oasis", "11 Mirage Street, East London, 5201", "East London", "Luxury", 5, "Infinity Pool, Spa", "Paid Parking",
                    ImageUtils.encodeImageToBase64("static/hotel8.jpg"), owner8);
            Hotel hotel9 = new Hotel("Riverbank Resort", "65 River Road, Pietermaritzburg, 3201", "Pietermaritzburg", "Resort", 4, "Boat Rentals, Swimming Pool", "Free Parking",
                    ImageUtils.encodeImageToBase64("static/hotel9.jpeg"), owner9);
            Hotel hotel10 = new Hotel("Cityscape Hotel", "99 Skyline Avenue, Johannesburg, 2001", "Johannesburg", "Business", 3, "Conference Room, Free Breakfast", "Paid Parking",
                    ImageUtils.encodeImageToBase64("static/hotel10.jpeg"), owner10);

            hotelRepository.saveAll(List.of(hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9, hotel10));
        }
    }

    private void seedRooms() {
        if (roomRepository.count() == 0) {
            List<Hotel> hotels = hotelRepository.findAll();
            if (hotels.size() < 10) {
                throw new IllegalStateException("Not enough hotels to seed rooms.");
            }

            Room room1 = new Room(hotels.get(0), "Single", new BigDecimal("3400"), "Available");
            Room room2 = new Room(hotels.get(1), "Double", new BigDecimal("4400"), "Available");
            Room room3 = new Room(hotels.get(2), "Suite", new BigDecimal("5400"), "Available");
            Room room4 = new Room(hotels.get(3), "Deluxe", new BigDecimal("14400"), "Available");
            Room room5 = new Room(hotels.get(4), "Standard", new BigDecimal("2400"), "Available");
            Room room6 = new Room(hotels.get(5), "Executive", new BigDecimal("3400"), "Available");
            Room room7 = new Room(hotels.get(6), "Junior Suite", new BigDecimal("4400"), "Available");
            Room room8 = new Room(hotels.get(7), "Presidential Suite", new BigDecimal("10400"), "Available");
            Room room9 = new Room(hotels.get(8), "Family Room", new BigDecimal("5400"), "Available");
            Room room10 = new Room(hotels.get(9), "Economy", new BigDecimal("1400"), "Available");

            roomRepository.saveAll(List.of(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10));
        }
    }

    private void seedBookings() {
        if (bookingRepository.count() == 0) {
            List<Customer> customers = customerRepository.findAll();
            List<Room> rooms = roomRepository.findAll();

            if (customers.size() < 10 || rooms.size() < 10) {
                throw new IllegalStateException("Not enough customers or rooms to seed bookings.");
            }

            Booking booking1 = new Booking(customers.get(0), rooms.get(0), LocalDateTime.of(2024, 10, 1, 15, 0),
                    LocalDateTime.of(2024, 10, 5, 11, 0), new BigDecimal("500.00"), "CONFIRMED", "Durban", "South Africa", "4001", "66 Hanover Road, Durban, 4001");
            Booking booking2 = new Booking(customers.get(1), rooms.get(1), LocalDateTime.of(2024, 10, 10, 15, 0),
                    LocalDateTime.of(2024, 10, 12, 11, 0), new BigDecimal("300.00"), "PENDING", "Durban", "South Africa", "4306", "45 London Road, Durban, 4306");
            Booking booking3 = new Booking(customers.get(2), rooms.get(2), LocalDateTime.of(2024, 11, 1, 14, 0),
                    LocalDateTime.of(2024, 11, 3, 10, 0), new BigDecimal("600.00"), "CONFIRMED", "Johannesburg", "South Africa", "2001", "12 Hilltop Street, Johannesburg, 2001");
            Booking booking4 = new Booking(customers.get(3), rooms.get(3), LocalDateTime.of(2024, 12, 5, 16, 0),
                    LocalDateTime.of(2024, 12, 10, 12, 0), new BigDecimal("1200.00"), "CONFIRMED", "Cape Town", "South Africa", "8001", "99 Mountain Road, Cape Town, 8001");
            Booking booking5 = new Booking(customers.get(4), rooms.get(4), LocalDateTime.of(2025, 1, 15, 13, 0),
                    LocalDateTime.of(2025, 1, 20, 11, 0), new BigDecimal("800.00"), "PENDING", "Pretoria", "South Africa", "0001", "10 Freedom Way, Pretoria, 0001");
            Booking booking6 = new Booking(customers.get(5), rooms.get(5), LocalDateTime.of(2025, 2, 20, 15, 0),
                    LocalDateTime.of(2025, 2, 25, 10, 0), new BigDecimal("1000.00"), "CONFIRMED", "Port Elizabeth", "South Africa", "6001", "23 Waterfront Drive, Port Elizabeth, 6001");
            Booking booking7 = new Booking(customers.get(6), rooms.get(6), LocalDateTime.of(2025, 3, 10, 14, 0),
                    LocalDateTime.of(2025, 3, 15, 12, 0), new BigDecimal("700.00"), "CONFIRMED", "East London", "South Africa", "5201", "44 Ocean Drive, East London, 5201");
            Booking booking8 = new Booking(customers.get(7), rooms.get(7), LocalDateTime.of(2025, 4, 5, 16, 0),
                    LocalDateTime.of(2025, 4, 10, 11, 0), new BigDecimal("1500.00"), "PENDING", "Bloemfontein", "South Africa", "9301", "55 Rose Street, Bloemfontein, 9301");
            Booking booking9 = new Booking(customers.get(8), rooms.get(8), LocalDateTime.of(2025, 5, 1, 13, 0),
                    LocalDateTime.of(2025, 5, 3, 10, 0), new BigDecimal("900.00"), "CONFIRMED", "Durban", "South Africa", "4001", "88 Seaside Avenue, Durban, 4001");
            Booking booking10 = new Booking(customers.get(9), rooms.get(9), LocalDateTime.of(2025, 6, 10, 15, 0),
                    LocalDateTime.of(2025, 6, 15, 11, 0), new BigDecimal("400.00"), "PENDING", "Durban", "South Africa", "4001", "77 Skyline Road, Durban, 4001");

            bookingRepository.saveAll(List.of(booking1, booking2, booking3, booking4, booking5, booking6, booking7, booking8, booking9, booking10));
        }
    }

    private void seedReviews() {
        if (reviewRepository.count() == 0) {
            List<Customer> customers = customerRepository.findAll();
            List<Hotel> hotels = hotelRepository.findAll();

            if (customers.size() < 10 || hotels.size() < 10) {
                throw new IllegalStateException("Not enough customers or hotels to seed reviews.");
            }

            Review review1 = new Review(hotels.get(0), customers.get(0), 5, "Great", "Fantastic stay! The room was clean and the staff were very helpful.");
            Review review2 = new Review(hotels.get(1), customers.get(1), 4.5, "Good", "Good experience overall, but the check-in process was a bit slow.");
            Review review3 = new Review(hotels.get(2), customers.get(2), 4, "Nice", "Nice facilities and comfortable beds.");
            Review review4 = new Review(hotels.get(3), customers.get(3), 5, "Excellent", "Excellent service and beautiful views.");
            Review review5 = new Review(hotels.get(4), customers.get(4), 3.5, "Average", "Average experience, nothing special.");
            Review review6 = new Review(hotels.get(5), customers.get(5), 4.2, "Good", "Good value for money.");
            Review review7 = new Review(hotels.get(6), customers.get(6), 4.8, "Superb", "Superb location and amenities.");
            Review review8 = new Review(hotels.get(7), customers.get(7), 5, "Perfect", "Perfect stay with top-notch facilities.");
            Review review9 = new Review(hotels.get(8), customers.get(8), 4.3, "Very Good", "Very good service and clean rooms.");
            Review review10 = new Review(hotels.get(9), customers.get(9), 3.8, "Decent", "Decent stay, room was a bit small.");

            reviewRepository.saveAll(List.of(review1, review2, review3, review4, review5, review6, review7, review8, review9, review10));
        }
    }

    private void seedAdministrators() {
        if (administratorRepository.count() == 0) {
            Administrator admin1 = new Administrator("Admin1", "User1", "admin1@example.com", passwordEncoder.encode("password1"));
            Administrator admin2 = new Administrator("Admin2", "User2", "admin2@example.com", passwordEncoder.encode("password2"));
            Administrator admin3 = new Administrator("Admin3", "User3", "admin3@example.com", passwordEncoder.encode("password3"));
            Administrator admin4 = new Administrator("Admin4", "User4", "admin4@example.com", passwordEncoder.encode("password4"));
            Administrator admin5 = new Administrator("Admin5", "User5", "admin5@example.com", passwordEncoder.encode("password5"));
            Administrator admin6 = new Administrator("Admin6", "User6", "admin6@example.com", passwordEncoder.encode("password6"));
            Administrator admin7 = new Administrator("Admin7", "User7", "admin7@example.com", passwordEncoder.encode("password7"));
            Administrator admin8 = new Administrator("Admin8", "User8", "admin8@example.com", passwordEncoder.encode("password8"));
            Administrator admin9 = new Administrator("Admin9", "User9", "admin9@example.com", passwordEncoder.encode("password9"));
            Administrator admin10 = new Administrator("Admin10", "User10", "admin10@example.com", passwordEncoder.encode("password10"));

            administratorRepository.saveAll(List.of(admin1, admin2, admin3, admin4, admin5, admin6, admin7, admin8, admin9, admin10));
            
            ApplicationUser adminApplicationUser1 = new ApplicationUser("Admin1", "User1", "admin1@example.com", "0847897861", passwordEncoder.encode("password1"), null, null, null, null, ApplicationUserRole.ADMIN);
            ApplicationUser adminApplicationUser2 = new ApplicationUser("Admin2", "User2", "admin2@example.com", "0847897862", passwordEncoder.encode("password2"), null, null, null, null, ApplicationUserRole.ADMIN);
            ApplicationUser adminApplicationUser3 = new ApplicationUser("Admin3", "User3", "admin3@example.com", "0847897863", passwordEncoder.encode("password3"), null, null, null, null, ApplicationUserRole.ADMIN);
            ApplicationUser adminApplicationUser4 = new ApplicationUser("Admin4", "User4", "admin4@example.com", "0847897864", passwordEncoder.encode("password4"), null, null, null, null, ApplicationUserRole.ADMIN);
            ApplicationUser adminApplicationUser5 = new ApplicationUser("Admin5", "User5", "admin5@example.com", "0847897865", passwordEncoder.encode("password5"), null, null, null, null, ApplicationUserRole.ADMIN);
            ApplicationUser adminApplicationUser6 = new ApplicationUser("Admin6", "User6", "admin6@example.com", "0847897866", passwordEncoder.encode("password6"), null, null, null, null, ApplicationUserRole.ADMIN);
            ApplicationUser adminApplicationUser7 = new ApplicationUser("Admin7", "User7", "admin7@example.com", "0847897867", passwordEncoder.encode("password7"), null, null, null, null, ApplicationUserRole.ADMIN);
            ApplicationUser adminApplicationUser8 = new ApplicationUser("Admin8", "User8", "admin8@example.com", "0847897868", passwordEncoder.encode("password8"), null, null, null, null, ApplicationUserRole.ADMIN);
            ApplicationUser adminApplicationUser9 = new ApplicationUser("Admin9", "User9", "admin9@example.com", "0847897869", passwordEncoder.encode("password9"), null, null, null, null, ApplicationUserRole.ADMIN);
            ApplicationUser adminApplicationUser10 = new ApplicationUser("Admin10", "User10", "admin10@example.com", "0847897860", passwordEncoder.encode("password10"), null, null, null, null, ApplicationUserRole.ADMIN);
            
            applicationUserRepository.saveAll(List.of(adminApplicationUser1, adminApplicationUser2, adminApplicationUser3, adminApplicationUser4, adminApplicationUser5, adminApplicationUser6, adminApplicationUser7, adminApplicationUser8, adminApplicationUser9, adminApplicationUser10));
        }
    }

    private void seedSpecialOffers() {
        if (specialOfferRepository.count() == 0) {
            List<Hotel> hotels = hotelRepository.findAll();
            if (hotels.size() < 10) {
                throw new IllegalStateException("Not enough hotels to seed special offers.");
            }

            SpecialOffer offer1 = new SpecialOffer(new BigDecimal("20.00"), hotels.get(0));
            SpecialOffer offer2 = new SpecialOffer(new BigDecimal("15.00"), hotels.get(1));
            SpecialOffer offer3 = new SpecialOffer(new BigDecimal("25.00"), hotels.get(2));
            SpecialOffer offer4 = new SpecialOffer(new BigDecimal("10.00"), hotels.get(3));
            SpecialOffer offer5 = new SpecialOffer(new BigDecimal("30.00"), hotels.get(4));
            SpecialOffer offer6 = new SpecialOffer(new BigDecimal("18.00"), hotels.get(5));
            SpecialOffer offer7 = new SpecialOffer(new BigDecimal("22.00"), hotels.get(6));
            SpecialOffer offer8 = new SpecialOffer(new BigDecimal("17.00"), hotels.get(7));
            SpecialOffer offer9 = new SpecialOffer(new BigDecimal("19.00"), hotels.get(8));
            SpecialOffer offer10 = new SpecialOffer(new BigDecimal("16.00"), hotels.get(9));

            specialOfferRepository.saveAll(List.of(offer1, offer2, offer3, offer4, offer5, offer6, offer7, offer8, offer9, offer10));
        }
    }

    private void seedGlobalCharges() {
        if (globalChargesRepository.count() == 0) {
            for (int i = 1; i <= 10; i++) {
                GlobalCharges charge = new GlobalCharges(new BigDecimal("100.00").add(new BigDecimal(i * 10)),
                        new BigDecimal("10.00").add(new BigDecimal(i)),
                        new BigDecimal("5.00").add(new BigDecimal(i / 2.0)),
                        LocalDateTime.now().minusDays(i));
                globalChargesRepository.save(charge);
            }
        }
    }

    private void seedPayments() {
        if (paymentRepository.count() == 0) {
            List<Card> cards = cardRepository.findAll();
            List<Booking> bookings = bookingRepository.findAll();

            if (cards.size() < 10 || bookings.size() < 10) {
                throw new IllegalStateException("Not enough cards or bookings to seed payments.");
            }

            Payment payment1 = new Payment(bookings.get(0), new BigDecimal("500.00"), "Visa", "PAID", LocalDateTime.now(), new BigDecimal("50.00"), cards.get(0));
            Payment payment2 = new Payment(bookings.get(1), new BigDecimal("300.00"), "Mastercard", "PAID", LocalDateTime.now(), new BigDecimal("30.00"), cards.get(1));
            Payment payment3 = new Payment(bookings.get(2), new BigDecimal("600.00"), "American Express", "PAID", LocalDateTime.now(), new BigDecimal("60.00"), cards.get(2));
            Payment payment4 = new Payment(bookings.get(3), new BigDecimal("1200.00"), "Discover", "PAID", LocalDateTime.now(), new BigDecimal("120.00"), cards.get(3));
            Payment payment5 = new Payment(bookings.get(4), new BigDecimal("800.00"), "Visa", "PAID", LocalDateTime.now(), new BigDecimal("80.00"), cards.get(4));
            Payment payment6 = new Payment(bookings.get(5), new BigDecimal("1000.00"), "Mastercard", "PAID", LocalDateTime.now(), new BigDecimal("100.00"), cards.get(5));
            Payment payment7 = new Payment(bookings.get(6), new BigDecimal("700.00"), "Visa", "PAID", LocalDateTime.now(), new BigDecimal("70.00"), cards.get(6));
            Payment payment8 = new Payment(bookings.get(7), new BigDecimal("1500.00"), "Visa", "PAID", LocalDateTime.now(), new BigDecimal("150.00"), cards.get(7));
            Payment payment9 = new Payment(bookings.get(8), new BigDecimal("900.00"), "Visa", "PAID", LocalDateTime.now(), new BigDecimal("90.00"), cards.get(8));
            Payment payment10 = new Payment(bookings.get(9), new BigDecimal("400.00"), "Mastercard", "PAID", LocalDateTime.now(), new BigDecimal("40.00"), cards.get(9));

            paymentRepository.saveAll(List.of(payment1, payment2, payment3, payment4, payment5, payment6, payment7, payment8, payment9, payment10));
        }
    }
}
