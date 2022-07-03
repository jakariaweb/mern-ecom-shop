import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container">
      <div className="row banner" id="banner_main">
        <div className="col-md-12 text-left">
          <h1>
            Best computer shop <br />
            <span style={{ fontSize: "35px" }}>With best price</span>
          </h1>

          <br />
          <Link
            to="/shop"
            className="custom_button_common btn-outlined-info btn-lg"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
