import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Text from './index'
import DescriptionCard from "./DescriptionCard";
import star from "../../assets/images/star.png";
import group from "../../assets/images/moreStars.png";
import car from "../../assets/images/car.png";
import './../../App.css'

export default function DescriptionCardList() {
  const obj = [
    {
      title: "Awesome Icons",
      description: "Des_1",
      logo: star,
    },
    {
      title: "One Page",
      description: "Des_2",
      logo: group,
    },
    {
      title: "Fully Responsive",
      description: "Des_3",
      logo: car,
    },
  ];
  return (
 
    <Grid container item spacing={4} justifyContent="center" >
          <Text/>
      <Grid item lg={12}  />
    
      {obj.map((items, index) => {
        return (
          <Grid item  lg={2} key={index}>
            <Box className={"globalCentered"}>
              

              <DescriptionCard items={items} />
            </Box>
          </Grid>
        );
      })}

    </Grid>
  );
}
