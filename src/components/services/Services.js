import React from "react";
import Tlo_services from "../temporary/tlo_services.jpg";
import "./Services.css";
import Services_cover from "../temporary/services_cover.jpg";
import Home_return from "../temporary/home_return.png";
import Tlo from "../temporary/tlo_bank.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <img className="tlo_services" src={Tlo_services}></img>
      <img className="services_cover" src={Services_cover}></img>

      <Link to="/home">
        <button className="btn_home">Home_return</button>
      </Link>
      {/* <img className="home_return" src={Home_return}></img> */}
    </div>
  );
}

export default Services;
