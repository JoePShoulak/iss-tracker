import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch";

const ISS = () => {
  const [iss, setISS] = useState();
  const issAPI = "https://api.wheretheiss.at/v1/satellites/25544";

  const getISS = async () => {
    const res = await fetch(issAPI);
    const data = await res.json();
    setISS(data);
  };

  useEffect(() => {
    const interval = setInterval(getISS, 5000);
    return () => clearInterval(interval);
  }, []);

  return <ReactP5Wrapper sketch={sketch} iss={iss} />;
};

export default ISS;
