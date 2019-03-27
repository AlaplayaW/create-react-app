import React from "react";

const Quote = ({ id, quote, character, image }) => (
  <figure key={id}>
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default Quote;