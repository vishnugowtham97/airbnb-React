import React from "react";
import "./SiteFooter.css";

const SiteFooter = () => {
  return (
    <div className="sitefooter">
      <div className="sitefooter_info">
        <div className="support">
          <h4>Support</h4>
          <p>Help center</p>
          <p>AirCover</p>
          <p>Combating discrimption</p>
          <p>Supporting people with disabilities</p>
          <p>Cancellation option</p>
          <p>Report neighbourhood concern</p>
        </div>
        <div className="support">
          <h4>Hosting</h4>
          <p>Airbnb your home</p>
          <p>AirCover for Hosts</p>
          <p>Hosting resources</p>
          <p>Community forum</p>
          <p>Hosting responsibly</p>
        </div>
        <div className="support">
          <h4>Airbnb</h4>
          <p>Newsroom</p>
          <p>New features</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Airbnb.org disaster relief</p>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
