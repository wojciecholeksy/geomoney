import React from "react";
import "./Home.css";
import Bank from "../temporary/img_bank.png";
import Tlo from "../temporary/tlo_bank.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img className="tlo" src={Tlo}></img>
      <div className="right_side_home">
        <Link to="/services">
          <button className="btn_start">START</button>
        </Link>
        <div className="btn_about">O projekcie</div>
        <div className="home_title">GEOPORTAL</div>
        <div className="home_subtitle">BAZA DANYCH BANKOWYCH</div>
      </div>
      <div className="left_side_home"></div>
    </div>
  );
}

export default Home;
