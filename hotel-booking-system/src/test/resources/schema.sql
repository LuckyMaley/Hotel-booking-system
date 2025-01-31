-- schema.sql

-- 1. Administrators Table
CREATE TABLE administrators (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Owners Table
CREATE TABLE owners (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    address VARCHAR(255),
    opening_balance DECIMAL(10, 2),
    current_balance DECIMAL(10, 2),
    password VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 3. Hotels Table
CREATE TABLE hotels (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(20),
    owner_id BIGINT,
    star_rating INT,
    city text,
    facilities TEXT,
    description TEXT,
    amenities TEXT,
    pictureurl LONGTEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_hotels_owners FOREIGN KEY (owner_id) REFERENCES owners(id)
);

-- 4. Rooms Table
CREATE TABLE rooms (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    occupancy VARCHAR(10),
    room_type VARCHAR(50),
    price DECIMAL(10, 2),
    hotel_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_rooms_hotels FOREIGN KEY (hotel_id) REFERENCES hotels(id)
);

-- 5. Customers Table
CREATE TABLE customers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number varchar(255) DEFAULT NULL,
    address VARCHAR(255),
    city varchar(255) DEFAULT NULL,
    country varchar(255) DEFAULT NULL,
    postal_code varchar(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 6. Special Offers Table
CREATE TABLE special_offers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    discount_percentage DECIMAL(10, 2),
    hotel_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_special_offers_hotels FOREIGN KEY (hotel_id) REFERENCES hotels(id)
);

-- 7. Global Charges Table
CREATE TABLE global_charges (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    base_hotel_charge DECIMAL(10, 2),
    room_charge_per_month DECIMAL(10, 2),
    transaction_fee_percentage DECIMAL(10, 2),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 8. Bookings Table
CREATE TABLE bookings (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id BIGINT,
    room_id BIGINT,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_price DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'CONFIRMED',
    billing_address varchar(255) DEFAULT NULL,
    billing_city varchar(255) DEFAULT NULL,
    billing_country varchar(255) DEFAULT NULL,
    billing_postal_code varchar(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_bookings_customers FOREIGN KEY (customer_id) REFERENCES customers(id),
    CONSTRAINT FK_bookings_rooms FOREIGN KEY (room_id) REFERENCES rooms(id)
);

-- 9. Reviews Table
CREATE TABLE reviews (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id BIGINT,
    hotel_id BIGINT,
    title varchar(255) DEFAULT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_reviews_customers FOREIGN KEY (customer_id) REFERENCES customers(id),
    CONSTRAINT FK_reviews_hotels FOREIGN KEY (hotel_id) REFERENCES hotels(id)
);

-- 10. Cards Table
CREATE TABLE cards (
  id bigint NOT NULL AUTO_INCREMENT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  card_holder_name varchar(255) DEFAULT NULL,
  card_number varchar(255) DEFAULT NULL,
  card_type varchar(255) DEFAULT NULL,
  expiry_month varchar(255) DEFAULT NULL,
  expiry_year varchar(255) DEFAULT NULL,
  security_code varchar(255) DEFAULT NULL,
  customer_id bigint NOT NULL
  );

-- 11. Payments Table
CREATE TABLE payments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    booking_id BIGINT,
    amount DECIMAL(10, 2),
    payment_method VARCHAR(50),
    status VARCHAR(50) DEFAULT 'PAID',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    transaction_fee DECIMAL(10, 2),
    card_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT FK_payments_bookings FOREIGN KEY (booking_id) REFERENCES bookings(id)
);
