import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="bounce card">
      <img className="image" src={props.image} alt={props.imageAlt} />
      <p className="text">{props.description}</p>
    </div>
  );
};

export default Card;
