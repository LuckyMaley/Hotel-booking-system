import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Img1 from "../assets/images/top-destination-1.jpg";
import ApiService from "../components/services/ApiService";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const Rooms = () => {
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

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await ApiService.getAllRooms();

        const sortedRooms = response.sort((a, b) =>
          a.roomType.localeCompare(b.roomType)
        );

        const updatedRooms = await Promise.all(
          sortedRooms.map(async (room) => {
            try {
              const roomResponse = await ApiService.getRoomWithLowestPrice(
                room.id
              );
              const reviewsResponse = await ApiService.getRoomReviews(room.id);
              return {
                ...room,
                room: roomResponse,
                review: reviewsResponse.length,
              };
            } catch (error) {
              console.error(`Error fetching room for room ${room.id}:`, error);
              return room;
            }
          })
        );

        if (query) {
          const filteredRooms = updatedRooms.filter((room) => {
            if (type === "roomType") {
              return room.name.toLowerCase().includes(query.toLowerCase());
            }
            return true;
          });
          setRooms(filteredRooms);
        } else {
          setRooms(updatedRooms);
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, [query, type]);

  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(10);
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);

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
              <span className="htlfndr-step-description">room</span>
            </li>
            <li>
              <span className="htlfndr-step-number">3</span>
              <span className="htlfndr-step-description">payment</span>
            </li>
          </ul>
        </div>
        <div className="row">
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
                      <option value="name">Seach by Room Type</option>
                      
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
              <span>{rooms.length}</span> results found
            </h2>
            <section className="row htlfndr-search-result-content">
              {currentRooms.map((room) => (
                <div
                  key={room.id}
                  className="col-md-4 htlfndr-hotel-post-wrapper"
                >
                  <div
                    className={`htlfndr-hotel-post ${
                      room.specialOffer ? "special-offer" : ""
                    }`}
                  >
                    <Link
                      to={`/room?id=${room.id}`}
                      className="htlfndr-hotel-thumbnail"
                    >
                    <img src={Img1} alt={room.roomType} />
                    </Link>
                    <div className="htlfndr-hotel-description">
                      <div className="htlfndr-description-content">
                        <h2 className="htlfndr-entry-title">
                          <Link to={`/room?id=${room.id}`}>
                            Classic {room.roomType} Room
                          </Link>
                        </h2>
                      </div>
                      <Link
                        to={`/room?id=${room.id}`}
                        role="button"
                        className="htlfndr-select-hotel-button"
                      >
                        select
                      </Link>
                      <div className="htlfndr-hotel-price">
                        <span className="htlfndr-from">from</span>
                        <span className="htlfndr-cost">
                          R {room ? room.price : "N/A"}
                        </span>
                        <span className="htlfndr-per-night">per night</span>
                        <span className="cost">
                          R {room ? room.price : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            <nav className="htlfndr-pagination">
              <ul className="pagination">
                {[...Array(Math.ceil(rooms.length / roomsPerPage)).keys()].map(
                  (num) => (
                    <li
                      key={num + 1}
                      className={currentPage === num + 1 ? "current" : ""}
                    >
                      <Link to="#" onClick={() => paginate(num + 1)}>
                        {num + 1}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
