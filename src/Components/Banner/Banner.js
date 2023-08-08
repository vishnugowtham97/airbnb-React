import React from "react";
import "./Banner.css";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner_Search">
        <Button
          className="banner_searchButton"
          variant="outlined"
          onClick={() => navigate("/search")}
        >
          Search Dates
        </Button>
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
