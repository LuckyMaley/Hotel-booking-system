import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import ApiService from "../components/services/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const AllReviews = () => {
  const [fetchAllReviews, setFetchReviews] = useState([]);

  const fetchReviews = async () => {
    const userData = await ApiService.getUserProfile();
    const owner = await ApiService.getOwnerByEmail(userData.email);
    const hotels = await ApiService.getHotelsByOwnerID(owner.id);
    const reviews = await ApiService.getAllHotelReviews();

    console.log("All", reviews);
    // Now filter the reviews based on the hotel IDs
    const relatedReviews = reviews.filter((review) =>
      hotels.some((hotel) => hotel.id === review.hotelId)
    );

    // Now you can use relatedReviews as needed

    console.log("Related Reviews:", relatedReviews);

    setFetchReviews(Array.isArray(relatedReviews) ? relatedReviews : []);
    // console.log("in all", hotels);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="htlfndr-elements-content" id="htlfndr-tables">
      <h3 className="htlfndr-font-24">
        <b>All Reviews</b>
      </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Comment</th>
            <th>Rating</th>
            <th>Customer ID</th>
            <th>Hotel ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fetchAllReviews.length > 0 ? (
            fetchAllReviews.map((review, index) => (
              <tr key={index}>
                <td data-title="Title">{review.title}</td>
                <td data-title="Comment">{review.comment}</td>
                <td data-title="Rating">{review.rating}</td>
                <td data-title="Customer ID">{review.customerId}</td>
                <td data-title="Hotel ID">{review.hotelId}</td>
                <td>
                  <Link to="/coming-soon">
                    <FontAwesomeIcon icon={faReply} /> Reply
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                <h1>No reviews found.</h1>
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

export default AllReviews;
