import React from "react";
import { Box, Grid,Typography } from "@mui/material";

import "./../../App.css";

export default function Text() {
  return (
    <Box className="globalCentered " style = {{marginTop:"80px"}}>
        <Grid container item justifyContent="center">
            <Grid item lg={12}>
      <Typography variant="h4" >About Us</Typography>
      </Grid>
      <Grid item lg={12}>

      <Typography variant="h7">Desripton</Typography>
      </Grid>

      </Grid>
    </Box>
  );
}
