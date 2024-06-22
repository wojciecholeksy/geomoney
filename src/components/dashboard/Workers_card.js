import React from "react";

function DetailsCard({ name, surname, content, image, adres, bank_adres }) {
  return (
    <div className="details_card">
      <img src={image} alt={`${name} ${surname}`} style={{ width: "350px" }} />
      <h1>
        {name} {surname}
      </h1>
      <h2>{content}</h2>
      <p>
        <strong>Adres:</strong> {adres}
      </p>
      <p>
        <strong>Adres banku:</strong> {bank_adres}
      </p>
    </div>
  );
}

export default DetailsCard;
