// import React from "react";
// import Tlo_services from "../temporary/tlo_services.jpg";
// import "./Services.css";
// import Services_cover from "../temporary/services_cover.jpg";
// import Home_return from "../temporary/home_return.png";
// import Banks from "../temporary/Group_banks.png";
// import Clients from "../temporary/Group_clients.png";
// import Workers from "../temporary/Group_workers.png";
// import Maps from "../temporary/maps.jpg";
// import Services_pictures from "../temporary/services_pictures.png";
// import { Link } from "react-router-dom";

// function Services() {
//   return (
//     <div className="services">
//       <div className="left_services">
//         <img
//           className="tlo_services"
//           src={Tlo_services}
//           alt="Tło całościowe"
//         ></img>
//         <img
//           className="services_cover"
//           src={Services_cover}
//           alt="Górny prostokąt"
//         ></img>
//         <div className="options">
//           <Link to="/">
//             <button className="btn_home">
//               <img
//                 className="home_return"
//                 src={Home_return}
//                 alt="Przycisk powrotny"
//               ></img>
//             </button>
//           </Link>
//           <Link to="/">
//             <button className="btn_banks">
//               <img
//                 className="banks"
//                 src={Banks}
//                 alt="Odnośnik do listy banków"
//               ></img>
//               <spam className="banks_list">Lista banków</spam>
//             </button>
//           </Link>

//           <Link to="/">
//             <button className="btn_clients">
//               <img
//                 className="clients"
//                 src={Clients}
//                 alt="Odnośnik do listy klientów"
//               ></img>
//               <spam className="clients_list">Lista klientów</spam>
//             </button>
//           </Link>
//           <Link to="/services/dashboard">
//             <button className="btn_workers">
//               <img
//                 className="workers"
//                 src={Workers}
//                 alt="Odnośnik do listy pracowników"
//               ></img>
//               <spam className="workers_list">Lista pracowników</spam>
//             </button>
//           </Link>
//           <Link to="/services/map">
//             <button className="btn_maps">
//               <img className="maps" src={Maps} alt="Odnośnik do mapy"></img>
//               <span className="maps_text">Mapa</span>
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="right_services">
//         <img
//           className="services_pictures"
//           src={Services_pictures}
//           alt="Ozdoba"
//         ></img>
//       </div>
//     </div>
//   );
// }

// export default Services;

import React from "react";
import Tlo_services from "../temporary/tlo_services.jpg";
import "./Services.css";
import Services_cover from "../temporary/services_cover.jpg";
import Home_return from "../temporary/home_return.png";
import Banks from "../temporary/Group_banks.png";
import Clients from "../temporary/Group_clients.png";
import Workers from "../temporary/Group_workers.png";
import Maps from "../temporary/maps.jpg";
import Services_pictures from "../temporary/services_pictures.png";
import { Link } from "react-router-dom";

export const HomeButton = () => (
  <Link to="/">
    <button className="btn_home">
      <img
        className="home_return"
        src={Home_return}
        alt="Przycisk powrotny"
      ></img>
    </button>
  </Link>
);

function Services() {
  return (
    <div className="services">
      <div className="left_services">
        <img
          className="tlo_services"
          src={Tlo_services}
          alt="Tło całościowe"
        ></img>
        <img
          className="services_cover"
          src={Services_cover}
          alt="Górny prostokąt"
        ></img>
        <div className="options">
          <HomeButton /> {/* Użyj wyeksportowanego przycisku */}
          <Link to="/">
            <button className="btn_banks">
              <img
                className="banks"
                src={Banks}
                alt="Odnośnik do listy banków"
              ></img>
              <span className="banks_list">Lista banków</span>
            </button>
          </Link>
          <Link to="/">
            <button className="btn_clients">
              <img
                className="clients"
                src={Clients}
                alt="Odnośnik do listy klientów"
              ></img>
              <span className="clients_list">Lista klientów</span>
            </button>
          </Link>
          <Link to="/services/dashboard">
            <button className="btn_workers">
              <img
                className="workers"
                src={Workers}
                alt="Odnośnik do listy pracowników"
              ></img>
              <span className="workers_list">Lista pracowników</span>
            </button>
          </Link>
          <Link to="/services/map">
            <button className="btn_maps">
              <img className="maps" src={Maps} alt="Odnośnik do mapy"></img>
              <span className="maps_text">Mapa</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="right_services">
        <img
          className="services_pictures"
          src={Services_pictures}
          alt="Ozdoba"
        ></img>
      </div>
    </div>
  );
}

export default Services;
