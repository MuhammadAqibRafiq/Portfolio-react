import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const mystyle = {
  color: "black",
  // background:"lightgray",
  padding:'1px',
};

export default function Bg ()  {
  return (
    <div className='banner' id='Home' >
      <Carousel >
  <Carousel.Item >
    <img
      className="e-block"
      src="https://cdn.pixabay.com/photo/2017/09/25/17/38/chart-2785979_960_720.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h1 style={mystyle}>Make it work, make it right, make it fast</h1>
      <h3 style={mystyle}>First, solve the problem. Then, write the code.</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="e-block"
      src="https://cdn.pixabay.com/photo/2017/01/20/19/53/productivity-1995786_960_720.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="e-block"
      src="https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_960_720.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 style={mystyle} className='d'>Make it work, make it right, make it fast</h1>
      <h3 style={mystyle} className='e'>First, solve the problem. Then, write the code.</h3>
    </Carousel.Caption>
  </Carousel.Item >
</Carousel>

</div>
  )
}

