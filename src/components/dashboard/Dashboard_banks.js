import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "./Card";
import { Link } from "react-router-dom";
import { HomeButton } from "../services/Services";
import Return_home_2 from "../temporary/return_home_2.png";

function Dashboard_banks() {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3ABanki&maxFeatures=50&outputFormat=application%2Fjson"
        );
        const banksData = response.data.features.map((f) => ({
          id: f.id,
          ...f.properties,
        }));
        setBanks(banksData);
      } catch (error) {
        // Handle error silently
      }
    };

    fetchBanks();
  }, []);

  return (
    <div className="home_btn">
      <HomeButton />
      <Link to="/services">
        <button className="btn_home_2">
          <img
            className="return_home_2"
            src={Return_home_2}
            alt="Przycisk powrotny"
          ></img>
        </button>
      </Link>
      <div
        className="tiled_banks_list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {banks.map((item) => (
          <Link
            to={`/services/dashboard/banks/details/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none" }}
          >
            <MediaCard
              name={item.name}
              surname={item.surname}
              image={item.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard_banks;
