import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import Img5 from "../assets/images/29572el_chaise_longue_o_cheslon.jpg";

import RoomSlider from "../components/RoomSlider";

import ApiService from "../components/services/ApiService";

const HotelRoom = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id") || "";
  const [images, setImages] = useState([]);
  const [hotelRoom, setHotelRoom] = useState([]);
  const [hotelRes, setHotelRes] = useState([]);
  const [availableRooms, SetavailableRooms] = useState([]);

  useEffect(() => {
    if (!id) {
      navigate("/rooms");
    }
  }, [id, navigate]);

  useEffect(() => {
    const fetchHotelRoom = async () => {
      try {
        const response = await ApiService.getRoomById(id);
        const hotelRes = await ApiService.getHotel(response.hotel.id);
        console.log("Hotel id", hotelRes.id);
        console.log("Room id", response.id);
        setImages([response.pictureURL]); // Initialize images array

        const availableRooms = await ApiService.getAllAvailableRooms(
          hotelRes.id
        );

        availableRooms.map((room1) => {
          if (room1.id == id && room1.hotel.id == hotelRes.id) {
            setHotelRoom(room1);

            console.log("Room1", room1.hotel.id);
          }
        });

        console.log("Available", availableRooms);
        console.log("Current Room selected", availableRooms[id]);
        console.log("hotel chosen", hotelRes.name);
        // const roomResponse = await ApiService.getRoomWithLowestPrice(id);
        //const reviewsResponse = await ApiService.getHotelReviews(id);
        //commented out the above this as it was overriding the above, now displays hotel name .

        setHotelRes(hotelRes);
        SetavailableRooms(availableRooms);

        //console.log(hotelRoom.Room.roomType);
      } catch (error) {
        console.error("Error fetching hotel room data:", error);
      }
    };

    fetchHotelRoom();
  }, [hotelRoom.id]);

  return (
    <div>
      <div className="container">
        <div className="htlfndr-steps">
          <ul className="htlfndr-progress">
            <li>
              <Link to="/search-result">
                {" "}
                <span className="htlfndr-step-number">1</span>{" "}
                <span className="htlfndr-step-description">results</span>
              </Link>{" "}
            </li>
            <li>
              <Link to="/hotel-page-v1">
                {" "}
                <span className="htlfndr-step-number">2</span>{" "}
                <span className="htlfndr-step-description">hotel</span>
              </Link>{" "}
            </li>
            <li className="htlfndr-active-step">
              {" "}
              <span className="htlfndr-step-number">3</span>{" "}
              <span className="htlfndr-step-description">room</span>{" "}
            </li>
            <li>
              {" "}
              <span className="htlfndr-step-number">4</span>{" "}
              <span className="htlfndr-step-description">payment</span>
            </li>
          </ul>
        </div>
        <div className="row htlfndr-page-content htlfndr-room-page">
          <main
            id="htlfndr-main-content"
            className="col-sm-12 col-md-8 col-lg-9 htlfndr-hotel-single-content"
            role="main"
          >
            <article className="post htlfndr-room-post">
              <header>
                <h1 className="htlfndr-entry-title">
                  {" "}
                  Classic {hotelRoom.roomType} Room{" "}
                </h1>
                <Link to="/hotel-page-v1">
                  <span>/ {hotelRes.name}</span>
                </Link>
              </header>

              <RoomSlider />

              <div className="htlfndr-entry-content">
                <p>
                  Welcome to {hotelRes.name} hotel - where comfort meets
                  elegance in the heart of hospitality. Our rooms start at an
                  affordable R {hotelRoom.price} per night for a{" "}
                  {hotelRoom.roomType} bedroom, offering you both luxury and
                  more for your stay. Experience a range of exceptional
                  facilities such as {hotelRes.facilities}, designed to enhance
                  your stay, whether you are here for relaxation or business.
                  Our thoughtful amenities, including {hotelRes.amenities},
                  ensure that every detail of your visit is taken care of,
                  making your stay not only comfortable but truly memorable. We
                  look forward to hosting you and providing an experience that
                  feels like a home away from home.
                </p>
              </div>
              <footer>
                <div className="htlfndr-blue-title">
                  more availability rooms
                </div>
                <div className="htlfndr-more-avilability-rooms">
                  <>
                    {availableRooms.map((room, index) => (
                      <div key={index}>
                        <div className="htlfndr-available-room htlfndr-table-view">
                          <div className="htlfndr-hotel-thumbnail">
                            <Link to={`/room?=${room.id}`}>
                              <img src={Img5} alt="available room" />
                            </Link>
                          </div>
                          <div className="htlfndr-hotel-info">
                            <h6 className="htlfndr-post-title">
                              <Link to={`/room?id=${room.id}`}>
                                <h6>{room.roomType} room</h6>
                              </Link>
                            </h6>
                            <p>per night</p>
                            <span className="htlfndr-cost-normal">
                              R {room.price}
                            </span>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </>
                </div>
              </footer>
            </article>
          </main>
          <aside
            id="htlfndr-right-sidebar"
            className="col-sm-12 col-md-4 col-lg-3 htlfndr-sidebar htlfndr-sidebar-in-right"
            role="complementary"
          >
            <p className="htlfndr-add-to-wishlist">
              <Link to="#">
                <i className="fa fa-plus"></i> Add to Wishlist
              </Link>
            </p>
            <div className="widget htlfndr-hotel-visit-card">
              <div className="htlfndr-widget-main-content htlfndr-widget-padding">
                <div className="htlfndr-hotel-logo">
                  {" "}
                  <img
                    src={hotelRes.pictureURL}
                    alt="Hotel logo"
                    height={200}
                  />{" "}
                </div>
                <div className="htlfndr-hotel-price">
                  {" "}
                  <span>price</span> <span> for 1 night</span>{" "}
                  <span className="htlfndr-cost">R {hotelRoom.price}</span>{" "}
                </div>
              </div>
            </div>
            <form action="/payment">
              {" "}
              <input
                className="htlfndr-book-now-button"
                type="submit"
                value="book now"
              />{" "}
            </form>
            <div className="widget htlfndr-room-details">
              <div
                id="htlfndr-accordion-1"
                className="htlfndr-widget-main-content htlfndr-widget-padding"
              >
                <h2 className="widget-title htlfndr-accordion-title">
                  room details
                </h2>
                <div className="htlfndr-accordion-inner">
                  <p className="htlfndr-details">
                    <span>beds:</span> <span>1 double or 2 twin</span>
                  </p>
                  <p className="htlfndr-details">
                    <span>floor area:</span>{" "}
                    <span>
                      19m<sup>2</sup>
                    </span>
                  </p>
                  <p className="htlfndr-details">
                    <span>max guests:</span> <span>7</span>
                  </p>
                  <p className="htlfndr-details">
                    <span>max kids:</span> <span>3</span>
                  </p>

                  <ul className="htlfndr-details-list">
                    <li>{hotelRes.amenities}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="widget htlfndr-room-details">
              <form action="/payment">
                <div
                  id="htlfndr-accordion-2"
                  className="htlfndr-widget-main-content htlfndr-widget-padding"
                >
                  <h2 className="widget-title htlfndr-accordion-title">
                    extra service
                  </h2>
                  <div className="htlfndr-accordion-inner">
                    <div className="col-xs-6 col-sm-6 col-md-12 htlfndr-check-row"></div>
                    <div className="col-xs-6 col-sm-6 col-md-12 htlfndr-check-row">
                      <p>
                        <label className="switch-label-check">
                          <input
                            type="checkbox"
                            id="htlfndr-check-breakfast"
                            name="htlfndr-check-breakfast"
                            disabled="disabled"
                            checked="checked"
                            style={{ display: "none" }}
                          />
                          <span className="switch"></span>
                        </label>
                        <label
                          htmlFor="htlfndr-check-breakfast"
                          className="label-of-disabled-check"
                        >
                          breakfast
                        </label>
                      </p>
                      <p>
                        <label className="switch-label-check">
                          <input
                            type="checkbox"
                            id="htlfndr-check-flowers"
                            name="htlfndr-check-flowers"
                            disabled="disabled"
                            checked="checked"
                            style={{ display: "none" }}
                          />
                          <span className="switch"></span>
                        </label>
                        <label
                          htmlFor="htlfndr-check-flowers"
                          className="label-of-disabled-check"
                        >
                          flowers
                        </label>
                      </p>
                    </div>
                    <div className="clearfix"></div>
                    <p className="htlfndr-info">
                      Hotel Info:
                      <span>
                        <i className="fa fa-phone"></i> (000)-000-000-000
                      </span>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HotelRoom;
