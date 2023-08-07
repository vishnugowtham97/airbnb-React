import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Rooms from "./Pages/Rooms/Rooms";
import Footer from "./Components/Footer/Footer";

const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
