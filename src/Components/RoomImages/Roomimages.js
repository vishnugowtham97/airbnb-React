import React from "react";
import "./RoomImages.css";

const Roomimages = ({
  title,
  location,
  src,
  src1,
  src2,
  src3,
  src4,
  description,
}) => {
  return (
    <div className="rooms_container">
      <div className="room_info">
        <h2>{title}</h2>
        <h5>{location}</h5>
        <div className="img_container">
          <img src={src} alt="" />
          <div className="img_box">
            <img src={src1} alt="" />
            <img className="img-2" src={src2} alt="" />
            <img src={src3} alt="" />
            <img className="img-4" src={src4} alt="" />
          </div>
        </div>
        <div className="room_speciality">
          <div className="room_details">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roomimages;
