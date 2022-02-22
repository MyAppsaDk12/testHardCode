import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";

export default function DescriptionCard({ items }) {
  const classes = useStyles();

  return (
    <Grid container item className={"globalCentered"} spacing={2} justifyContent="center">
      <Grid item lg={12} className={"globalCentered"}>
        <img src={items.logo} className={classes.image} />
      </Grid>

      <Grid item lg={12}>
        <Box className={classes.textContainer}>
          <Typography variant="h6">{items.title}</Typography>
          <Typography className={classes.description}>
            {items.description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
