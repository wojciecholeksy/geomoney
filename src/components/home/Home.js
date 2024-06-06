import React from "react";
import "./Home.css";

import Tlo from "../temporary/tlo_bank.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img className="tlo" src={Tlo} alt="Tło głóne"></img>
      <div className="right_side_home">
        <Link to="/services">
          <button className="btn_start">START</button>
        </Link>
        <Link to="/about">
          <button className="btn_about">O projekcie</button>
        </Link>
        <div className="home_title">GEOPORTAL</div>
        <div className="home_subtitle">BAZA DANYCH BANKOWYCH</div>
      </div>
      <div className="left_side_home"></div>
    </div>
  );
}

export default Home;
