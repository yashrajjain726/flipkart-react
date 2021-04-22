import React, { Component } from 'react';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
class BestSellers extends Component {
    state = {  }
    render() { 
        return ( 
           
            <Container style={{backgroundColor:'#047BD5',maxWidth:'100%'}}>
                
                    <div style={{maxWidth:'100%'}}>
                       
                       <Typography style={{ float:"left",margin:'2%'}} >
                          <strong>  BestSellers</strong>
                        </Typography>
                        <Button style={{color:'#047BD5',backgroundColor:'#fff',float:'right',margin:'2%'}}>
                            ViewAll
                        </Button>
                    </div>
                    <Card style={{width:'100%'}}>
                       <Grid container>
                        <Grid item xs={6} style={{padding:'5%'}} >
                           <img src={'https://rukminim1.flixcart.com/image/150/150/k6pd7680/speaker/mobile-tablet-speaker/c/s/x/thomson-bbx-01-black-original-imafp44yb883wkgc.jpeg?q=70'}style={{width:'100%'}}></img>
                           <Typography>
                               <strong> Best in Speakers</strong>
                           </Typography>
                           <Typography>
                              Buy Now
                           </Typography>
                            </Grid>
                            <Grid item xs={6} style={{padding:'5%'}} >
                            <img src={'https://rukminim1.flixcart.com/flap/150/150/image/73a876aed3db713f.jpg?q=70'}style={{width:'100%'}}></img>
                            <Typography>
                               <strong> Best in Speakers</strong>
                           </Typography>
                           <Typography>
                              Buy Now
                           </Typography>
                            </Grid>
                            </Grid>
                            <Grid container >
                        <Grid item xs={6}style={{padding:'5%'}} >
                        <img src={'https://rukminim1.flixcart.com/image/150/150/jx3kn0w0/slipper-flip-flop/8/y/b/368272-8-puma-ponderosa-pine-black-white-original-imafhmr9n22rakag.jpeg?q=70'}style={{width:'100%'}}></img>
                        <Typography>
                               <strong> Best in Speakers</strong>
                           </Typography>
                           <Typography>
                              Buy Now
                           </Typography>
                            </Grid>
                            <Grid item xs={6}style={{padding:'5%'}} >
                            <img src={'https://rukminim1.flixcart.com/image/150/150/jx7uykw0/top/z/w/y/xl-sftops4257-sassafras-original-imafhz6ucvgrtsfw.jpeg?q=70'}style={{width:'100%'}}></img>
                            <Typography>
                               <strong> Best in Speakers</strong>
                           </Typography>
                           <Typography>
                              Buy Now
                           </Typography>
                            </Grid>
                            </Grid>
                       </Card>
                </Container>
         );
    }
}
 
export default BestSellers;