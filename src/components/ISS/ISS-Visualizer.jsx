import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch";

const ISS = ({ iss }) => {
  return <ReactP5Wrapper sketch={sketch} iss={iss} />;
};

export default ISS;
