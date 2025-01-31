package com.hotel.booking.system.api.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.Room;

public interface RoomRepository extends JpaRepository<Room, Long> {
	List<Room> findByHotel(Hotel hotel);

	List<Room> findByOccupancy(Room rooms);

	@Query("SELECT DISTINCT r.roomType FROM Room r")
	List<String> findDistinctRoomTypes();

	@Query("SELECT r FROM Room r WHERE r.id NOT IN (SELECT bk.room.id FROM Booking bk WHERE"
			+ "(bk.checkInDate <= :checkOutDate) AND (bk.checkOutDate >= :checkInDate))")
	List<Room> findAvailableRoomsByDatesAndTypes(LocalDateTime checkInDate, LocalDateTime checkOutDate);
	
	@Query("SELECT r FROM Room r WHERE r.hotel.id = :hotelId AND r.id NOT IN (SELECT bk.room.id FROM Booking bk WHERE"
			+ "(bk.checkInDate <= :checkOutDate) AND (bk.checkOutDate >= :checkInDate))")
	List<Room> findSpecificHotelAvailableRoomsByDatesAndTypes(Long hotelId, LocalDateTime checkInDate, LocalDateTime checkOutDate);

	@Query("SELECT r FROM Room r WHERE r.id NOT IN (SELECT b.room.id FROM Booking b)")
	List<Room> getAllAvailableRooms();

}
