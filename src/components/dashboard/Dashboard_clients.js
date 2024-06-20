// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import MediaCard from "./Card";
// import { Link } from "react-router-dom";
// import { HomeButton } from "../services/Services";
// import Return_home_2 from "../temporary/return_home_2.png";

// function Dashboard_clients() {
//   const [clients, setClients] = useState([]);

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await axios.get(
//           "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3AKlienci&maxFeatures=50&outputFormat=application%2Fjson"
//         );
//         const clientsData = response.data.features.map((f) => f.properties);
//         setClients(clientsData);
//       } catch (error) {
//         // Handle error silently
//       }
//     };

//     fetchClients();
//   }, []);

//   return (
//     <div className="home_btn">
//       <HomeButton />
//       <Link to="/services">
//         <button className="btn_home_2">
//           <img
//             className="return_home_2"
//             src={Return_home_2}
//             alt="Przycisk powrotny"
//           ></img>
//         </button>
//       </Link>
//       <div
//         className="tiled_clients_list"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "16px",
//         }}
//       >
//         {clients.map((item) => (
//           <Link
//             to={`/services/dashboard/clients/details/${item.id}`}
//             key={item.id}
//             style={{ textDecoration: "none" }}
//           >
//             <MediaCard
//               name={item.name}
//               surname={item.surname}
//               content={item.content}
//               image={item.image}
//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard_clients;

import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "./Card";
import { Link } from "react-router-dom";
import { HomeButton } from "../services/Services";
import Return_home_2 from "../temporary/return_home_2.png";

function Dashboard_clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3AKlienci&maxFeatures=50&outputFormat=application%2Fjson"
        );
        const clientsData = response.data.features.map((f) => ({
          id: f.id, // Add id field
          ...f.properties,
        }));
        setClients(clientsData);
      } catch (error) {
        // Handle error silently
      }
    };

    fetchClients();
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
    </div>
  );
}

export default Dashboard_clients;
