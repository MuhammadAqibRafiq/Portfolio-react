import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import covid from './Covid-tracker-app.jpg'
import quiz from './quiz.jpg'
import shoe from './shoe.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LaptopIcon from '@material-ui/icons/Laptop';

const mystyle = {
  color: "black",
  backgroundColor: "Gold",
};

const myystyle = {
  color: "black",
  padding:'12px'
};

export default function Project ()  {
  return (
    <div className='project' id='Project'>
      <Carousel >
  
  <Carousel.Item>
    <img
      className="d-block "
      src={quiz}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={mystyle}>QUIZ APP</h3>
      <a style={myystyle} href="https://github.com/MuhammadAqibRafiq/QuizApp"><GitHubIcon style={{ fontSize: 40 }}/></a>
      <a style={myystyle} href="http://quizappbasic.surge.sh/"><LaptopIcon style={{ fontSize: 40 }}/></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block  "
      src={covid}
      alt="First slide"
    />
    
    <Carousel.Caption>
      <h3 style={mystyle}>COVID TRACKER APP</h3>
      <div className='icon'>
     <a style={myystyle} className='project__name' href="https://github.com/MuhammadAqibRafiq/covid-19-tracker-react"><GitHubIcon style={{ fontSize: 40 }}/></a>
     <a style={myystyle} href="https://muhammadaqibrafiq.github.io/covid-19-tracker-react/"><LaptopIcon style={{ fontSize: 40 }}/></a>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src={shoe}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={mystyle}>SHOE STORE</h3>
      <a style={myystyle} href=""><GitHubIcon style={{ fontSize: 40 }}/></a>
      <a style={myystyle} href=""><LaptopIcon style={{ fontSize: 40 }}/></a>
    </Carousel.Caption>
  </Carousel.Item >
</Carousel>

</div>
  )
}
