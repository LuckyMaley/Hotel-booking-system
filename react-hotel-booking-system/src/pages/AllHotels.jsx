import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import ApiService from "../components/services/ApiService";

const AllHotels = () => {
  const [fetchAllHotels, setFetchHotels] = useState([]);

  const fetchHotels = async () => {
    const userData = await ApiService.getUserProfile();
    const owner = await ApiService.getOwnerByEmail(userData.email);
    const hotels = await ApiService.getHotelsByOwnerID(owner.id);

    setFetchHotels(Array.isArray(hotels) ? hotels : []);
    console.log("in all", hotels);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className="htlfndr-elements-content" id="htlfndr-tables">
      <h3 className="htlfndr-font-24">
        <b>All Hotels</b>
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>City</th>
            <th>Address</th>
            <th>Rating</th>
            <th>Facilities</th>
            <th>Amenities</th>
            <th>Image</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {fetchAllHotels.length > 0 ? (
            fetchAllHotels.map((fetchHotel, index) => (
              <tr key={index}>
                <td className="htlfndr-scope-row">{fetchHotel.name}</td>
                <td data-title="Description">{fetchHotel.description}</td>
                <td data-title="City">{fetchHotel.city}</td>
                <td data-title="Address">{fetchHotel.address}</td>
                <td data-title="Rating">{fetchHotel.starRating}</td>
                <td data-title="Facilities">{fetchHotel.facilities}</td>
                <td data-title="Amenities">{fetchHotel.amenities}</td>
                <td data-title="Hotel Image">
                  <img
                    src={fetchHotel.pictureURL}
                    alt="Hotel Image"
                    style={{ width: "100px", height: "auto" }}
                  />
                </td>
                <Link to={`/update/hotel/${fetchHotel.id}`}>
                  <td data-title="Select">Select</td>
                </Link>
              </tr>
            ))
          ) : (
            <h1>No hotels found.</h1>
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

export default AllHotels;
