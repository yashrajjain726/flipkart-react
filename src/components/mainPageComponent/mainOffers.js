import React, { Component } from "react";
import Card from '@material-ui/core/Card'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import receipe1 from '../../img/receipe1.webp'
// import receipe2 from '../../img/receipe2.webp'
// import receipe3 from '../../img/receipe3.webp'
import { Typography } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class Recipies extends Component {
  state = {};
  render() {
    return (
      <div>
       <Card >
       <Grid container >
          <Grid item xs={4}>
          <Paper elevation={3} style={{ margin: "5%",padding:'5%'}}>
              <img  src={'https://rukminim1.flixcart.com/image/312/312/kgtqhe80/computer/v/g/t/dell-original-imafwz6z9dze9wzd.jpeg?q=70'}style={{width:'100%'}}></img>
            <div style={{marginLeft:'1%'}}>
            
                 From 59/-

            </div>
              </Paper>
          </Grid>
          <Grid item xs={4}>
            
          <Paper elevation={3} style={{ margin: "5%",padding:'5%'}}>
          <img  src={'https://rukminim1.flixcart.com/image/312/312/kgtqhe80/computer/v/g/t/dell-original-imafwz6z9dze9wzd.jpeg?q=70'}style={{width:'100%'}}></img>
          50% Flat
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} style={{ margin: "5%" ,height:'fit-content',padding:'5%'}}>
            <img  src={'https://rukminim1.flixcart.com/image/312/312/kgtqhe80/computer/v/g/t/dell-original-imafwz6z9dze9wzd.jpeg?q=70'}style={{width:'100%'}}></img>
            Ongoing Sale
            </Paper>
          </Grid>
        </Grid>
       </Card>
      </div>
    );
  }
}

export default Recipies;