import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "../styles/loadingScreen.css";
import { ClipLoader, HashLoader } from "react-spinners";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="overlay">
      <HashLoader color="#2c3e50" size={130} loading={loading}/>
      {/* <Spinner animation="grow" variant="dark"/>
            Loading... */}
    </div>
  );
};

export default LoadingScreen;
