import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "./Card";
import { Link } from "react-router-dom";
import { HomeButton } from "../services/Services";
import Return_home_2 from "../temporary/return_home_2.png";
import "./Dashboard_clients.css";

function Dashboard_clients() {
  const [clients, setClients] = useState([]);
  const [isTableView, setIsTableView] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3AKlienci&maxFeatures=50&outputFormat=application%2Fjson"
        );
        const clientsData = response.data.features.map((f) => ({
          id: f.id,
          ...f.properties,
        }));
        setClients(clientsData);
      } catch (error) {
        // Handle error silently
      }
    };

    fetchClients();
  }, []);

  const toggleView = () => {
    setIsTableView(!isTableView);
  };

  return (
    <div className="dashboard">
      <div className="home_btn">
        <HomeButton className="home_button" />

        <Link to="/services">
          <img
            className="return_home_2"
            src={Return_home_2}
            alt="Przycisk powrotny"
          ></img>
        </Link>

        <button onClick={toggleView} className="toggle_view_btn">
          {isTableView ? "Widok kafelkowy" : "Widok tabelaryczny"}
        </button>
      </div>
      {isTableView ? (
        <table className="clients_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Adres</th>
              <th>Adres banku</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>
                  <Link
                    to={`/services/dashboard/clients/details/${client.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {client.id}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/clients/details/${client.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {client.name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/clients/details/${client.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {client.surname}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/clients/details/${client.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {client.adres}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/clients/details/${client.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {client.bank_adres}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div
          className="tiled_clients_list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {clients.map((item) => (
            <Link
              to={`/services/dashboard/clients/details/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <MediaCard
                name={item.name}
                surname={item.surname}
                content={item.content}
                image={item.image}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard_clients;
