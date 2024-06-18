import React, { useEffect, useState } from "react";
import "./Map.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Home_return from "../temporary/home_return.png";
import { Link } from "react-router-dom";
import { wojewodztwa_json } from "./dane";
import MarkerPlacement from "./MarkerPlacement";
import bank from "./bank.jpg";
import pracownik from "./pracownik.png";
import klient from "./klient.png";
import L from "leaflet";
import Return_home_2 from "../temporary/return_home_2.png";

// Definicje niestandardowych ikon
const pracownikIcon = L.icon({
  iconUrl: pracownik,
  iconSize: [40, 54],
  iconAnchor: [32, 54],
});

const klientIcon = L.icon({
  iconUrl: klient,
  iconSize: [40, 54],
  iconAnchor: [32, 54],
});

const bankIcon = L.icon({
  iconUrl: bank,
  iconSize: [40, 54],
  iconAnchor: [32, 54],
});

// Mapy nagłówków dla każdej warstwy
const klienciHeaders = {
  name: "Imię",
  surname: "Nazwisko",
  adres: "Adres",
  bank_adres: "Adres banku klienta",
  y: "Współrzędna Y w stopniach",
  x: "Współrzędna X w stopniach",
  // Dodaj inne mapowania nagłówków
};

const bankiHeaders = {
  name: "Nazwa Banku",
  adress: "Adres",
  y: "Współrzędna Y w stopniach",
  x: "Współrzędna X w stopniach",
  // Dodaj inne mapowania nagłówków
};

const pracownicyHeaders = {
  name: "Imię ",
  surname: "Nazwisko",
  content: "Stanowisko",
  adres: "Adres",
  bank_adres: "Adres banku pracownika",
  y: "Współrzędna Y w stopniach",
  x: "Współrzędna X w stopniach",

  // Dodaj inne mapowania nagłówków
};

// Funkcja do generowania zawartości popup z nagłówkami, wykluczając klucz "image"
const generatePopupContent = (properties, headers) => {
  const content = Object.entries(properties)
    .filter(([key]) => key !== "image")
    .map(([key, value]) => `<strong>${headers[key] || key}:</strong> ${value}`)
    .join("<br>");

  const imageContent = properties.image
    ? `<img src="${properties.image}" alt="Image" style="display:block; margin:auto; width:200px; height:auto;"/>`
    : "";

  return `<div style="min-width:250px;">${content}${imageContent}</div>`;
};

// Funkcja do tworzenia popupów dla województw
const makeWojewodztwaPopup = (feature, layer) => {
  if (feature.properties) {
    layer.bindPopup(`
      <div style="min-width:250px;">
        <h1>Dane wojewodztwa</h1>
        <strong>Nazwa: </strong> ${feature.properties.jpt_nazwa_}</br>
        <strong>Powierzchnia: </strong> ${feature.properties.jpt_powier} <strong>m^2 </strong>
        <img src=${feature.properties.img_source} alt="Lamp" style="display:block; margin:auto; width:200px; height:auto;">
      </div>`);
  }
};

