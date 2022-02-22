import React from "react";
import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { useStyles } from "./styles";


export default function Header() {
  let listText = {
    Home: "#Home",
    About: "#About",
    Servicing: "#Servicing",
    Portfolio: "#Portfolio",
    Blog: "#Blog",
    "Contact us": "#Contact us",
  };

  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Grid item container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs={2} sm={2} lg={4}>
            <Typography  variant="h5" className={classes.text} >Your Logo</Typography>
          </Grid>
          <Grid item xs={8} sm={8} lg={7}>
            <List style={{ display: "flex" }}>
              {Object.keys(listText).map((key) => (
                <ListItemButton style={{}} key={key}>
                  <Link
                    href={listText[key]}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItemText primary={key} />
                  </Link>
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item xs={2} sm={2} lg={1}>
            <IconButton> 
              <FiSearch />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
