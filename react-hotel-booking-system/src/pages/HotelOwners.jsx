// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ownerOverview.css';

const OwnerOverview = () => {
  const [hotelOwners, setHotelOwners] = useState([]);

  useEffect(() => {
    // Fetch the hotel owners when the component loads
    axios.get('http://localhost:8080/api/public/hotelOwners')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setHotelOwners(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching hotel owners:', error);
      });
  }, []);

  const handleEditBalance = (ownerId) => {
    // Logic to open a modal or form for editing balance
    console.log(`Editing balance for owner ID: ${ownerId}`);
  };

  const handleEditDetails = (ownerId) => {
    // Logic to open a modal or form for editing owner details
    console.log(`Editing details for owner ID: ${ownerId}`);
  };

  const handleDeleteOwner = (ownerId) => {
    // Logic to delete the owner
    axios.delete(`http://localhost:8080/api/hotelOwner/${ownerId}`)
      .then(() => {
        setHotelOwners((prevOwners) => prevOwners.filter((owner) => owner.id !== ownerId));
        console.log('Owner deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting owner:', error);
      });
  };

  return (
    <div className="owner-overview">
      <h1>Hotel Owners Overview</h1>
      {hotelOwners.length > 0 ? (
        <table className="owner-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Current Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotelOwners.map((owner) => (
              <tr key={owner.id}>
                <td>{owner.firstName} {owner.lastName}</td>
                <td>{owner.email}</td>
                <td>£{owner.currentBalance}</td>
                <td>
                  <button onClick={() => handleEditBalance(owner.id)}>Edit Balance</button>
                  <button onClick={() => handleEditDetails(owner.id)}>Edit Details</button>
                  <button onClick={() => handleDeleteOwner(owner.id)}>Delete Owner</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hotel owners found.</p>
      )}
    </div>
  );
};

export default OwnerOverview;
