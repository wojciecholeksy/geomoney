// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import MediaCard from "./Card";
// import { Link } from "react-router-dom";
// import { HomeButton } from "../services/Services";
// import Return_home_2 from "../temporary/return_home_2.png";
// import "./Dashboard_workers.css";

// function Dashboard_workers() {
//   const [workers, setWorkers] = useState([]);
//   const [isTableView, setIsTableView] = useState(false);

//   useEffect(() => {
//     const fetchWorkers = async () => {
//       try {
//         const response = await axios.get(
//           "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3APracownicy&maxFeatures=50&outputFormat=application%2Fjson"
//         );
//         const workersData = response.data.features.map((f) => ({
//           id: f.id,
//           ...f.properties,
//         }));
//         setWorkers(workersData);
//       } catch (error) {
//         // Handle error silently
//       }
//     };

//     fetchWorkers();
//   }, []);

//   const toggleView = () => {
//     setIsTableView(!isTableView);
//   };

//   return (
//     <div className="dashboard">
//       <div className="home_btn">
//         <HomeButton />
//         <Link to="/services">
//           <button className="btn_home_2">
//             <img
//               className="return_home_2"
//               src={Return_home_2}
//               alt="Przycisk powrotny"
//             ></img>
//           </button>
//         </Link>
//         <button onClick={toggleView} className="toggle_view_btn">
//           {isTableView ? "Widok kafelkowy" : "Widok tabelaryczny"}
//         </button>
//       </div>
//       {isTableView ? (
//         <table className="workers_table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Imię</th>
//               <th>Nazwisko</th>
//               <th>Stanowisko</th>
//               <th>Adres</th>
//               <th>Adres banku</th>
//             </tr>
//           </thead>
//           <tbody>
//             {workers.map((worker) => (
//               <tr key={worker.id}>
//                 <td>
//                   <Link
//                     to={`/services/dashboard/workers/details/${worker.id}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     {worker.id}
//                   </Link>
//                 </td>
//                 <td>
//                   <Link
//                     to={`/services/dashboard/workers/details/${worker.id}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     {worker.name}
//                   </Link>
//                 </td>
//                 <td>
//                   <Link
//                     to={`/services/dashboard/workers/details/${worker.id}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     {worker.surname}
//                   </Link>
//                 </td>
//                 <td>
//                   <Link
//                     to={`/services/dashboard/workers/details/${worker.id}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     {worker.content}
//                   </Link>
//                 </td>
//                 <td>
//                   <Link
//                     to={`/services/dashboard/workers/details/${worker.id}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     {worker.adres}
//                   </Link>
//                 </td>
//                 <td>
//                   <Link
//                     to={`/services/dashboard/workers/details/${worker.id}`}
//                     style={{ textDecoration: "none" }}
//                   >
//                     {worker.bank_adres}
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <div
//           className="tiled_workers_list"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(3, 1fr)",
//             gap: "16px",
//           }}
//         >
//           {workers.map((item) => (
//             <Link
//               to={`/services/dashboard/workers/details/${item.id}`}
//               key={item.id}
//               style={{ textDecoration: "none" }}
//             >
//               <MediaCard
//                 name={item.name}
//                 surname={item.surname}
//                 content={item.content}
//                 image={item.image}
//               />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard_workers;

import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "./Card";
import { Link } from "react-router-dom";
import { HomeButton } from "../services/Services";
import Return_home_2 from "../temporary/return_home_2.png";
import "./Dashboard_workers.css";

function Dashboard_workers() {
  const [workers, setWorkers] = useState([]);
  const [isTableView, setIsTableView] = useState(false);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3APracownicy&maxFeatures=50&outputFormat=application%2Fjson"
        );
        const workersData = response.data.features.map((f) => ({
          id: f.id,
          ...f.properties,
        }));
        setWorkers(workersData);
      } catch (error) {
        // Handle error silently
      }
    };

    fetchWorkers();
  }, []);

  const toggleView = () => {
    setIsTableView(!isTableView);
  };

  return (
    <div className="dashboard">
      <div className="home_btn">
        <HomeButton className="home_button" />

        <Link to="/services">
          <div className="btn_home_2">
            <img
              className="return_home_2"
              src={Return_home_2}
              alt="Przycisk powrotny"
            ></img>
          </div>
        </Link>

        <button onClick={toggleView} className="toggle_view_btn">
          {isTableView ? "Widok kafelkowy" : "Widok tabelaryczny"}
        </button>
      </div>
      {isTableView ? (
        <table className="workers_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Stanowisko</th>
              <th>Adres</th>
              <th>Adres banku</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((worker) => (
              <tr key={worker.id}>
                <td>
                  <Link
                    to={`/services/dashboard/workers/details/${worker.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {worker.id}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/workers/details/${worker.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {worker.name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/workers/details/${worker.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {worker.surname}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/workers/details/${worker.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {worker.content}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/workers/details/${worker.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {worker.adres}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/services/dashboard/workers/details/${worker.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {worker.bank_adres}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div
          className="tiled_workers_list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {workers.map((item) => (
            <Link
              to={`/services/dashboard/workers/details/${item.id}`}
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

export default Dashboard_workers;
