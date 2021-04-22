import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Paper from '@material-ui/core/Paper';    
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    margin:'1%'
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width:'100%',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

 const tileData = [
       {
         category: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
         title:'Offers'
       },
       {
        category: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
        title:'Mobiles'
      },
      {
        category: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100',
        title:'Kitchen'
      },
      {
        category: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100',
        title:'Fashion'
      },
      {
        category: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
        title:'Laptops'
      },
      {
        category: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100',
        title:'Furniture'
      },
      {
        category: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100',
        title:'Electronics'
      },
      
    ]
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {tileData.map((tile) => (
            <Paper elevation={0} style={{margin:'1%',height:'max-content'}}>
                <img src={tile.category} style={{width:'50px'}}>
                    
                </img>
                <Typography>
                  {tile.title}
                </Typography>
            </Paper>
        ))}
      </GridList>
    </div>
  );
}