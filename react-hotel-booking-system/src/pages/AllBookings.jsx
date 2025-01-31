import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import ApiService from "../components/services/ApiService";

const AllBookings = () => {
  const [fetchAllBookings, setFetchBookings] = useState([]);

  const fetchBookings = async () => {
    const userData = await ApiService.getUserProfile();
    const owner = await ApiService.getOwnerByEmail(userData.email);
    const rooms = await ApiService.getRoomsByOwnerID(owner.id);
    const bookings = await ApiService.getAllBookings();

    const relatedBookings = bookings.filter((booking) =>
      rooms.some((room) => room.id === booking.roomId)
    );

    // Now you can use relatedBookings as needed
    console.log("Related Bookings:", relatedBookings);

    setFetchBookings(Array.isArray(relatedBookings) ? relatedBookings : []);
    // console.log("in all", hotels);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="htlfndr-elements-content" id="htlfndr-tables">
      <h3 className="htlfndr-font-24">
        <b>All Bookings</b>
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Room ID</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Billing City</th>
            <th>Billing Country</th>
            <th>Billing Postal Code</th>
            <th>Billing Address</th>
          </tr>
        </thead>
        <tbody>
          {fetchAllBookings.length > 0 ? (
            fetchAllBookings.map((fetchBooking, index) => (
              <tr key={index}>
                {/* Assuming fetchBooking also contains booking-related information */}
                <td data-title="Customer ID">{fetchBooking.customerId}</td>
                <td data-title="Room ID">{fetchBooking.roomId}</td>
                <td data-title="Check-In Date">{fetchBooking.checkInDate}</td>
                <td data-title="Check-Out Date">{fetchBooking.checkOutDate}</td>
                <td data-title="Total Price">R {fetchBooking.totalPrice}</td>
                <td data-title="Status">{fetchBooking.status}</td>
                <td data-title="Billing City">{fetchBooking.billingCity}</td>
                <td data-title="Billing Country">
                  {fetchBooking.billingCountry}
                </td>
                <td data-title="Billing Postal Code">
                  {fetchBooking.billingPostalCode}
                </td>
                <td data-title="Billing Address">
                  {fetchBooking.billingAddress}
                </td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="17" style={{ textAlign: "center" }}>
                <h1>No bookings found.</h1>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <nav className="htlfndr-pagination">
        <ul className="pagination">
          <li className="htlfndr-left">
            <a aria-label="Previous" href="/search-result-v-2">
              <span aria-hidden="true" className="fa fa-angle-left"></span>
            </a>
          </li>
          <li className="current">
            <a href="/search-result-v-2">1</a>
          </li>
          <li>
            <a href="/search-result-v-2">2</a>
          </li>
          <li>
            <a href="/search-result-v-2">3</a>
          </li>
          <li>
            <a href="/search-result-v-2">4</a>
          </li>
          <li className="htlfndr-right">
            <a aria-label="Next" href="/search-result-v-2">
              <span aria-hidden="true" className="fa fa-angle-right"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AllBookings;
