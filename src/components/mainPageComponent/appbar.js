import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from './search'
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button'

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
      <AppBar position="static" style={{backgroundColor:'#047BD5'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography >
            Flipkart
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton  color="inherit">
              <Badge  color="secondary">
                <AddIcon />
              </Badge>
            </IconButton>
            <IconButton  color="inherit">
              <Badge  color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton>
            <a href="/login">
            <Button style={{color:"#fff"}}>
                Login
            </Button>
            </a>
            </IconButton>

          </div>
        </Toolbar>
        <SearchBar/>
      </AppBar>
    </div>
  );
}