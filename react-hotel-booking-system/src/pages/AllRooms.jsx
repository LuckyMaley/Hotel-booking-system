import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import ApiService from "../components/services/ApiService";

const AllRooms = () => {
  const [fetchAllRooms, setFetchRooms] = useState([]);

  const fetchRooms = async () => {
    const userData = await ApiService.getUserProfile();
    const owner = await ApiService.getOwnerByEmail(userData.email);
    const rooms = await ApiService.getRoomsByOwnerID(owner.id);

    setFetchRooms(Array.isArray(rooms) ? rooms : []);
    console.log("in all", rooms);
    setFetchRooms(rooms);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="htlfndr-elements-content" id="htlfndr-tables">
      <h3 className="htlfndr-font-24">
        <b>All Rooms</b>
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Occupancy</th>
            <th>Price</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {fetchAllRooms.map((fetchRoom, index) => (
            <tr key={index}>
              <td data-title="Description">{fetchRoom.roomType}</td>
              <td data-title="City">{fetchRoom.occupancy}</td>
              <td data-title="Address">{fetchRoom.price}</td>
         
              <Link to={`/update/room/${fetchRoom.id}`}>
                <td data-title="Select">Select</td>
              </Link>
            </tr>
          ))}
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

export default AllRooms;
