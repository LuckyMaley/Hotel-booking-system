// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ApiService from "../components/services/ApiService";

const GlobalCharges = () => {
  const [charges, setCharges] = useState({
    baseHotelCharge: 0,
    roomChargePerMonth: 0,
    transactionFeePercentage: 0,
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch existing charges
    ApiService.getGlobalCharges()
      .then((response) => {
        setCharges(response.data);
      })
      .catch((error) => {
        console.error('Error fetching global charges:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharges((prevCharges) => ({
      ...prevCharges,
      [name]: parseFloat(value),
    }));
  };

  const handleSaveCharges = () => {
    if (isEditing) {
      // Update charges
      ApiService.updateGlobalCharges(charges)
        .then((response) => {
          console.log('Charges updated successfully:', response.data);
          setIsEditing(false);
        })
        .catch((error) => {
          console.error('Error updating charges:', error);
        });
    } else {
      // Add new charges
      ApiService.addGlobalCharges(charges)
        .then((response) => {
          console.log('Charges added successfully:', response.data);
          setIsEditing(false);
        })
        .catch((error) => {
          console.error('Error adding charges:', error);
        });
    }
  };

  return (
    <div className="global-charges add-owner-form-input">
      <h1>Global Charges Management</h1>
      <form>
        <div>
          <label>Base Hotel Charge (£/month)</label>
          <input
            type="number"
            name="baseHotelCharge"
            value={charges.baseHotelCharge}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Room Charge (£/month)</label>
          <input
            type="number"
            name="roomChargePerMonth"
            value={charges.roomChargePerMonth}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Transaction Fee (%)</label>
          <input
            type="number"
            name="transactionFeePercentage"
            value={charges.transactionFeePercentage}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="button" onClick={handleSaveCharges}>
          {isEditing ? 'Update Charges' : 'Add Charges'}
        </button>
      </form>
    </div>
  );
};

export default GlobalCharges;
