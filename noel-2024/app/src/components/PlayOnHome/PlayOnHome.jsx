import React, { useEffect, useState, useRef } from "react";

const PlayOnHome = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false); // La musique n'est pas activée par défaut
  const audioRef = useRef(null); // Référence pour l'objet Audio

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0; // Réinitialise la musique lorsque le composant est démonté
    };
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) =>
          console.error("Erreur lors de la lecture :", error)
        );
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleSound = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="sound-control">
      <button onClick={toggleSound} className="btn btn-primary d-flex align-items-center">
        <span className="material-icons me-2">
          {isPlaying ? "volume_off" : "volume_up"} {/* Icône dynamique */}
        </span>
        {isPlaying ? "En fait non" : "Ambiance moi"}
      </button>
    </div>
  );
};

export default PlayOnHome;
