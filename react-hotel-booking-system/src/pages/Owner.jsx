// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ApiService from "../components/services/ApiService";
import "./styles/admin.css";

const OwnerPage = () => {
  const [hotelOwners, setHotelOwners] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(false); // Toggle form visibility
  const [newOwner, setNewOwner] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    openingBalance: 1000, // Set default as per swagger
    currentBalance: 200, // Set default as per swagger
  });

  // Fetch existing hotel owners
  useEffect(() => {
    ApiService.getAllHotelOwners() // Updated to use ApiService
      .then((response) => {
        if (Array.isArray(response)) {
          setHotelOwners(response);
          console.log("HOtelOwners: ", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching hotel owners:", error);
      });
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOwner((prevOwner) => ({ ...prevOwner, [name]: value }));
  };

  // Handle adding a new owner
  const handleAddOwner = (e) => {
    e.preventDefault();

    ApiService.addHotelOwner(newOwner) // Use ApiService to add a new owner
      .then((response) => {
        console.log("Owner added successfully:", response);
        setHotelOwners((prevOwners) => [...prevOwners, response]); // Update the list of owners
        setNewOwner({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          openingBalance: 1000, // Reset defaults
          currentBalance: 200, // Reset defaults
        });
        setSuccessMessage("Owner added successfully! Please refresh the page");
        setShowForm(false); // Close the form
      })
      .catch((error) => {
        console.error("Error adding owner:", error);
      });
  };

  return (
    <div className="owner-page">
      {/* Sidebar and Content */}
      <div className="owner-body">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Owner Panel</h2>
          <ul className="sidebar-links">
            <li>
              <a href="/owner-overview">Owner Overview</a>
            </li>
            <li>
              <a href="/coming-soon">Account Statement</a>
            </li>
            <li>
              <a href="/manage-hotels">My Hotels</a>
            </li>
            <li>
              <a href="/manage-rooms">Manage Rooms</a>
            </li>
            <li>
              <a href="/guest-bookings">Guest Bookings</a>
            </li>
            <li>
              <a href="/guest-reviews">Guest Reviews</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="content">
          <h1>Welcome, Owner!</h1>

          <div className="cards-wrapper">
            {/* Owner Overview Card */}
            <div className="card">
              <h3>Owner Overview</h3>
              {hotelOwners.length > 0 ? (
                <ul>
                  {hotelOwners.map((owner) => (
                    <li key={owner.id}>
                      {owner.firstName} {owner.lastName} - {owner.email}{" "}
                      (Balance: £{owner.currentBalance})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No owners found.</p>
              )}
            </div>

            {/* Global Charges Card */}
            <div className="card">
              <h3>Global Charges</h3>
              <table className="charges-table">
                <thead>
                  <tr>
                    <th>Charge Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hotel Base Charge</td>
                    <td>£100 per month</td>
                  </tr>
                  <tr>
                    <td>Room Charge</td>
                    <td>£10 per month</td>
                  </tr>
                  <tr>
                    <td>Transaction Fee</td>
                    <td>5% per booking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal for Add Owner Form */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>
              &times;
            </span>
            <h3>Add Hotel</h3>
            <form onSubmit={handleAddOwner}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={newOwner.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={newOwner.lastName}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newOwner.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newOwner.password}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="openingBalance"
                placeholder="Opening Balance"
                value={newOwner.openingBalance}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="currentBalance"
                placeholder="Current Balance"
                value={newOwner.currentBalance}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="submit-btn">
                Add Owner
              </button>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerPage;
