import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; 
import logo from "../assets/images/logo.png";
import Img1 from "../assets/images/user-picture.jpg";
import ApiService from "./services/ApiService";
import PropTypes from "prop-types";

const NavBar = ({ isLoggedIn }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null);
  const [isOwner, setIsOwner] = useState(null);
  const [isCustomer, setIsCustomer] = useState(null);
  const [userName, setUserName] = useState(null);

  const location = useLocation();

  const handleLogout = () => {
    const isLogout = window.confirm(
      "Are you sure you want to logout this user?"
    );
    if (isLogout) {
      ApiService.logout();
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const authenticated = await ApiService.isAuthenticated();
        setIsAuthenticated(authenticated);

        if (authenticated) {
          const admin = await ApiService.isAdmin();
          setIsAdmin(admin);

          const owner = await ApiService.isOwner();
          setIsOwner(owner);

          const customer = await ApiService.isCustomer();
          setIsCustomer(customer);

          const userProfile = await ApiService.getUserProfile();
          if (!userProfile) {
            if (
              !userProfile ||
              !userProfile.email ||
              !userProfile.firstName ||
              !userProfile.lastName
            ) {
              ApiService.logout();
            }
          }

          if (userProfile && userProfile.firstName && userProfile.lastName) {
            setUserName(`${userProfile.firstName} ${userProfile.lastName}`);
          } else {
            setUserName("");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [isLoggedIn]);

  return (
    <div>
      <header id="top">
        <div className="htlfndr-top-header">
          <div className="navbar navbar-default htlfndr-blue-hover-nav">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#htlfndr-first-nav"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="htlfndr-logo navbar-brand" to="/">
                  <img src={logo} alt="Logo" />
                  <p className="htlfndr-logo-text">
                    hotel <span>finder</span>
                  </p>
                </Link>
              </div>

              <div
                className="collapse navbar-collapse navbar-right"
                id="htlfndr-first-nav"
              >
                {isAuthenticated ? (
                  // If the user is logged in, show their avatar and greeting
                  <div className="htlfndr-user-signed-in">
                    <Link to="#" className="htlfndr-user-avatar">
                      <img src={Img1} alt="user avatar" />
                    </Link>
                    <h5 className="htlfndr-user-greeting">Hi, {userName} |</h5>
                    <Link to="#" onClick={handleLogout}>
                      {" "}
                      Logout
                    </Link>
                  </div>
                ) : (
                  // If the user is not logged in, show Sign In and Sign Up links
                  <ul className="nav navbar-nav htlfndr-singup-block">
                    <li id="htlfndr-singup-link">
                      <Link to="/register">
                        <span>sign up</span>
                      </Link>
                    </li>
                    <li id="htlfndr-singin-link">
                      <Link to="/login">
                        <span>sign in</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="htlfndr-under-header">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#htlfndr-main-nav"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="collapse navbar-collapse" id="htlfndr-main-nav">
                <ul className="nav navbar-nav">
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li
                    className={location.pathname === "/hotels" ? "active" : ""}
                  >
                    <NavLink to="/hotels">Hotels</NavLink>
                  </li>
                  
                  <li
                    className={
                      location.pathname === "/about-us" ? "active" : ""
                    }
                  >
                    <NavLink to="/about-us">About</NavLink>
                  </li>

                  {isAuthenticated && isCustomer && (
                    <li
                      className={
                        location.pathname === "/my-profile" ? "active" : ""
                      }
                    >
                      <NavLink to="/my-profile">My Profile</NavLink>
                    </li>
                  )}

                  {isAdmin && (
                    <li
                      className={
                        location.pathname === "/admin-page" ? "active" : ""
                      }
                    >
                      <NavLink to="/admin-page">Admin Dashboard</NavLink>
                    </li>
                  )}

                  {isOwner && (
                    <li
                      className={
                        location.pathname === "/owner-page" ? "active" : ""
                      }
                    >
                      <NavLink to="/owner-page">Owner Dashboard</NavLink>
                    </li>
                  )}
                 
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <noscript>
          <h2>You have JavaScript disabled!</h2>
        </noscript>
      </header>
    </div>
  );
};

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default NavBar;
