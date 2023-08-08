import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Appartment from "./Pages/Rooms/Appartment";
import Villa from "./Pages/Rooms/Villa";
import House from "./Pages/Rooms/House";
import Privatestay from "./Pages/Rooms/Privatestay";
import Palace from "./Pages/Rooms/Palace";
import Guesthouse from "./Pages/Rooms/Guesthouse";
import Footer from "./Components/Footer/Footer";

const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/appartment" element={<Appartment />} />
        <Route path="/villa" element={<Villa />} />
        <Route path="/house" element={<House />} />
        <Route path="/privatestay" element={<Privatestay />} />{" "}
        <Route path="/palace" element={<Palace />} />
        <Route path="/guesthouse" element={<Guesthouse />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
