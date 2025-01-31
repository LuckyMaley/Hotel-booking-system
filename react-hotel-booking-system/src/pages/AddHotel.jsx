import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "/src/assets/css/style.css"; // Adjust the path as necessary
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import Img6 from "../assets/images/5690083711_44634c54f8_b.jpg";
import ApiService from "../components/services/ApiService";

const AddHotel = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [starRating, setStarRating] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [facilities, setFacilities] = useState("");
  const [amenities, setAmenities] = useState("");
  const [pictureURL, setPictureURL] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(false); // Set loading to false initially
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  // Update hotel details
  const onSubmitHandler = async (e) => {
    console.log(user);
    e.preventDefault();
    const createdHotelData = {
      name,
      address,
      city,
      description,
      starRating,
      facilities,
      amenities,
      ownerId, // Assuming ownerId is derived from the URL param
    };

    const formData = new FormData();

    // Append each property from createdHotelData
    Object.keys(createdHotelData).forEach((key) => {
      formData.append(key, createdHotelData[key]);
    });

    if (pictureURL) {
      formData.append("pictureURL", pictureURL); // Ensure you only append if pictureURL is valid
    }

    try {
      setLoading(true); // Set loading to true when starting the request
      await ApiService.addHotel(formData);
      alert("Hotel created successfully.");
      navigate("/hotels"); // Redirect to the list of hotels or any desired route
    } catch (err) {
      console.error("Error creating hotel:", err);
      alert("Failed to create the hotel.");
      setErrors(err.response?.data?.errors || {});
    } finally {
      setLoading(false); // Set loading to false after request completion
    }

    const userData = ApiService.getUserProfile();
    console.log(userData);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await ApiService.getUserProfile();
        const owner = await ApiService.getOwnerByEmail(userData.email);

        setOwnerId(owner.id);

        console.log("details ID", owner.id);
        console.log(userData.email);
        console.log("hotelOwner", owner);
      } catch (error) {
        console.error("Error fetching user data:", error.message || error);
      }
    };

    fetchUserData();
  }, []);

  // Removed loading check, as it's unnecessary in this context
  if (error) return <p>{error}</p>;

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form
            className="p-4 border rounded shadow"
            onSubmit={onSubmitHandler}
          >
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold fs-5">Add Hotel</Form.Label>
            </Form.Group>

            <hr />

            <Form.Group controlId="name">
              <Form.Label>Hotel Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!errors.name}
                placeholder="Enter hotel name"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="city" className="mt-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                isInvalid={!!errors.city}
                placeholder="Enter city"
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="address" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                isInvalid={!!errors.address}
                placeholder="Enter address"
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="description" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                isInvalid={!!errors.description}
                placeholder="Enter description"
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="facilities" className="mt-3">
              <Form.Label>Facilities</Form.Label>
              <Form.Control
                type="text"
                value={facilities}
                onChange={(e) => setFacilities(e.target.value)}
                isInvalid={!!errors.facilities}
                placeholder="Enter facilities"
              />
              <Form.Control.Feedback type="invalid">
                {errors.facilities}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="amenities" className="mt-3">
              <Form.Label>Amenities</Form.Label>
              <Form.Control
                type="text"
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                isInvalid={!!errors.amenities}
                placeholder="Enter amenities"
              />
              <Form.Control.Feedback type="invalid">
                {errors.amenities}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="pictureURL" className="mt-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setPictureURL(e.target.files[0])}
                isInvalid={!!errors.pictureURL}
              />
              <Form.Control.Feedback type="invalid">
                {errors.pictureURL}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="starRating" className="mt-3">
              <Form.Label>Star Rating</Form.Label>
              <div className="mb-2">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <i
                    key={starIndex}
                    className={`fa fa-star ${
                      starIndex < starRating
                        ? "htlfndr-star-color"
                        : "text-muted"
                    }`}
                    onClick={() => setStarRating(starIndex + 1)}
                    style={{ cursor: "pointer", marginRight: "5px" }}
                  ></i>
                ))}
              </div>
              {errors.starRating && (
                <div className="invalid-feedback d-block">
                  {errors.starRating}
                </div>
              )}
            </Form.Group>

            <hr />

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddHotel;
