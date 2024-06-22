import { useState } from "react";
import React from "react";
import About_map from "../temporary/about_map.jpg";
import Return_home_2 from "../temporary/return_home_2.png";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`about ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className={`about_title ${darkMode ? "dark-text" : ""}`}>
        O projekcie
      </div>
      <button onClick={handleToggle} className="toggle-btn">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <span className={`text_1 ${darkMode ? "dark-text" : ""}`}>
        <h3>Historia Założycielska</h3> System zarządzania bankami, który
        dzisiaj jest liderem w branży, rozpoczął swoją drogę jako mała, rodzinna
        firma. Powstała z inicjatywy dwóch braci, którzy z pasją do technologii
        i finansów postanowili stworzyć innowacyjne rozwiązanie dla małych
        banków lokalnych. Ich misją było uproszczenie skomplikowanych procesów
        bankowych oraz umożliwienie mniejszym instytucjom finansowym korzystanie
        z najnowszych technologii. Dzięki ciężkiej pracy i zaangażowaniu, firma
        szybko zyskała uznanie w branży, przekształcając się z lokalnego
        startupu w renomowanego dostawcę rozwiązań bankowych.
        <h6>Usługi</h6>
        Nasza firma oferuje szeroki zakres usług, które zaspokajają potrzeby
        współczesnych banków. Nasze systemy zarządzania obejmują kompleksowe
        rozwiązania do obsługi klientów, zarządzania ryzykiem, analizy danych
        oraz zapewnienia zgodności z regulacjami. Oferujemy również zaawansowane
        narzędzia do automatyzacji procesów, które pomagają bankom zwiększyć
        efektywność i redukować koszty operacyjne. Nasze rozwiązania są
        skalowalne, co pozwala na ich zastosowanie zarówno w małych lokalnych
        bankach, jak i w dużych, międzynarodowych instytucjach finansowych.
        <img className="about_map" src={About_map} alt="Tło z mapą"></img>
      </span>

      <span className={`text_2 ${darkMode ? "dark-text" : ""}`}>
        <h1>Planowane Kierunki Rozwoju</h1>W ciągu najbliższych lat planujemy
        znacząco rozszerzyć naszą ofertę usług. Chcemy wprowadzić rozwiązania
        oparte na sztucznej inteligencji, które pomogą bankom lepiej analizować
        dane i przewidywać trendy rynkowe. Planujemy również rozwijać nasze
        narzędzia do zarządzania ryzykiem, aby były jeszcze bardziej precyzyjne
        i dostosowane do zmieniających się warunków rynkowych. Naszym celem jest
        stworzenie ekosystemu, w którym banki będą mogły w pełni zintegrować
        wszystkie swoje operacje w jednym, spójnym systemie. W dalszej
        perspektywie chcemy skupić się na globalnej ekspansji. Planujemy wejście
        na nowe rynki w Azji i Ameryce Południowej, gdzie widzimy ogromny
        potencjał wzrostu. Chcemy również rozwijać nasze usługi w zakresie
        cyfrowej transformacji, pomagając bankom w migracji do chmury oraz
        wdrażaniu nowoczesnych technologii fintech. Naszym długoterminowym celem
        jest stanie się niekwestionowanym liderem w dziedzinie technologii
        bankowych, oferującym najbardziej innowacyjne i kompleksowe rozwiązania
        na rynku.
      </span>
      <Link to="/">
        <img
          className="return_home_2"
          src={Return_home_2}
          alt="Przycisk powrotny"
        ></img>
      </Link>
    </div>
  );
}

export default About;
