import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AppBar from './appbar'
import { Typography } from '@material-ui/core';
class AllCategories extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <AppBar title="All Categories"/>
               <Grid container>
                   <Grid item xs={4}>
                      <Paper style={{margin:'5%'}} elevation={0}>
                      <img src={'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100'}style={{width:'100%',padding:'5%'}}></img>
                      <Typography>
                            <strong>Shop Kirana Items</strong>
                      </Typography>
                      </Paper>
                   </Grid>
                   <Grid item xs={4}>
                      
                        <Paper style={{margin:'5%'}} elevation={0}>
                      <img src={'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100'}style={{width:'100%',padding:'5%'}}></img>
                      <Typography>
                            <strong> Mobiles and Accessories</strong>
                      </Typography>
                      </Paper>
                   </Grid>
                   <Grid item xs={4} >
                        <Paper style={{margin:'5%'}} elevation={0}>
                      <img src={'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100'}style={{width:'100%',padding:'5%'}}></img>
                      <Typography>
                            <strong>Men's Fashion</strong>
                      </Typography>
                      </Paper>
                   </Grid>

               </Grid>
               <Grid container>
                   <Grid item xs={4}>
                        <Paper style={{margin:'5%'}} elevation={0}>
                      <img src={'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100'}style={{width:'100%',padding:'5%'}}></img>
                      <Typography>
                           <strong> Games, Laptops and More</strong>
                      </Typography>
                      </Paper>
                   </Grid>
                   <Grid item xs={4}>
                       
                       <Paper style={{margin:'5%'}} elevation={0}>
                      <img src={'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100'}style={{width:'100%',padding:'5%'}}></img>
                      <Typography>
                           <strong>Sofa and Accessories</strong>
                      </Typography>
                      </Paper>
                   </Grid>
                   <Grid item xs={4} >
                        <Paper style={{margin:'5%'}} elevation={0}>
                      <img src={'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100'}style={{width:'100%',padding:'5%'}}></img>
                      <Typography>
                           <strong>Electronics and Appliances</strong>
                      </Typography>
                      </Paper>
                   </Grid>

               </Grid>
               <Grid container>
                   <Grid item xs={4}>
                
                       <Paper style={{margin:'5%'}} elevation={0}>
                      <img src={'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100'}style={{width:'100%',padding:'5%'}}></img>
                      <Typography>
                            <strong>Book Flights</strong>
                      </Typography>
                      </Paper>
                   </Grid>
                   <Grid item xs={4}>
                        <img src={''}></img>
                        <Paper style={{margin:'5%'}} elevation={0}>
                      <img src={'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100'}style={{width:'100%',padding:'5%'}}></img>
                      <Typography>
                            <strong>Baby Pampers</strong>
                      </Typography>
                      </Paper>
                   </Grid>

               </Grid>
            </div>
        );
    }
}
 
export default AllCategories;