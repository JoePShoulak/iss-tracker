import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import ISS from "../components/ISS/ISS-Visualizer";
import { Box, Card, CardContent, CardHeader, Grid, Paper } from "@mui/material";

function HomeContent() {
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
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}>
              About
            </Link>
          </nav>
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
      <Paper style={{ padding: 30, margin: 30, minWidth: "350px" }}>
        <Grid
          container
          spacing={5}
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid item sm={12} md={9} lg={7}>
            <Box>
              <ISS width={600} height={600} />
            </Box>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Card>
              <CardHeader>ISS Data</CardHeader>
              <CardContent>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                inventore rerum soluta pariatur molestias omnis adipisci vitae
                tempore ea unde, nobis velit ipsum doloribus vero ab ipsa,
                minima dolore eaque.
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default function Home() {
  return <HomeContent />;
}
