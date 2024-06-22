import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "./Card";
import { Link } from "react-router-dom";
import { HomeButton } from "../services/Services";
import Return_home_2 from "../temporary/return_home_2.png";
import "./Dashboard_banks.css";

function Dashboard_banks() {
  const [banks, setBanks] = useState([]);
  const [isTableView, setIsTableView] = useState(false);

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

  const toggleView = () => {
    setIsTableView(!isTableView);
  };

  return (
    <div className="dashboard">
      <Link to="/services">
        <img
          className="return_home_2"
          src={Return_home_2}
          alt="Przycisk powrotny"
        />
      </Link>
      <div className="home_btn">
        <HomeButton className="home_button" />
      </div>

      <button onClick={toggleView} className="toggle_view_btn">
        {isTableView ? "Widok kafelkowy" : "Widok tabelaryczny"}
      </button>

      {isTableView ? (
        <table className="banks_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nazwa</th>
              <th>Adres</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((bank) => (
              <tr key={bank.id}>
                <td>
                  <Link
                    to={`/services/dashboard/banks/details/${bank.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {bank.id}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/banks/details/${bank.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {bank.name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/banks/details/${bank.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {bank.adress}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
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
              <MediaCard name={item.name} image={item.image} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard_banks;
