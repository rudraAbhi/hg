import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import Sm from '../components/Sm'
import about from '../assets/img/about.svg'

class About extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
              <h1>Hi, I'm Hg Robot</h1>
              <p><span role="img" aria-label="Heart">⚡</span> Working for House of Geeks - Technical Society <span role="img" aria-label="Heart">🎓</span> of IIIT Ranchi <span role="img" aria-label="Heart">🏛️</span>.</p>
              <p> <span role="img" aria-label="Heart">⚡</span> Organizing Web and App development contest</p>
              <p> <span role="img" aria-label="Heart">⚡</span> Organizing programming contest</p>
              <p><span role="img" aria-label="Heart">⚡</span> Organizing Ml and Ai contest</p>
              <p><span role="img" aria-label="Heart">⚡</span> Organizing Robotic contest</p>
              <p> <span role="img" aria-label="Heart">⚡</span> Hosting Webinar for beginners</p>
              <p><span role="img" aria-label="Heart">⚡</span> Training camp for beginners</p>
              <Sm />
            </div>
          </div>
          <div className="img-part" >
            <img src={about} alt="about" />
          </div>
          </div>
          <br/>
          <Footer/>
        </div>
      );
    }
  }
  
  export default About;