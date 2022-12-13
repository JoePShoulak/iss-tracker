import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Hero = () => (
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
);

export default Hero;
