import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import members from '../assets/img/member.svg'

class Members extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
          <h1><span role="img" aria-label="Heart">⚡</span> Members list</h1>
          <h1><span role="img" aria-label="Heart">⚡</span> Members 1</h1>
            </div>
          </div>
          <div className="img-part" >
            <img src={members} alt="Skills" />
          </div>
          </div>
          <br/>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Members;