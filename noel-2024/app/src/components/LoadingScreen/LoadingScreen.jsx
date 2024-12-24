import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./LoadingScreen.css";
import logo from "../../assets/logo-fb.png"

const LoadingScreen = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Durée de l'écran de chargement (1s)

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="loading-screen bg-success">
      <img src={logo} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
