import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { HomeButton } from "../services/Services";
import DetailsCard from "./Banks_card";
import "./Details_banks.css";
import Return_home_2 from "../temporary/return_home_2.png";
import { Link } from "react-router-dom";

function Details_banks() {
  const { id } = useParams();
  const [bank, setBank] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBank = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3ABanki&maxFeatures=50&outputFormat=application%2Fjson`
        );
        const bank = response.data.features.find(
          (b) => b.id === id || b.properties.id === parseInt(id)
        );
        if (bank) {
          setBank(bank.properties);
        }
      } catch (error) {
        // Handle error silently
      }
    };

    fetchBank();
  }, [id]);

  const handleViewOnMap = () => {
    navigate(`/services/map?objectId=${id}`);
  };

  if (!bank) {
    return null;
  }

  return (
    <div className="details_bank_page">
      <div className="home_btn">
        <HomeButton />
        <Link to="/services/dashboard/banks">
          <img
            className="return_home_2"
            src={Return_home_2}
            alt="Przycisk powrotny"
          ></img>
        </Link>
      </div>
      <div className="details">
        <h1 className="details_title">SZCZEGÓŁY NA TEMAT BANKU</h1>
        <div className="details_bank">
          <DetailsCard
            name={bank.name}
            image={bank.image}
            adress={bank.adress}
          />
          <button onClick={handleViewOnMap} className="view_on_map_btn">
            Zobacz na mapie
          </button>
        </div>
        <div>
          <p>Dodatkowa zawartość strony</p>
        </div>
      </div>
    </div>
  );
}

export default Details_banks;
