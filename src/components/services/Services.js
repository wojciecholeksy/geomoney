import React from "react";
import Tlo_services from "../temporary/tlo_services.jpg";
import "./Services.css";
import Services_cover from "../temporary/services_cover.jpg";
import Home_return from "../temporary/home_return.png";
import Tlo from "../temporary/tlo_bank.jpg";
import Banks from "../temporary/Group_banks.png";
import Clients from "../temporary/Group_clients.png";
import Workers from "../temporary/Group_workers.png";
import Maps from "../temporary/maps.jpg";

import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <img className="tlo_services" src={Tlo_services}></img>
      <img className="services_cover" src={Services_cover}></img>
      <div className="options">
        <Link to="/">
          <button className="btn_home">
            <img className="home_return" src={Home_return}></img>
          </button>
        </Link>
        <Link to="/">
          <button className="btn_banks">
            <img className="banks" src={Banks}></img>
            <spam className="banks_list">Lista banków</spam>
          </button>
        </Link>

        <Link to="/">
          <button className="btn_clients">
            <img className="clients" src={Clients}></img>
            <spam className="clients_list">Lista klientów</spam>
          </button>
        </Link>
        <Link to="/">
          <button className="btn_workers">
            <img className="workers" src={Workers}></img>
            <spam className="workers_list">Lista pracowników</spam>
          </button>
        </Link>
        <Link to="/map">
          <button className="btn_maps">
            <img className="maps" src={Maps}></img>
            <span className="maps_text">Mapa</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
