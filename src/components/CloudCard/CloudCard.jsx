import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CloudCard = ({ url, icon, name, description }) => {
  return (
    <a href={url} target="_top" rel="noopener noreferrer" className="text-decoration-none">
      <div className="card bg-success shadow-sm my-2">
        <div className="card-body text-start">
          <div className="icon-container text-secondary mb-2" style={{ fontSize: "4rem" }}>
            <span className="material-icons" style={{fontSize: "48px"}}>{icon}</span>
          </div>
          <h5 className="card-title text-uppercase mb-2">{name}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default CloudCard;
