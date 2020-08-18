import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import events from '../assets/img/events.svg'
import './events.css'

class Events extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
            <h1>Events List</h1>
            <div className="edu">
              <h3 className="edu-item1"><span role="img" aria-label="Heart">⚡</span> Event 1</h3>
              <p className="edu-item2">10 oct 2018</p>
              <h3 className="edu-item1"><span role="img" aria-label="Heart">⚡</span> Event 2</h3>
              <p className="edu-item2">22 mar 2019</p>
              <h3 className="edu-item1"><span role="img" aria-label="Heart">⚡</span> Event 3</h3>
              <p className="edu-item2">08 jan 2020</p>
            </div>
            <br/>
            <br/>
            </div>
          </div>
          <div className="img-part" >
            <img src={events} alt="about" />
          </div>
          </div>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Events;