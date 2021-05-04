import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'

import { Typography } from '@material-ui/core';
class Banner extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Container style={{padding:'0',margin:'0'}}>
                  <div style={{margin:'5% 0 1% 1%'}}>
                  <Typography align="left" >
                        <strong>Trending Offers</strong>

                    </Typography>
                  
                    <Typography align="left" style={{fontSize:'10px'}}>
                    Watch the Smart Offers
                    </Typography>
                  </div>
                </Container>
                <Card style={{margin:'1%'}}>
                    <img src={'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'} style={{width:'100%'}}></img>
                </Card>
                </div>
          );
    }
}
 
export default Banner;