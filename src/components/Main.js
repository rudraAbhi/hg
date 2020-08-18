import React, { Component } from "react";
import Home from '../assets/img/home.svg';
import webd from '../assets/img/web-dev.svg';
import ai from '../assets/img/ai.svg';
import robotic from '../assets/img/robotic.svg';
import Sm from './Sm';
import './main.css'

class Main extends Component {
    render() {
      return (
        <div>
          <div className="main">
          <div className="text-part">
            <div className="text">
              <h1>Hi, I'm HG Robot</h1>
              <p>Working for House of Geeks - Technical Society <span role="img" aria-label="Heart">🎓</span> of IIIT Ranchi <span role="img" aria-label="Heart">🏛️</span>. I'm always willing to work across technologies and domains <span role="img" aria-label="Heart">💡</span>.</p>
              <Sm />
            </div>
          </div>
          <div className="img-part">
            <img src={Home} alt="clip worl" />
          </div>
        </div>
        <h1>What I Do?</h1>
        <div className="main">
          <div className="img-part">
            <img src={webd} alt="clip worl" />
          </div>
          <div className="text-part">
            <div className="text">
              <h2>Programming and Development</h2>
              <p> <span role="img" aria-label="Heart">⚡</span> Organizing Web and App development contest</p>
              <p> <span role="img" aria-label="Heart">⚡</span> Organizing programming contest</p>
              <p> <span role="img" aria-label="Heart">⚡</span> Hosting Webinar for beginners</p>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="text-part">
            <div className="text">
              <h2>Ml and Ai</h2>
              <p><span role="img" aria-label="Heart">⚡</span> Organizing Ml and Ai contest</p>
              <p><span role="img" aria-label="Heart">⚡</span> Hosting Webinar for beginners</p>
              <p><span role="img" aria-label="Heart">⚡</span> Training camp for beginners</p>
            </div>
          </div>
          <div className="img-part">
            <img src={ai} alt="clip worl" />
          </div>
        </div>
        <div className="main">
        <div className="img-part">
            <img src={robotic} alt="clip worl" />
          </div>
          <div className="text-part">
            <div className="text">
              <h2>Robotic</h2>
              <p><span role="img" aria-label="Heart">⚡</span> Organizing Robotic contest</p>
              <p><span role="img" aria-label="Heart">⚡</span> Hosting Webinar for beginners</p>
              <p><span role="img" aria-label="Heart">⚡</span> Training camp for beginners</p>
            </div>
          </div>
        </div>
        

        </div>
      );
    }
  }
  
  export default Main;