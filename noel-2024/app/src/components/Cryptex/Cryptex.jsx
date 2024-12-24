import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import santaGif from "../../assets/santa-gif.gif"

const Cryptex = ({ defaultCode = "APERO?" }) => {
  const [inputCode, setInputCode] = useState(Array(defaultCode.length).fill(""));
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (value, index) => {
    const newCode = [...inputCode];
    newCode[index] = value.toUpperCase().slice(-1); // Garde uniquement le dernier caractère en majuscule
    setInputCode(newCode);
  };

  const handleUnlock = () => {
    if (inputCode.join("") === defaultCode) {
      setIsUnlocked(true);
    } else {
      alert("Code incorrect !");
    }
  };

  const resetCryptex = () => {
    setInputCode(Array(defaultCode.length).fill(""));
    setIsUnlocked(false);
  };

  return (
    <>
      {/* Footer avec le bouton centré, fixé en bas */}
      <footer
        className="footer py-3 position-fixed w-100"
        style={{ bottom: 0, left: 0 }}
      >
        <div className="container d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Ouvrir le Cryptex
          </button>
        </div>
      </footer>

      {/* Modale du Cryptex */}
      {showModal && (
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
                  Cryptex
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => {
                    setShowModal(false);
                    resetCryptex();
                  }}
                ></button>
              </div>
              <div className="modal-body text-center">
                {isUnlocked ? (
                  <>
                  <h1>CHAMPAGNE !</h1>
                  <img src={santaGif} className="img-fluid" alt="" />
                  <p className="text-center mt-2">
                    Prenez contact avec le Père Gouidasse pour accéder à la récompense
                  </p>
                  </>
                ) : (
                  <div>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                      {inputCode.map((char, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          className="form-control text-center mx-1"
                          style={{ width: "50px", fontSize: "1.5rem" }}
                          value={char}
                          onChange={(e) => handleChange(e.target.value, index)}
                        />
                      ))}
                    </div>
                    <button className="btn btn-primary" onClick={handleUnlock}>
                      Déverrouiller
                    </button>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                {!isUnlocked && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetCryptex}
                  >
                    Réinitialiser
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowModal(false);
                    resetCryptex();
                  }}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cryptex;
