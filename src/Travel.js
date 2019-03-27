import React from "react";


const Travel = ({ id, destination, country, distance, image }) => (
  <figure key={id}>
    <img src={image} alt={image} width="700" />
    <figcaption>
      <div>{destination}</div>
      <div>{country}</div>
      <div>{distance}</div>
    </figcaption>
  </figure>
);

export default Travel;