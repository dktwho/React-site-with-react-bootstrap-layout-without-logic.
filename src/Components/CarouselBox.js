

import React from 'react'
import { Carousel } from 'react-bootstrap'
import nightForest1 from '../assets/nightForest1.jpg'
import nightForest2 from '../assets/nightForest2.jpg'

const CarouselBox = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={nightForest1}
          alt="nightForest1"
          width='1200'
          height='920'
        />
        <Carousel.Caption>
          <h3>Sea image</h3>
          <p>Lorem ipsum</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={nightForest2}
          alt="nightForest2"
          height='920'
        />
        <Carousel.Caption>
          <h3>Sea image</h3>
          <p>Lorem ipsum</p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  )
}

export default CarouselBox
