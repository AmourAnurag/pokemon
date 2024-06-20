// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

export default Card;
