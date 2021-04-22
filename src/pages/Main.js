import React, { Component } from 'react';
import AppBar from '../components/mainPageComponent/appbar'
import Carousel from '../components/mainPageComponent/carousel'
import CategoryScrollable from '../components/mainPageComponent/categoryScrollable'
import MainOffers from '../components/mainPageComponent/mainOffers'
import Banner from '../components/mainPageComponent/banner'
import BestSellers from '../components/mainPageComponent/bestSellers'
import DealOfDay from '../components/mainPageComponent/dealofDay'
class Main extends Component {

    state = {  }
    render() { 
        return ( 
           <div>
                <AppBar/>
                <CategoryScrollable/>
            <Carousel/>
            <MainOffers/>
            <BestSellers/>
            <Banner/>
            <DealOfDay/>

           </div>
         );
    }
}
 
export default Main;