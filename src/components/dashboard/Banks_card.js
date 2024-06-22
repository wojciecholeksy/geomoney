import React from "react";

function BanksCard({ name, image, adress }) {
  return (
    <div className="details_card">
      <img src={image} alt={`${name} `} style={{ width: "350px" }} />
      <h1>{name}</h1>

      <p>
        <strong>Adres:</strong> {adress}
      </p>
    </div>
  );
}

export default BanksCard;
