import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Img1 from "../assets/images/top-destination-1.jpg";
import ApiService from "../components/services/ApiService";

const Hotels = () => {
  const [selectedOption, setSelectedOption] = useState("name");
  const [textValue, setTextValue] = useState("name");
  const [searchString, setSearchString] = useState("");
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const type = searchParams.get("type") || "name";

  useEffect(() => {
    setSelectedOption(type);
    setSearchString(query);

    if (type === "name") {
      setTextValue("name");
    } else if (type === "city") {
      setTextValue("city");
    }
  }, [query, type]);

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);

    if (selected === "name") {
      setTextValue("name");
    } else if (selected === "city") {
      setTextValue("city");
    }
  };

  const handleSearchString = (e) => {
    setSearchString(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchString) {
      setSearchParams({ query: searchString, type: selectedOption });
    } else {
      setError("Nothing to search, please enter a search string");
    }
  };

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await ApiService.getHotels();

        const sortedHotels = response.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        const updatedHotels = await Promise.all(
          sortedHotels.map(async (hotel) => {
            try {
              const roomResponse = await ApiService.getRoomWithLowestPrice(
                hotel.id
              );
              const reviewsResponse = await ApiService.getHotelReviews(
                hotel.id
              );
              return {
                ...hotel,
                room: roomResponse,
                review: reviewsResponse.length,
              };
            } catch (error) {
              console.error(
                `Error fetching room for hotel ${hotel.id}:`,
                error
              );
              return hotel;
            }
          })
        );

        if (query) {
          const filteredHotels = updatedHotels.filter((hotel) => {
            if (type === "name") {
              return hotel.name.toLowerCase().includes(query.toLowerCase());
            } else if (type === "city") {
              return hotel.city.toLowerCase().includes(query.toLowerCase());
            }
            return true;
          });
          setHotels(filteredHotels);
        } else {
          setHotels(updatedHotels);
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, [query, type]);

  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(10);
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = hotels.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container">
        <div className="htlfndr-steps">
          <ul className="htlfndr-progress">
            <li className="htlfndr-active-step">
              <span className="htlfndr-step-number">1</span>
              <span className="htlfndr-step-description">results</span>
            </li>
            <li>
              <span className="htlfndr-step-number">2</span>
              <span className="htlfndr-step-description">hotel</span>
            </li>
            <li>
              <span className="htlfndr-step-number">3</span>
              <span className="htlfndr-step-description">booking</span>
            </li>
          </ul>
        </div>
        <div className="row">
          {error ? <p>{error}</p> : ""}
          <aside
            className="col-sm-4 col-md-3 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-left"
            role="complementary"
          >
            <div className="htlfndr-modify-search-aside widget">
              <h3 className="widget-title">modify search</h3>
              <div
                className="htlfndr-widget-content"
                style={{ padding: "20px" }}
              >
                <form name="search-hotel" id="search-hotel">
                  <div id="htlfndr-input-1" className="htlfndr-input-wrapper">
                    {" "}
                    <input
                      type="text"
                      name="htlfndr-city"
                      id="htlfndr-city"
                      className="search-hotel-input"
                      value={searchString}
                      onChange={handleSearchString}
                      placeholder={`Enter ${textValue}`}
                    />
                  </div>
                  <br />
                  <div className="htlfndr-input-wrapper">
                    {" "}
                    <label htmlFor="htlfndr-dropdown" className="sr-only">
                      Search by Name or City
                    </label>{" "}
                    <select
                      name="htlfndr-dropdown"
                      id="htlfndr-dropdown"
                      className="htlfndr-dropdown ui-selectmenu-button ui-widget ui-corner-all"
                      value={selectedOption}
                      onChange={handleSelectChange}
                    >
                      <option value="name">Seach by name</option>
                      <option value="city">Search by city</option>
                    </select>{" "}
                  </div>
                  <div id="htlfndr-input-5">
                    {" "}
                    <input
                      type="submit"
                      value="search"
                      onClick={handleSearch}
                    />{" "}
                  </div>
                </form>
              </div>
            </div>
          </aside>
          <main
            className="col-sm-8 col-md-9 col-lg-9 htlfndr-search-result htlfndr-grid-view"
            role="main"
          >
            <h2 className="htlfndr-search-result-title">
              <span>{hotels.length}</span> results found
            </h2>
            <section className="row htlfndr-search-result-content">
              {currentHotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="col-md-4 htlfndr-hotel-post-wrapper"
                >
                  <div
                    className={`htlfndr-hotel-post ${
                      hotel.specialOffer ? "special-offer" : ""
                    }`}
                  >
                    <Link
                      to={`/hotel?id=${hotel.id}`}
                      className="htlfndr-hotel-thumbnail"
                    >
                      <img src={hotel.pictureURL || Img1} style={{width:'260px', height:'174px'}} alt={hotel.name} />
                    </Link>
                    <div className="htlfndr-hotel-description">
                      <div className="htlfndr-description-content">
                        <h2 className="htlfndr-entry-title">
                          <Link to={`/hotel?id=${hotel.id}`}>{hotel.name}</Link>
                        </h2>
                        <div className="htlfndr-rating-stars">
                          {[...Array(5)].map((_, index) => (
                            <i
                              key={index}
                              className={`fa fa-star ${
                                index < hotel.starRating
                                  ? "htlfndr-star-color"
                                  : ""
                              }`}
                            ></i>
                          ))}{" "}
                          <span> </span>
                          <span className="htlfndr-hotel-location">
                            ({hotel.review} reviews)
                          </span>
                        </div>

                        <h5 className="htlfndr-hotel-location">
                          <Link to="#">
                            <i className="fa fa-map-marker"></i>
                            {hotel.city}
                          </Link>
                        </h5>
                      </div>
                      <Link
                        to={`/hotel?id=${hotel.id}`}
                        role="button"
                        className="htlfndr-select-hotel-button"
                      >
                        select
                      </Link>
                      <div className="htlfndr-hotel-price">
                        {hotel.specialOffer && (
                          <span className="htlfndr-special">Special offer</span>
                        )}
                        <span className="htlfndr-from">from</span>
                        <span className="htlfndr-cost">
                          R {hotel.room ? hotel.room.price : "N/A"}
                        </span>
                        <span className="htlfndr-per-night">per night</span>
                        <span className="cost">
                          R {hotel.room ? hotel.room.price : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            <nav className="htlfndr-pagination">
              <ul className="pagination">
                {[
                  ...Array(Math.ceil(hotels.length / hotelsPerPage)).keys(),
                ].map((num) => (
                  <li
                    key={num + 1}
                    className={currentPage === num + 1 ? "current" : ""}
                  >
                    <Link to="#" onClick={() => paginate(num + 1)}>
                      {num + 1}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
