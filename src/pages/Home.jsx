import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import ISS from "../components/ISS/ISS-Visualizer";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

export default function Home() {
  const [iss, setISS] = useState();
  const issAPI = "https://api.wheretheiss.at/v1/satellites/25544";

  const getISS = async () => {
    const res = await fetch(issAPI);
    const data = await res.json();
    setISS(data);
    console.log(data);
  };

  useEffect(() => {
    const interval = setInterval(getISS, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            ISS Tracker
          </Typography>
          {/* <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}>
              About
            </Link>
          </nav> */}
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom>
          ISS Tracker
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p">
          See the International Space Station visualized over the earth (not to
          scale).
        </Typography>
      </Container>
      {/* End hero unit */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item>
          <ISS iss={iss} width={600} height={600} />
        </Grid>
        <Grid item style={{ width: 600, paddingTop: 10 }}>
          <Card>
            <CardHeader title="ISS Data" />
            <CardContent>
              {iss && (
                <ul>
                  <li>{`Name: ${iss.name}`}</li>
                  <li>{`NORAD ID: ${iss.id}`}</li>
                  <li>{`Timestamp: ${iss.timestamp}`}</li>
                  <li>{`Velocity: ${iss.velocity}`}</li>
                  <li>{`Visibility: ${iss.visibility}`}</li>
                  <li>{`Latitude: ${iss.latitude}`}</li>
                  <li>{`Longitude: ${iss.longitude}`}</li>
                  <li>{`Solar Latitude: ${iss.latitude}`}</li>
                  <li>{`Solar Longitude: ${iss.longitude}`}</li>
                  <li>{`Daynum: ${iss.daynum}`}</li>
                  <li>{`Footprint: ${iss.footprint}`}</li>
                  <li>{`Units: ${iss.units}`}</li>
                </ul>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
