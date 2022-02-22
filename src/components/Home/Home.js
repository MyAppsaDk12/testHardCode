import React from "react";
import {  Grid, Typography, Button, IconButton } from "@mui/material";
import {AiOutlineDown } from "react-icons/ai";
import { useStyles } from "./styles";
import "./main.css";

export default function Home() {
  const classes = useStyles();

  return (
    <>
   
        <div className="div" >
         <div className="div_inner"> 
        <Grid
        item
        container
        style={{justifyContent: 'center'}}
        alignItems={"center"}
      >
          
          <Grid item lg={12} >          <Typography variant="h2" className={classes.text}>
            Web development project
          </Typography>
          </Grid>

        <Grid item lg={12}    alignItems={"center"}>
        <Typography variant="h5" className={classes.text2}>
          Very suitable to support all web development projects
        </Typography>
     
        </Grid  >
        <Grid item lg={1.1} >
        <Button variant="contained" className= {classes.btn1}>OUR SERVICES</Button>
        </Grid>
        <Grid >

        <Button variant="contained" className= {classes.btn2}>HIRE IS NOW</Button>
        </Grid>

        </Grid>

        <Grid lg={12}>
        <IconButton>
        <AiOutlineDown   style={{fill: 'white', marginTop : "140px"}}/>
        </IconButton>
        </Grid>
        </div>
        </div>
     
    </>
  );
}
