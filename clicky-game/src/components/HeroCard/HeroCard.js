import React from 'react';
import './HeroCard.css';

const HeroCard = props => {
  return (
    <div className="card" onClick={() => props.handlePick(props)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
};
export default HeroCard;
