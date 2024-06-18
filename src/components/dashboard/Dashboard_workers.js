import React from "react";
import MediaCard from "./Card";
import { Link } from "react-router-dom";
import { HomeButton } from "../services/Services";

export const input_list = [
  {
    name: "Maciej",
    surname: "Malinowski",
    content: "Dyrektor Bankowy",
    image: "https://cdn.pixabay.com/photo/2019/07/13/02/25/man-4333898_640.jpg",
  },
  {
    name: "Anna",
    surname: "Kowalska",
    content: "Analityk Finansowy",
    image:
      "https://cdn.pixabay.com/photo/2022/12/30/14/55/woman-7687157_640.jpg",
  },
  {
    name: "Kacper",
    surname: "Szyszka",
    content: "Żigolo ds.bogatych panien",
    image:
      "https://img.freepik.com/premium-zdjecie/smieszny-niesmialy-mezczyzna-przystojny-brodaty-facet-z-recznikiem-na-glowie-stoi-na-blekitnym-tle-kladac-reki-na-jego-klatce-piersiowej_116547-48076.jpg?w=1380",
  },
  {
    name: "Ewa",
    surname: "Zielińska",
    content: "Specjalista ds. Kredytów",
    image:
      "https://cdn.pixabay.com/photo/2022/07/26/21/38/business-woman-7346746_1280.png",
  },
  {
    name: "Krzysztof",
    surname: "Wiśniewski",
    content: "Menedżer Zespołu",
    image: "https://cdn.pixabay.com/photo/2015/07/31/15/01/man-869215_640.jpg",
  },
  {
    name: "Agnieszka",
    surname: "Wójcik",
    content: "Kierownik Oddziału",
    image:
      "https://cdn.pixabay.com/photo/2018/05/02/10/30/lovely-3368231_640.jpg",
  },
  {
    name: "Tomasz",
    surname: "Kaczmarek",
    content: "Specjalista ds. Inwestycji",
    image: "https://cdn.pixabay.com/photo/2021/08/23/19/18/man-6568640_640.png",
  },
  {
    name: "Magdalena",
    surname: "Pawłowska",
    content: "Doradca Finansowy",
    image:
      "https://cdn.pixabay.com/photo/2021/11/25/12/48/woman-6823526_640.jpg",
  },
  {
    name: "Paweł",
    surname: "Mazur",
    content: "Analityk Ryzyka",
    image:
      "https://cdn.pixabay.com/photo/2016/01/28/10/20/old-man-1166066_640.jpg",
  },
  {
    name: "Joanna",
    surname: "Krawczyk",
    content: "Specjalista ds. Produktów Bankowych",
    image:
      "https://cdn.pixabay.com/photo/2017/03/27/13/43/woman-2178816_640.jpg",
  },
  {
    name: "Adam",
    surname: "Piotrowski",
    content: "Zastępca Dyrektora",
    image:
      "https://media.istockphoto.com/id/1738724616/pl/zdj%C4%99cie/szcz%C4%99%C5%9Bliwy-fitness-i-portret-m%C4%99%C5%BCczyzny-z-r%C4%99kami-skrzy%C5%BCowanymi-w-parku-do-treningu-biegania.jpg?s=612x612&w=0&k=20&c=esH-ohRfIDM1aZHewRJdX4fRfDn4gBz7WZG0sJasAf4=",
  },
  {
    name: "Sylwia",
    surname: "Wojciechowska",
    content: "Specjalista ds. Windykacji",
    image:
      "https://cdn.pixabay.com/photo/2023/06/08/18/13/woman-8050114_640.jpg",
  },
  {
    name: "Marcin",
    surname: "Jankowski",
    content: "Specjalista ds. Prawnych",
    image:
      "https://media.istockphoto.com/id/1592210966/pl/zdj%C4%99cie/szcz%C4%99%C5%9Bliwy-czarny-cz%C5%82owiek-biegaj%C4%85cy-po-parku-z-muzyk%C4%85-u%C5%9Bmiechem-i-makiet%C4%85-na-%C5%82onie-natury.jpg?s=612x612&w=0&k=20&c=65APlXfebxTO9U8iZu24OAreHQEz9uT32REboPHn7_U=",
  },
  {
    name: "Beata",
    surname: "Szymańska",
    content: "Audytor Wewnętrzny",
    image:
      "https://cdn.pixabay.com/photo/2023/05/04/20/45/historical-7971083_640.jpg",
  },
  {
    name: "Rafał",
    surname: "Sikorski",
    content: "Specjalista ds. Compliance",
    image:
      "https://cdn.pixabay.com/photo/2021/10/12/08/27/elderly-man-6702843_640.jpg",
  },
  {
    name: "Izabela",
    surname: "Nowicka",
    content: "Kontroler Finansowy",
    image:
      "https://cdn.pixabay.com/photo/2023/08/11/04/41/woman-8182795_640.jpg",
  },
  {
    name: "Michał",
    surname: "Ostrowski",
    content: "Kierownik Projektów",
    image: "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_640.jpg",
  },
  {
    name: "Katarzyna",
    surname: "Michalak",
    content: "Specjalista ds. HR",
    image:
      "https://cdn.pixabay.com/photo/2023/09/06/08/48/woman-8236682_640.jpg",
  },
  {
    name: "Grzegorz",
    surname: "Król",
    content: "Specjalista ds. Operacji",
    image: "https://cdn.pixabay.com/photo/2013/05/28/18/10/man-114257_640.jpg",
  },
  {
    name: "Justyna",
    surname: "Czarnecka",
    content: "Specjalista ds. Marketingu",
    image:
      "https://cdn.pixabay.com/photo/2018/06/03/04/43/woman-and-car-3449756_640.jpg",
  },
  {
    name: "Dariusz",
    surname: "Górski",
    content: "Specjalista ds. IT",
    image:
      "https://cdn.pixabay.com/photo/2015/12/10/14/27/old-man-1086437_640.jpg",
  },
  {
    name: "Elżbieta",
    surname: "Kubiak",
    content: "Specjalista ds. Księgowości",
    image:
      "https://cdn.pixabay.com/photo/2018/01/15/12/27/fashion-3083861_640.jpg",
  },
  {
    name: "Wojciech",
    surname: "Wysocki",
    content: "Specjalista ds. Sprzedaży",
    image: "https://cdn.pixabay.com/photo/2022/10/13/11/20/man-7518890_640.jpg",
  },
  {
    name: "Patrycja",
    surname: "Borkowska",
    content: "Specjalista ds. Obsługi Klienta",
    image:
      "https://cdn.pixabay.com/photo/2024/05/16/21/16/woman-8767005_640.png",
  },
  {
    name: "Stefan",
    surname: "Graś",
    content: "Starszy specjalista ds. hydrauliki",
    image: "https://cdn.pixabay.com/photo/2018/05/11/16/18/man-3390927_640.jpg",
  },
];

function Dashboard_workers() {
  return (
    <div className="home_btn">
      <HomeButton />
      <div
        className="tiled_workers_list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
        }}
      >
        {input_list.map((item, index) => (
          <Link
            to={`/services/dashboard/workers/details/${index}`}
            key={index}
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

export default Dashboard_workers;
