import axios from "axios";
import { Navigate } from "react-router-dom";

export default class ApiService {
  static BASE_URL = "http://localhost:8081/api";

  static getHeader() {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }

  /**AUTH */

  /* This  register a new user */
  static async registerUser(registration) {
    const response = await axios.post(
      `${this.BASE_URL}/v1/auth/register`,
      registration
    );
    return response.data;
  }

  /* This  login a registered user */
  static async loginUser(loginDetails) {
    const response = await axios.post(
      `${this.BASE_URL}/v1/auth/authenticate`,
      loginDetails
    );

    //store user and token in the local storage
    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('role', response.data.role)
      localStorage.setItem('user', JSON.stringify(response.data.user))
    }

    return response.data;
  }

  /***USERS */

  /*  This is  to get the user profile */
  static async getAllUsers() {
    const response = await axios.get(`${this.BASE_URL}/users/all`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  static async getUserProfile() {
    const response = await axios.get(
      `${this.BASE_URL}/users/get-logged-in-profile-info`,
      {
        headers: this.getHeader(),
      }
    );
    return response.data.user;
  }

  /* This is the  to get a single user */
  static async getUser(email) {
    const response = await axios.get(
      `${this.BASE_URL}/users/get-by-email/${email}`,
      {
        headers: this.getHeader(),
      }
    );
    return response.data.user;
  }

  /* This is the  to get a single user */
  static async getOwnerByEmail(email) {
    const response = await axios.get(
      `${this.BASE_URL}/hotelOwners/get-by-email/${email}`,
      {
        headers: this.getHeader(),
      }
    );
    return response.data.HotelOwner;
  }

  static async changePassword(email, formData) {
    const result = await axios.put(
      `${this.BASE_URL}/users/change-password/${email}`,
      formData,
      {
        headers: {
          ...this.getHeader(),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return result.data.user;
  }

  static async updatePersonalInfo(email, formData) {
    const result = await axios.put(
      `${this.BASE_URL}/users/change-details/${email}`,
      formData,
      {
        headers: {
          ...this.getHeader(),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return result.data.user;
  }

  /* This is the  to get user bookings by the user email */
  static async getUserBookings(email) {
    const response = await axios.get(
      `${this.BASE_URL}/users/get-user-bookings/${email}`,
      {
        headers: this.getHeader(),
      }
    );
    return response.data.user.bookings;
  }

  /* This is to delete a user */
  static async deleteUser(email) {
    const response = await axios.delete(
      `${this.BASE_URL}/users/delete/${email}`,
      {
        headers: this.getHeader(),
      }
    );
    return response.data;
  }

  /**ROOM */
  /* This  adds a new room room to the database */
  static async addRoom(createRoom) {
    try {
      const result = await axios.post(`${this.BASE_URL}/room`, createRoom, {
        headers: {
          ...this.getHeader(),
        },
      });
      return result.data; // Return the response data
    } catch (error) {
      console.error("Error adding room:", error); // Log the error
      throw error; // Rethrow to handle it higher up if needed
    }
  }

  /* This  gets all availavle rooms */
  static async getAllAvailableRooms(id) {
    const result = await axios.get(
      `${this.BASE_URL}/public/rooms/all-available-rooms/${id}`
    );
    return result.data.Room;
  }

  /* This  gets all availavle by dates rooms from the database with a given date and a room type */
  static async getAvailableRooms(hotelId, checkInDate, checkOutDate) {
    const result = await axios.get(
      `${this.BASE_URL}/public/rooms/available-rooms?hotelId=${hotelId}&checkInDate=${checkInDate}
		&checkOutDate=${checkOutDate}`
    );
    return result.data.Rooms;
  }

  /* This  gets all rooms from the database */
  static async getAllRooms() {
    const result = await axios.get(`${this.BASE_URL}/public/rooms`);
    return result.data.Rooms;
  }
  /* This function gets a room by the id */
  static async getRoomById(roomId) {
    const result = await axios.get(`${this.BASE_URL}/public/rooms/${roomId}`);
    return result.data.Room;
  }

  /* This  deletes a room by the Id */
  static async deleteRoom(roomId) {
    const result = await axios.delete(`${this.BASE_URL}/rooms/${roomId}`, {
      headers: this.getHeader(),
    });
    return result.data;
  }

  /* This updates a room */
  static async updateRoom(roomId, formData) {
    const result = await axios.put(
      `${this.BASE_URL}/rooms/${roomId}`,
      formData,
      {
        headers: {
          ...this.getHeader(),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return result.data.Room;
  }

  /**BOOKING */
  /* This  saves a new booking to the databse */
  static async bookRoom(booking) {
    const response = await axios.post(`${this.BASE_URL}/booking`, booking, {
      headers: this.getHeader(),
    });
    return response.data.booking;
  }

  /* This  gets alll bokings from the database */
  static async getAllBookings() {
    const result = await axios.get(`${this.BASE_URL}/public/bookings`);
    return result.data.bookings;
  }

  static async getBooking(bookingId) {
    const result = await axios.get(
      `${this.BASE_URL}/public/booking/${bookingId}`
    );
    return result.data.booking;
  }

  static async getBookingByCustomerId(customerId) {
    const result = await axios.get(
      `${this.BASE_URL}/public/booking/customer/${customerId}`
    );
    return result.data.booking;
  }

  /* This is the  to cancel user booking */
  static async cancelBooking(bookingId) {
    const result = await axios.delete(
      `${this.BASE_URL}/bookings/cancel/${bookingId}`,
      {
        headers: this.getHeader(),
      }
    );
    return result.data;
  }
  /*=================================================================

                      CRUD HOTEL OWNERs

=================================================================*/
  /* This is to get all hotel owners */
  static async getAllHotelOwners() {
    const result = await axios.get(`${this.BASE_URL}/public/hotelOwners`);
    console.log("FroMServiceHotelOwners: ", result.data);
    return result.data;
  }

  /* This is to add a hotel owner */
  static async addHotelOwner(ownerDetails) {
    const response = await axios.post(
      `${this.BASE_URL}/hotelOwner`,
      ownerDetails,
      { headers: this.getHeader() }
    );
    return response.data;
  }

  /* This function gets a hotelOwner by the id */
  static async getHotelOwnerById(hotelOwnerId) {
    const result = await axios.get(
      `${this.BASE_URL}/public/hotelOwners/${hotelOwnerId}`
    );
    return result.data.HotelOwner;
  }
  /*=================================================================

                    CRUD GLOBAL CHARGES

=================================================================*/

  /** Get all global charges */
  static async getGlobalCharges() {
    const response = await axios.get(`${this.BASE_URL}/v1/global-charges`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /** Add new global charges */
  static async addGlobalCharges(charges) {
    const response = await axios.post(
      `${this.BASE_URL}/v1/global-charges`,
      charges,
      {
        headers: this.getHeader(),
      }
    );
    return response.data;
  }

  /** Update existing global charges */
  static async updateGlobalCharges(charges) {
    const response = await axios.put(
      `${this.BASE_URL}/v1/global-charges`,
      charges,
      {
        headers: this.getHeader(),
      }
    );
    return response.data;
  }
  /*=================================================================

                      CRUD PAYMENTS

=================================================================*/

  static async makePayment(payment) {
    const response = await axios.post(`${this.BASE_URL}/payment`, payment, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  /**AUTHENTICATION CHECKER */
  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    Navigate("/");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static isAdmin() {
    const role = localStorage.getItem("role");
    return role === "ADMIN";
  }

  static isOwner() {
    const role = localStorage.getItem("role");
    return role === "OWNER";
  }

  static isCustomer() {
    const role = localStorage.getItem("role");
    return role === "CUSTOMER";
  }

  static async getHotels() {
    const result = await axios.get(`${this.BASE_URL}/public/hotels`);
    return result.data;
  }

  static async getHotel(hotelId) {
    const result = await axios.get(`${this.BASE_URL}/public/hotel/${hotelId}`);
    return result.data.Hotel;
  }

  static async getHotelsByOwnerID(ownerId) {
    const results = await axios.get(
      `${this.BASE_URL}/hotels/owner/${ownerId}`,
      {
        headers: this.getHeader(),
      }
    );

    return results.data.hotel;
  }

  static async getRoomsByOwnerID(ownerId) {
    const results = await axios.get(`${this.BASE_URL}/rooms/owner/${ownerId}`, {
      headers: this.getHeader(),
    });

    return results.data.room;
  }

  static async getRoomWithLowestPrice(hotelId) {
    const result = await axios.get(
      `${this.BASE_URL}/public/rooms/room-with-lowest-price/${hotelId}`
    );
    return result.data.Room;
  }

  static async getHotelReviews(hotelId) {
    const result = await axios.get(
      `${this.BASE_URL}/public/review/reviews-for-hotel/${hotelId}`
    );
    return result.data.reviews;
  }

  static async getAllHotelReviews() {
    const result = await axios.get(`${this.BASE_URL}/public/reviews`);
    console.log("reviews", result.data.reviews);
    return result.data.reviews;
  }

  static async postReview(id, email, formData) {
    const response = await axios.post(
      `${this.BASE_URL}/review/customer-review?hotelId=${id}&email=${email}`,
      formData,
      {
        headers: this.getHeader(),
      }
    );
    return response.data.review;
  }

  static async getCustomerByEmail(email) {
    const response = await axios.get(
      `${this.BASE_URL}/public/customer-info/${email}`
    );
    return response.data.customer;
  }

  static async getCustomerCards(email) {
    const response = await axios.get(
      `${this.BASE_URL}/public/card/customer/${email}`
    );
    return response.data.cards;
  }

  static async addNewCustomerCard(formData) {
    const response = await axios.post(`${this.BASE_URL}/card`, formData, {
      headers: this.getHeader(),
    });
    return response.data.card;
  }

  static async editCard(id, formData) {
    const response = await axios.put(`${this.BASE_URL}/card/${id}`, formData, {
      headers: this.getHeader(),
    });
    return response.data.card;
  }

  static async deleteCard(id) {
    const response = await axios.delete(`${this.BASE_URL}/card/${id}`, {
      headers: this.getHeader(),
    });
    return response.data;
  }

  static async updateCustomer(id, formData) {
    const response = await axios.put(
      `${this.BASE_URL}/customer/${id}`,
      formData,
      {
        headers: this.getHeader(),
      }
    );
    return response.data.customer;
  }

  static async updateHotelOwnerCurrentBalance(hotelId, fee) {
    const response = await axios.put(
      `${this.BASE_URL}/hotelOwner/update-current-balance?hotelId=${hotelId}&fee=${fee}`,
      null,
      {
        headers: this.getHeader(),
      }
    );
    return response.data.HotelOwner;
  }

  static async getOwner(ownerId) {
    const result = await axios.get(
      `${this.BASE_URL}/public/hotelOwners/${ownerId}`
    );
    return result.data.HotelOwner;
  }

  static async addHotel(formData) {
    const result = await axios.post(`${this.BASE_URL}/hotel`, formData, {
      headers: {
        ...this.getHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return result.data;
  }

  static async updateHotel(hotelId, formData) {
    const result = await axios.put(
      `${this.BASE_URL}/hotels/${hotelId}`,
      formData,
      {
        headers: {
          ...this.getHeader(),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return result.data;
  }

  static async deleteHotel(hotelId) {
    const result = await axios.delete(`${this.BASE_URL}/hotels/${hotelId}`, {
      headers: this.getHeader(),
    });
    return result.data;
  }
}
