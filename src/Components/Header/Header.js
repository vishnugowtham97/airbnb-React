import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div>
      <header class="header">
        <div class="logo">
          <Link to="/">
            <i class="fab fa-airbnb"></i>
            <span class="logo-text">airbnb</span>
          </Link>
        </div>
        <div className="header_center">
          <input type="text" />
          <SearchIcon color="primary" />
        </div>

        <div className="header_right">
          <p>Become a host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
      </header>
    </div>
  );
};

export default Header;
