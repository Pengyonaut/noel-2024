import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const CryptexInput = ({ imgSrc, keyWord, cryptex, description }) => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.toLowerCase() === keyWord.toLowerCase()) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setInputValue(""); // Réinitialise l'input si besoin
    setIsModalOpen(false);
  };

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Entrez le mot clé..."
        value={inputValue}
        onChange={handleChange}
      />

      {/* Modale */}
      {isModalOpen && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="cryptexModal"
          aria-hidden="true"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="cryptexModal">
                  Bravo !
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={imgSrc}
                  alt="Surprise"
                  className="img-fluid mb-3"
                  style={{ maxHeight: "200px" }}
                />
                <p>{description}</p>
                <p>La clé du cryptex est : <b>"{cryptex}"</b></p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptexInput;
