import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HomeButton } from "../services/Services";
import DetailsCard from "./Workers_card";
import "./Details_workers.css";
import Return_home_2 from "../temporary/return_home_2.png";
import { Link } from "react-router-dom";

function Details_workers() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3APracownicy&maxFeatures=50&outputFormat=application%2Fjson`
        );
        const worker = response.data.features.find(
          (w) => w.id === id || w.properties.id === parseInt(id)
        );
        if (worker) {
          setPerson(worker.properties);
        }
      } catch (error) {
        // Handle error silently
      }
    };

    fetchWorker();
  }, [id]);

  if (!person) {
    return null;
  }

  return (
    <div className="details_worker_page">
      <div className="home_btn">
        <HomeButton />
        <Link to="/services/dashboard/workers">
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
        <div className="details_worker">
          <DetailsCard
            name={person.name}
            surname={person.surname}
            content={person.content}
            image={person.image}
            adres={person.adres}
            bank_adres={person.bank_adres}
          />
        </div>
        <div>
          <p>Dodatkowa zawartość strony</p>
        </div>
      </div>
    </div>
  );
}

export default Details_workers;
