import React from "react";
import { useParams } from "react-router-dom";
import MediaCard from "./Card";
import { input_list } from "./Dashboard_clients"; // Import danych
import { HomeButton } from "../services/Services";
import "./Dashboard_clients.css";

function Dashboard_clients() {
  return (
    <div className="home_btn">
      <HomeButton />
      <div className="tiled_clients_list">
        {/* Tutaj umieść kod do renderowania listy klientów */}
      </div>
    </div>
  );
}

export default Dashboard_clients;
