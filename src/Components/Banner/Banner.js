import { useState } from "react";
import React from "react";
import "./Banner.css";

import { Button } from "@mui/material";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner_Search">
        <Button
          className="banner_searchButton"
          variant="outlined"
          onClick={() => setShowSearch((prev) => !prev)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="info_banner">
        <h2>Get out and Stretch Your Imagination</h2>
        <h5>
          Plan a different Kind of getaway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined" onClick={() => navigate("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
