import React from "react";
import "./Step.css";

const Step = (props) => {
  return (
    <div className="bounce step">
      <p className="text">{props.description}</p>
    </div>
  );
};

export default Step;
