import React from "react";
import "./Quote.css";

const Quote = ({ riddle }) => {
  return (
    <div className="container">
      <blockquote className="quote-box bg-success text-center">
        <p className="quotation-mark">“</p>
        <h2 className="quote-text">{riddle}</h2>
        <hr />
        <div className="blog-post-actions">
          <p className="blog-post-bottom pull-left">Père Gouidasse - Dec. 2024</p>

        </div>
      </blockquote>
    </div>
  );
};

export default Quote;
