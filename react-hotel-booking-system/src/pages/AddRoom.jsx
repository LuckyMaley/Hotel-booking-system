import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "/src/assets/css/style.css";
import { Card } from "react-bootstrap";
import ApiService from "../components/services/ApiService";

const AddRoom = () => {
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await ApiService.addRoom(createRoom)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
        alert("Room created successfully.");
        navigate("/rooms");
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Room not  created, please make sure all credentials are correct"
        );
        setErrors(err.res.data.errors);
      });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await ApiService.getUserProfile();
        const owner = await ApiService.getOwnerByEmail(userData.email);
        const hotel = await ApiService.getHotelByOwnerID(owner.id);

        setHotelId(hotel.id);

        console.log("details ID", hotel.id);
        console.log(userData.email);
        console.log("hotelOwner", owner);
      } catch (error) {
        console.error("Error fetching user data:", error.message || error);
      }
    };

    fetchUserData();
  }, []);

  const createRoom = {
    roomType,
    price,
    occupancy,
    hotelId,
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="bg-light shadow-lg rounded-3">
            <Card.Body className="p-5">
              <Row className="mt-4">
                <Col lg={12} className="text-center">
                  <p className="lead fs-3 text-muted">Add a New Room</p>
                </Col>
              </Row>

              <Row>
                <Col className="d-flex justify-content-between align-items-center">
                  <Link to={"/rooms"}>
                    <Button onClick={onSubmitHandler} variant="outline-dark">
                      Home
                    </Button>
                  </Link>
                </Col>
              </Row>

              <Row>
                <Col lg={8} className="mx-auto">
                  <Form onSubmit={onSubmitHandler}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fs-5 text-dark">
                        Room Type
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter room type"
                        onChange={(e) => setRoomType(e.target.value)}
                        value={roomType}
                      />
                      {errors.roomType && (
                        <small className="text-danger">
                          {errors.roomType.message}
                        </small>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fs-5 text-dark">
                        Occupancy
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter occupancy"
                        onChange={(e) => setOccupancy(e.target.value)}
                        value={occupancy}
                      />
                      {errors.occupancy && (
                        <small className="text-danger">
                          {errors.occupancy.message}
                        </small>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fs-5 text-dark">
                        Price (R)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                      />
                      {errors.price && (
                        <small className="text-danger">
                          {errors.price.message}
                        </small>
                      )}
                    </Form.Group>

                    <div className="text-center">
                      <Button
                        type="submit"
                        variant="success"
                        className="fs-5 w-50"
                      >
                        Add Room
                      </Button>
                      {success && (
                        <div className="alert alert-success" role="alert">
                          Hotel created successfully.
                        </div>
                      )}
                    </div>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddRoom;
