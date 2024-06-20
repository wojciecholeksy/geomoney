import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HomeButton } from "../services/Services";
import DetailsCard from "./Banks_card";
// import "./Details_banks.css";
import Return_home_2 from "../temporary/return_home_2.png";
import { Link } from "react-router-dom";

function Details_banks() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

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
          setPerson(bank.properties);
        }
      } catch (error) {
        // Handle error silently
      }
    };

    fetchBank();
  }, [id]);

  if (!person) {
    return null;
  }

  return (
    <div className="details_bank_page">
      <div className="home_btn">
        <HomeButton />
        <Link to="/services/dashboard/banks">
          <button className="btn_home_2">
            <img
              className="return_home_2"
              src={Return_home_2}
              alt="Przycisk powrotny"
            ></img>
          </button>
        </Link>
      </div>
      <div className="details">
        <h1 className="details_title">SZCZEGÓŁY NA TEMAT PRACOWNIKA</h1>
        <div className="details_bank">
          <DetailsCard
            name={person.name}
            image={person.image}
            adress={person.adress}
          />
        </div>
        <div>
          <p>Dodatkowa zawartość strony</p>
        </div>
      </div>
    </div>
  );
}

export default Details_banks;
