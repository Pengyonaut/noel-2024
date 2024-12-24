import React, { useEffect } from "react";

// Chargez le script de la bibliothèque
const loadSnowflakesScript = () => {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/magic-snowflakes/dist/snowflakes.min.js";
  script.async = true;
  document.body.appendChild(script);
};

const SnowfallEffect = () => {
  useEffect(() => {
    loadSnowflakesScript(); // Charger le script

    let snowflakesInstance;

    // Initialisez les flocons après le chargement du script
    const initializeSnowflakes = () => {
      if (window.Snowflakes) {
        snowflakesInstance = new window.Snowflakes({
          color: "#fff", // Couleur des flocons
          count: 100, // Nombre de flocons
          minOpacity: 0.5, // Opacité minimale
          minSize: 2, // Taille minimale
          maxSize: 10, // Taille maximale
          rotation: true, // Rotation des flocons
          autoResize: true, // Ajustement automatique de la taille
        });
      }
    };

    // Vérifiez si le script est chargé et initialisez les flocons
    const checkAndInitialize = setInterval(() => {
      if (window.Snowflakes) {
        initializeSnowflakes();
        clearInterval(checkAndInitialize); // Une fois initialisé, arrêter la vérification
      }
    }, 100);

    return () => {
      // Nettoyage : détruire les flocons si le composant est démonté
      if (snowflakesInstance) {
        snowflakesInstance.destroy();
      }
    };
  }, []);

  return (
  <></>
  );
};

export default SnowfallEffect;
