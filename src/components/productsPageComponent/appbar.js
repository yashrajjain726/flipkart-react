import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#047BD5" }}>
        <Toolbar>
         <a href="/">
         <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <ArrowBackIosIcon style={{color:'#fff'}}/>
          </IconButton>
         </a>
          <Typography>Products</Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <AddIcon />

            <ShoppingCartIcon />

            <a href="/login">
              <Button style={{ color: "#fff" }}>Login</Button>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
