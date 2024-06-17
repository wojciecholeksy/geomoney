import React from "react";
import { useParams } from "react-router-dom";
import MediaCard from "./Card";
import { input_list } from "./Dashboard"; // Import danych
import { HomeButton } from "../services/Services";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const person = input_list[id];

  return (
    <div className="details_worker_page">
      <div className="home_btn> ">
        <HomeButton />{" "}
      </div>
      <div className="details">
        <h1 className="details_title">SZCZEGÓŁY NA TEMAT PRACOWNIKA</h1>
        <div className="details_worker">
          <img
            src={person.image}
            alt={`${person.name} ${person.surname}`}
            style={{ width: "400px" }}
          />
          <h2>
            {person.name} {person.surname}
          </h2>
          <p>{person.content}</p>
        </div>
        <div>
          {/* Możesz dodać więcej elementów tutaj */}
          <p>Dodatkowa zawartość strony</p>
        </div>
      </div>
    </div>
  );
}

export default Details;

// import React from "react";
// import { useParams } from "react-router-dom";
// import MediaCard from "./Card";
// import input_list from "./Dashboard";
// const input_list = [
//   // dane wejściowe jak wcześniej
// ];

// function Details() {
//   const { id } = useParams();
//   const person = input_list[id];

//   return (
//     <div>
//       <MediaCard
//         name={person.name}
//         surname={person.surname}
//         content={person.content}
//         image={person.image}
//       />
//     </div>
//   );
// }

// export default Details;

// import React from "react";
// import { useParams } from "react-router-dom";
// import MediaCard from "./Card";
// import input_list from "./Dashboard"; // Import Dashboard_workers, aby mieć dostęp do danych
// import Dashboard_workers from "./Dashboard";
// function Details() {
//   const { id } = useParams();
//   const input_list = Dashboard_workers.getData(); // Funkcja zwracająca dane z Dashboard_workers
//   const person = input_list[id];

//   return (
//     <div>
//       <MediaCard
//         name={person.name}
//         surname={person.surname}
//         content={person.content}
//         image={person.image}
//       />
//     </div>
//   );
// }

// export default Details;
