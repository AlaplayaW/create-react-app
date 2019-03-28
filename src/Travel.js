import React from "react";


const Travel = ({destination, country, distance, image }) => (
  <figure>
    <img src={image} alt={image} width="700" />
    <figcaption>
      <div>{destination}</div>
      <div>{country}</div>
      <div>{distance}</div>
    </figcaption>
  </figure>
);

export default Travel;