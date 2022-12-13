import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import AppBar from "../components/AppBar";
import Hero from "../components/Hero";
import ISS from "../components/ISS/Visualizer/Visualizer";
import Data from "../components/ISS/Data";
import Tech from "../components/Technologies";

import { Grid } from "@mui/material";

export default function Home() {
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

  const gridSettings = {
    spacing: 0,
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const size = 600;
  const gridItemStyle = { width: size, paddingTop: 10 };

  return (
    <>
      <CssBaseline />
      <AppBar />
      <Hero />
      <Grid container {...gridSettings}>
        <Grid item>
          <ISS iss={iss} width={size} height={size} />
        </Grid>
        <Grid item style={gridItemStyle}>
          <Data iss={iss} />
        </Grid>
        <Grid item style={gridItemStyle}>
          <Tech />
        </Grid>
      </Grid>
    </>
  );
}
