// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Error,
  Landing,
  About,
  ContactUs,
  Thanks,
  Rooms,
  AddRoom,
  AddHotel,
  AllHotels,
  EditHotel,
  EditRoom,
  AllBookings,
  AllReviews,
  ComingSoon,
  // Blog,
  // BlogSingle,
  //Elements,
  // HotelV1,
  // HotelV2,
  // HotelV3,
  // HotelV4,
  HotelRoom,
  // HotelRoomSpecialOffer,
  // Payment,
  // SearchResult,
  // SearchResultV2,
  // SearchResultV3,
  // SearchRooms,
  // UserProfile,
  // SignIn,
  // SignUp,
  Login,
  Register,
  Hotels,
  Hotel,
  Booking,
  MyProfile,
} from "./pages";
import AdminPage from "./pages/Admin";
import HotelOwner from "./pages/HotelOwners";
import OwnerPage from "./pages/Owner.jsx";
import GlobalCharges from "./pages/GlobalCharges";
import PrivateRoute from "./components/PrivateRoute";
import { CustomerRoute } from "./components/services/guard.jsx";
import AllRooms from "./pages/AllRooms.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home isLoggedIn={isLoggedIn} />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "coming-soon",
          element: <ComingSoon />,
        },
        {
          path: "guest-reviews/coming-soon",
          element: <ComingSoon />,
        },
        {
          path: "hotels",
          element: <Hotels />,
        },
        {
          path: 'booking',
          element: <Booking />
        },
        {
          path: "manage-hotels",
          element: <AllHotels />,
        },
        {
          path: "guest-reviews",
          element: <AllReviews />,
        },
        {
          path: "guest-bookings",
          element: <AllBookings />,
        },
        {
          path: "manage-rooms",
          element: <AllRooms />,
        },
        {
          path: "hotel",
          element: <Hotel />,
        },
        {
          path: "update/hotel/:id",
          element: <EditHotel />,
        },
        {
          path: "update/room/:id",
          element: <EditRoom />,
        },
        {
          path: "add/hotel",
          element: <AddHotel />,
        },

        {
          path: "my-profile",
          element: <CustomerRoute component={MyProfile} />,
        },

        {
          path: "about-us",
          element: <About />,
        },

        {
          path: "contact-us",
          element: <ContactUs />,
        },

        {
          path: "rooms",
          element: <Rooms />,
        },
        {
          path: "room",
          element: <HotelRoom />,
        },
        {
          path: "add/room",
          element: <AddRoom />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "thanks",
          element: <CustomerRoute component={Thanks} />,
        },

        // {
        //   path: 'blog-index',
        //   element: <Blog />
        // },
        // {
        //   path: 'blog-single',
        //   element: <BlogSingle />
        //  },
        // {
        //   path: "elements",
        //   element: <Elements />,
        // },
        // {
        //   path: 'hotel-page-v1',
        //   element: <HotelV1 />
        // },
        // {
        //   path: 'hotel-page-v2',
        //   element: <HotelV2 />
        // },
        // {
        //   path: 'hotel-page-v3',
        //   element: <HotelV3 />
        // },
        // {
        //   path: 'hotel-page-v4',
        //   element: <HotelV4 />
        // },
        // {
        //   path: 'hotel-room-page',
        //   element: <HotelRoom />
        // },
        // {
        //   path: 'hotel-room-page-special-offer',
        //   element: <HotelRoomSpecialOffer />
        // },
        // {
        //   path: 'payment',
        //   element: <Payment />
        // },
        // {
        //   path: 'search-result',
        //   element: <SearchResult />
        // },
        // {
        //   path: 'search-result-v-2',
        //   element: <SearchResultV2 />
        // },
        // {
        //   path: 'search-result-v-3',
        //   element: <SearchResultV3 />
        // },
        // {
        //   path: 'search-rooms',
        //   element: <SearchRooms />
        // },
        // {
        //   path: 'user-page',
        //   element: <UserProfile />
        // },
        // {
        //   path: 'sign-in',
        //   element: <SignIn />
        // },
        // {
        //   path: 'sign-up',
        //   element: <SignUp  />
        // },
        {
          path: "login",
          element: <Login setIsLoggedIn={setIsLoggedIn} />,
        },
        {
          path: "register",
          element: <Register setIsLoggedIn={setIsLoggedIn} />,
        },
        {
          path: "admin-page",
          element: (
            <PrivateRoute role="ADMIN">
              <AdminPage />
            </PrivateRoute>
          ),
        },
        {
          path: "owner-page",
          element: (
            <PrivateRoute role="OWNER">
              <OwnerPage />
            </PrivateRoute>
          ),
        },
        {
          path: "owner-overview",
          element: (
            <PrivateRoute role="ADMIN">
              <HotelOwner />
            </PrivateRoute>
          ),
        },
        {
          path: "global-charges",
          element: (
            <PrivateRoute role="ADMIN">
              <GlobalCharges />
            </PrivateRoute>
          ),
        },
        // {
        //   path: "404-page",
        //   element: <Error />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
