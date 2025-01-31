import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "/src/assets/css/style.css"; // Adjust the path as necessary
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import Img6 from "../assets/images/5690083711_44634c54f8_b.jpg";

const EditRoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [price, setPrice] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  // Fetch room details by ID
  const fetchRoom = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/public/rooms/${id}`
      );
      const room = response.data.Room;
      console.log(room);
      console.log(room.hotel.id);
      setRoomType(room.roomType);
      setOccupancy(room.occupancy);
      setPrice(room.price);
      setHotelId(room.hotel.id);
    } catch (err) {
      setError("Error fetching room details.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Update room details
  const onUpdateHandler = async (e) => {
    e.preventDefault();
    const updatedRoomData = {
      roomType,
      occupancy,
      price,
      hotelId,
    };

    try {
      //const token = "dummyToken12345";

      await axios.put(
        `http://localhost:8080/api/public/room/${id}`,
        updatedRoomData,
        {}
      );
      alert("Room updated successfully.");
      navigate("/"); // Redirect to the list of rooms or any desired route
    } catch (err) {
      console.error("Error updating room:", err);
      alert("Failed to update the room.");
    }
  };

  useEffect(() => {
    fetchRoom();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="mb-3">Edit Room Details</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img variant="top" src={Img6} alt="Room Image" />
            <Card.Body>
              <Form onSubmit={onUpdateHandler}>
                <Form.Group controlId="roomType">
                  <Form.Label>Room Type</Form.Label>
                  <Form.Control
                    type="text"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    isInvalid={!!errors.roomType}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.roomType}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="occupancy" className="mt-3">
                  <Form.Label>Occupancy</Form.Label>
                  <Form.Control
                    type="text"
                    value={occupancy}
                    onChange={(e) => setOccupancy(e.target.value)}
                    isInvalid={!!errors.occupancy}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.occupancy}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="price" className="mt-3">
                  <Form.Label>Price (R)</Form.Label>
                  <Form.Control
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    isInvalid={!!errors.price}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.price}
                  </Form.Control.Feedback>
                </Form.Group>
                <Link to={`/manage-rooms`}>
                  <Button variant="success" type="submit" className="mt-4">
                    Submit
                  </Button>{" "}
                </Link>
                <hr />
                <div>
                  <Link to={`/manage-rooms`}>
                    <Button variant="secondary" className="mt-4">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div></div>
    </Container>
  );
};

export default EditRoomDetails;