function Map() {
  const [Klienci, setKlienci] = useState(null);
  const [Banki, setBanki] = useState(null);
  const [Pracownicy, setPracownicy] = useState(null);
  const [wojewodztwa, setwojewodztwa] = useState(null);

  const makePopup = (feature, layer, headers) => {
    if (feature.properties) {
      const popupContent = generatePopupContent(feature.properties, headers);
      layer.bindPopup(popupContent);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const wojewodztwaResponse = await axios.get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw_db_4326&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setwojewodztwa(wojewodztwaResponse.data);

        const pracownicyResponse = await axios.get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3APracownicy&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setPracownicy(pracownicyResponse.data);

        const klienciResponse = await axios.get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3AKlienci&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setKlienci(klienciResponse.data);

        const bankiResponse = await axios.get(
          "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3ABanki&maxFeatures=50&outputFormat=application%2Fjson"
        );
        setBanki(bankiResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    getData();
  }, []);

  const pointToLayer = (feature, latlng, icon, headers) => {
    const popupContent = generatePopupContent(feature.properties, headers);
    return L.marker(latlng, { icon }).bindPopup(popupContent);
  };

  return (
    <div className="map">
      <MapContainer center={[52.2322222, 21.0]} zoom={10}>
        <LayersControl>
          <LayersControl.BaseLayer checked name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Granice województw DB">
            <WMSTileLayer
              layers="granice_wojewodztw"
              url="http://127.0.0.1:8080/geoserver/prge/wms"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Granice województw DB WFS">
            {wojewodztwa ? (
              <GeoJSON
                data={wojewodztwa}
                onEachFeature={makeWojewodztwaPopup}
              />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Lokalizacja klientow">
            {Klienci ? (
              <GeoJSON
                data={Klienci}
                pointToLayer={(feature, latlng) =>
                  pointToLayer(feature, latlng, klientIcon, klienciHeaders)
                }
                onEachFeature={(feature, layer) =>
                  makePopup(feature, layer, klienciHeaders)
                }
              />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Lokalizacja bankow">
            {Banki ? (
              <GeoJSON
                data={Banki}
                pointToLayer={(feature, latlng) =>
                  pointToLayer(feature, latlng, bankIcon, bankiHeaders)
                }
                onEachFeature={(feature, layer) =>
                  makePopup(feature, layer, bankiHeaders)
                }
              />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Lokalizacja pracownikow">
            {Pracownicy ? (
              <GeoJSON
                data={Pracownicy}
                pointToLayer={(feature, latlng) =>
                  pointToLayer(
                    feature,
                    latlng,
                    pracownikIcon,
                    pracownicyHeaders
                  )
                }
                onEachFeature={(feature, layer) =>
                  makePopup(feature, layer, pracownicyHeaders)
                }
              />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
          <MarkerPlacement />
        </LayersControl>
      </MapContainer>
      <div className="back">
        <Link to="/">
          <button className="btn_home">
            <img
              className="home_return"
              src={Home_return}
              alt="Przycisk powrotny"
            ></img>
          </button>
        </Link>
        <Link to="/services">
          <button className="previous_page">
            <img
              className="page_return"
              src={Return_home_2}
              alt="Poprzednia strona"
            ></img>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Map;

// import React, { useEffect, useState } from "react";
// import "./Map.css";
// import {
//   LayersControl,
//   MapContainer,
//   TileLayer,
//   WMSTileLayer,
//   GeoJSON,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import axios from "axios";
// import Home_return from "../temporary/home_return.png";
// import { Link } from "react-router-dom";
// import { wojewodztwa_json } from "./dane";
// import MarkerPlacement from "./MarkerPlacement";
// import bank from "./bank.jpg";
// import pracownik from "./pracownik.png";
// import klient from "./klient.png";
// import L from "leaflet";

// // Definicje niestandardowych ikon
// const pracownikIcon = L.icon({
//   iconUrl: pracownik,
//   iconSize: [40, 54],
//   iconAnchor: [32, 54],
// });

// const klientIcon = L.icon({
//   iconUrl: klient,
//   iconSize: [40, 54],
//   iconAnchor: [32, 54],
// });

// const bankIcon = L.icon({
//   iconUrl: bank,
//   iconSize: [40, 54],
//   iconAnchor: [32, 54],
// });

// // Mapy nagłówków dla każdej warstwy
// const wojewodztwaHeaders = {
//   jpt_nazwa_: "Nazwa Województwa",
//   jpt_powier: "Powierzchnia",
//   // Dodaj inne mapowania nagłówków
// };

// const klienciHeaders = {
//   name: "Imię klienta",
//   surname: "Nazwisko",
//   adres: "Adres klienta",
//   bank_adres: "Adres banku klienta",
//   y: "Współrzędna Y w stopniach",
//   x: "Współrzędna X w stopniach",

//   // Dodaj inne mapowania nagłówków
// };

// const bankiHeaders = {
//   name: "Nazwa Banku",
//   // Dodaj inne mapowania nagłówków
// };

// const pracownicyHeaders = {
//   name: "Imię pracownika",
//   // Dodaj inne mapowania nagłówków
// };

// // Funkcja do generowania zawartości popup z nagłówkami
// const generatePopupContent = (properties, headers) => {
//   return Object.entries(properties)
//     .map(([key, value]) => `<strong>${headers[key] || key}:</strong> ${value}`)
//     .join("<br>");
// };

// function Map() {
//   const [Klienci, setKlienci] = useState(null);
//   const [Banki, setBanki] = useState(null);
//   const [Pracownicy, setPracownicy] = useState(null);
//   const [wojewodztwa, setwojewodztwa] = useState(null);

//   const makePopup = (feature, layer, headers) => {
//     if (feature.properties) {
//       const popupContent = generatePopupContent(feature.properties, headers);
//       layer.bindPopup(popupContent);
//     }
//   };

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const wojewodztwaResponse = await axios.get(
//           "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Agranice_wojewodztw_db_4326&maxFeatures=50&outputFormat=application%2Fjson"
//         );
//         setwojewodztwa(wojewodztwaResponse.data);

//         const pracownicyResponse = await axios.get(
//           "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3APracownicy&maxFeatures=50&outputFormat=application%2Fjson"
//         );
//         setPracownicy(pracownicyResponse.data);

//         const klienciResponse = await axios.get(
//           "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3AKlienci&maxFeatures=50&outputFormat=application%2Fjson"
//         );
//         setKlienci(klienciResponse.data);

//         const bankiResponse = await axios.get(
//           "http://127.0.0.1:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3ABanki&maxFeatures=50&outputFormat=application%2Fjson"
//         );
//         setBanki(bankiResponse.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     getData();
//   }, []);

//   const pointToLayer = (feature, latlng, icon, headers) => {
//     const popupContent = generatePopupContent(feature.properties, headers);
//     return L.marker(latlng, { icon }).bindPopup(popupContent);
//   };

//   return (
//     <div className="map">
//       <MapContainer center={[52.2322222, 21.0]} zoom={10}>
//         <LayersControl>
//           <LayersControl.BaseLayer checked name="OSM">
//             <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="Google">
//             <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="Google Satelite">
//             <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="Granice województw DB">
//             <WMSTileLayer
//               layers="granice_wojewodztw"
//               url="http://127.0.0.1:8080/geoserver/prge/wms"
//             />
//           </LayersControl.BaseLayer>
//           <LayersControl.Overlay checked name="Granice województw DB WFS">
//             {wojewodztwa ? (
//               <GeoJSON
//                 data={wojewodztwa}
//                 onEachFeature={(feature, layer) =>
//                   makePopup(feature, layer, wojewodztwaHeaders)
//                 }
//               />
//             ) : (
//               ""
//             )}
//           </LayersControl.Overlay>
//           <LayersControl.Overlay checked name="Lokalizacja klientow">
//             {Klienci ? (
//               <GeoJSON
//                 data={Klienci}
//                 pointToLayer={(feature, latlng) =>
//                   pointToLayer(feature, latlng, klientIcon, klienciHeaders)
//                 }
//                 onEachFeature={(feature, layer) =>
//                   makePopup(feature, layer, klienciHeaders)
//                 }
//               />
//             ) : (
//               ""
//             )}
//           </LayersControl.Overlay>
//           <LayersControl.Overlay checked name="Lokalizacja bankow">
//             {Banki ? (
//               <GeoJSON
//                 data={Banki}
//                 pointToLayer={(feature, latlng) =>
//                   pointToLayer(feature, latlng, bankIcon, bankiHeaders)
//                 }
//                 onEachFeature={(feature, layer) =>
//                   makePopup(feature, layer, bankiHeaders)
//                 }
//               />
//             ) : (
//               ""
//             )}
//           </LayersControl.Overlay>
//           <LayersControl.Overlay checked name="Lokalizacja pracownikow">
//             {Pracownicy ? (
//               <GeoJSON
//                 data={Pracownicy}
//                 pointToLayer={(feature, latlng) =>
//                   pointToLayer(
//                     feature,
//                     latlng,
//                     pracownikIcon,
//                     pracownicyHeaders
//                   )
//                 }
//                 onEachFeature={(feature, layer) =>
//                   makePopup(feature, layer, pracownicyHeaders)
//                 }
//               />
//             ) : (
//               ""
//             )}
//           </LayersControl.Overlay>
//           <MarkerPlacement />
//         </LayersControl>
//       </MapContainer>
//       <div className="back">
//         <Link to="/">
//           <button className="btn_home">
//             <img
//               className="home_return"
//               src={Home_return}
//               alt="Przycisk powrotny"
//             ></img>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Map;
