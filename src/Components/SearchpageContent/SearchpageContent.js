import React from "react";
import "./SearchpageContent.css";

import { FavoriteBorder, Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchpageContent = ({
  src,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const navigate = useNavigate();
  return (
    <div className="searchpage-content">
      <img src={src} alt="" />
      <FavoriteBorder className="searchpage_heart" />
      <div className="searchpage_info">
        <div className="searchpage_infotop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>______</p>
          <p>{description}</p>
        </div>
        <div className="searchpage_infobottom">
          <div className="searchpage_star">
            <Star className="searchpage_stars" />
            <p>
              <strong>{star}</strong>
            </p>
            <Button variant="outlined" onClick={() => navigate("/rooms")}>
              View
            </Button>
          </div>
          <div className="searchpage_prices">
            <h3>{price}</h3>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchpageContent;
