import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { HomeButton } from "../services/Services";
import ClientsCard from "./Clients_card";
import "./Details_clients.css";
import Return_home_2 from "../temporary/return_home_2.png";
import { Link } from "react-router-dom";

function Details_clients() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3AKlienci&maxFeatures=50&outputFormat=application%2Fjson`
        );
        const client = response.data.features.find(
          (c) => c.id === id || c.properties.id === parseInt(id)
        );
        if (client) {
          setClient(client.properties);
        }
      } catch (error) {
        // Handle error silently
      }
    };

    fetchClient();
  }, [id]);

  const handleViewOnMap = () => {
    navigate(`/services/map?objectId=${id}`);
  };

  if (!client) {
    return null;
  }

  return (
    <div className="details_client_page">
      <div className="home_btn">
        <HomeButton />
        <Link to="/services/dashboard/clients">
          <img
            className="return_home_2"
            src={Return_home_2}
            alt="Przycisk powrotny"
          ></img>
        </Link>
      </div>
      <div className="details">
        <h1 className="details_title">SZCZEGÓŁY NA TEMAT KLIENTA</h1>
        <div className="details_client">
          <ClientsCard
            name={client.name}
            surname={client.surname}
            image={client.image}
            adres={client.adres}
            bank_adres={client.bank_adres}
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

export default Details_clients;
