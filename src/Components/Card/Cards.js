import React from "react";
import "./Cards.css";

const Cards = ({ src, title, description, price }) => {
  return (
    <div className="card">
      <img src={src} alt="card-img" />
      <div className="card-info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Cards;
