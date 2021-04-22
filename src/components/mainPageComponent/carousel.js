  
import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'
import Banner1 from '../../img/banner1.jpg'
import Banner3 from '../../img/banner3.jpg'
import Banner4 from '../../img/banner4.jpg'
import Banner5 from '../../img/banner5.jpg'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            style={{width:'100%',height:'150px'}}
            src={Banner1}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
           style={{width:'100%',height:'150px'}}
            src={Banner3}
           
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
           
            src={Banner4}
            style={{width:'100%',height:'150px'}}
           
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
             style={{width:'100%',height:'150px'}}
            src={Banner5}

          />
  
        </Carousel.Item>
      </Carousel>
    );
  }