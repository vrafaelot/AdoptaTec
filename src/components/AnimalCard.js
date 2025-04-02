import React from 'react';
import './AnimalCard.css';

const AnimalCard = ({ image, name, description }) => {
  return (
    <div className="animal-card">
      <img src={image} alt={name} className="animal-card__image" />
      <h3 className="animal-card__name">{name}</h3>
      <p className="animal-card__description">{description}</p>
    </div>
  );
};

export default AnimalCard;