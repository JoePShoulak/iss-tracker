import { AppBar as MUIAppBar, Toolbar, Typography } from "@mui/material";

const AppBar = () => (
  <MUIAppBar
    position="static"
    color="default"
    elevation={0}
    sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
    <Toolbar sx={{ flexWrap: "wrap" }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        ISS Tracker
      </Typography>
    </Toolbar>
  </MUIAppBar>
);

export default AppBar;
