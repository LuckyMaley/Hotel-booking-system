import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "/src/assets/css/style.css"; // Adjust the path as necessary
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import Img6 from "../assets/images/5690083711_44634c54f8_b.jpg";
import ApiService from "../components/services/ApiService";

const EditHotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [starRating, setStarRating] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [facilities, setFacilities] = useState("");
  const [amenities, setAmenities] = useState("");
  const [newPicture, setNewPicture] = useState(null);
  const [pictureURL, setPictureURL] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  // Fetch hotel details by ID
  const fetchHotel = async () => {
    try {
      const hotel = await ApiService.getHotel(id);
      console.log(hotel.name);
      setName(hotel.name);
      setAddress(hotel.address);
      setCity(hotel.city);
      setDescription(hotel.description);
      setStarRating(hotel.starRating);
      setFacilities(hotel.facilities);
      setPictureURL(hotel.pictureURL);
      setAmenities(hotel.amenities);
      setOwnerId(hotel.hotelOwner.id);
    } catch (err) {
      setError("Error fetching hotel details.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Update hotel details
  const onUpdateHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("description", description);
    formData.append("starRating", starRating);
    formData.append("facilities", facilities);
    formData.append("amenities", amenities);
    formData.append("ownerId", ownerId);

    // Append only if a new picture is selected
    if (newPicture) {
      formData.append("pictureURL", newPicture);
    }

    try {
      const res = ApiService.getHotel(id);
      setPictureURL(res.pictureURL);
      ApiService.updateHotel(id, formData);
      alert("Hotel updated successfully.");
      navigate(`/hotel?id=${id}`); // Redirect to the list of hotels or any desired route
    } catch (err) {
      console.error("Error updating hotel:", err);
      alert("Failed to update the hotel.");
    }
  };

  useEffect(() => {
    fetchHotel();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="mb-3">Edit Hotel Details</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={newPicture ? URL.createObjectURL(newPicture) : pictureURL}
              alt="Hotel Image"
              height={200}
              width={270}
            />
            <Card.Body>
              <Form.Group controlId="starRating" className="mt-3">
                <Form.Label>Star Rating</Form.Label>

                {/* Display clickable stars */}
                <div className="mb-2">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <i
                      key={starIndex}
                      className={`fa fa-star ${
                        starIndex < starRating
                          ? "htlfndr-star-color"
                          : "text-muted"
                      }`}
                      onClick={() => setStarRating(starIndex + 1)} // Set the rating based on the clicked star
                      style={{ cursor: "pointer", marginRight: "5px" }}
                    ></i>
                  ))}
                </div>

                {/* Display any validation error */}
                {errors.starRating && (
                  <div className="invalid-feedback d-block">
                    {errors.starRating}
                  </div>
                )}
              </Form.Group>

              <Form onSubmit={onUpdateHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Hotel Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
              </Form.Group>

                <Form.Group controlId="address" className="mt-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    isInvalid={!!errors.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>


                <Form.Group controlId="description" className="mt-3">
                  <Form.Label>Description </Form.Label>
                  <Form.Control
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>


                <Form.Group controlId="facilities" className="mt-3">
                  <Form.Label>Facilities </Form.Label>
                  <Form.Control
                    type="text"
                    value={facilities}
                    onChange={(e) => setFacilities(e.target.value)}
                    isInvalid={!!errors.facilities}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.facilities}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="amenities" className="mt-3">
                  <Form.Label>Amenities </Form.Label>
                  <Form.Control
                    type="text"
                    value={amenities}
                    onChange={(e) => setAmenities(e.target.value)}
                    isInvalid={!!errors.amenities}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.amenities}
                  </Form.Control.Feedback>
                </Form.Group>
                
                {/* File Upload */}
                <Form.Group controlId="pictureURL" className="mt-3">
                  <Form.Label>Upload New Image (Optional)</Form.Label>

                  {/* Hidden field to store the previously uploaded image URL */}
                  <input type="hidden" value={pictureURL} />

                  {/* File input for uploading a new image */}
                  <Form.Control
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setNewPicture(file); // Capture new file if uploaded
                      setPictureURL(file ? file.name : pictureURL); // Update the display with the new file name or existing one
                    }}
                    isInvalid={!!errors.pictureURL}
                  />
                  <div>
                    <Button variant="success" type="submit" className="mt-4">
                      Submit
                    </Button>{" "}
                  </div>
                  <hr />
                  <div>
                    <Link to={`/public/hotels/${id}`}>
                      <Button variant="secondary" className="mt-4">
                        Cancel
                      </Button>
                    </Link>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div></div>
    </Container>
  );
};

export default EditHotelDetails;
