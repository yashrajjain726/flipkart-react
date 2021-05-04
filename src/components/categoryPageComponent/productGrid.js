import { Typography,Paper,Grid,Button,Card } from '@material-ui/core';
import React, { Component } from 'react';
import AppBar from './appbar'
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';

class ViewAll extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <AppBar title="Products"/>
               <Grid container>
                   <Grid item xs={6}>
                   <Paper elevation={1}>
                <Button>
                    <SortIcon/>Sort
                </Button>
                </Paper>
               
                   </Grid>
                   <Grid item xs={6}>
                   <Paper elevation={1}>
                <Button>
                    <FilterListIcon/>Filter
                </Button>
                </Paper>
               
                   </Grid>
               </Grid>
                <Grid container>
                    <Grid item xs={6}>
                      
                       <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/jrs3mvk0/shoe/x/9/c/5363518-8-hrx-by-hrithik-roshan-blue-original-imafdg2fkh95ej4a.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/kcc9q4w0/headphone/4/n/y/235v2-fast-charging-boat-original-imafthhggkgu3nze.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>

                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>

                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/kkprmvk0/smartwatch/v/j/n/storm-android-ios-boat-original-imafzzu29tguvtqg.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/jrs3mvk0/shoe/x/9/c/5363518-8-hrx-by-hrithik-roshan-blue-original-imafdg2fkh95ej4a.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>

                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/jrs3mvk0/shoe/x/9/c/5363518-8-hrx-by-hrithik-roshan-blue-original-imafdg2fkh95ej4a.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/jrs3mvk0/shoe/x/9/c/5363518-8-hrx-by-hrithik-roshan-blue-original-imafdg2fkh95ej4a.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>

                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/jrs3mvk0/shoe/x/9/c/5363518-8-hrx-by-hrithik-roshan-blue-original-imafdg2fkh95ej4a.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/jrs3mvk0/shoe/x/9/c/5363518-8-hrx-by-hrithik-roshan-blue-original-imafdg2fkh95ej4a.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>

                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/jrs3mvk0/shoe/x/9/c/5363518-8-hrx-by-hrithik-roshan-blue-original-imafdg2fkh95ej4a.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper >
                            <img src={'https://rukminim1.flixcart.com/image/200/200/jrs3mvk0/shoe/x/9/c/5363518-8-hrx-by-hrithik-roshan-blue-original-imafdg2fkh95ej4a.jpeg?q=70'} ></img>
                          <div style={{marginLeft:'2%'}}>
                          <Typography align="left">Lakhme Sun Expert Fairness</Typography>
                            <Card style={{backgroundColor:'green',color:'#fff',width:'2rem'}}>4.3*</Card>

                            <Typography align='left'>
                               <strong>Rs 176</strong> <strike>225</strike> <span style={{color:'green'}}>25% Off</span>
                            </Typography>
                          </div>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
         );
    }
}
 
export default ViewAll;
