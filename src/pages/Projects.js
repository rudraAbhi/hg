import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer'
import project from '../assets/img/project.svg'

class Project extends Component {
    render() {
      return (
        <div>
          <Nav/>
          <div className="main">
          <div className="text-part" >
          <div className="text">
            <h1>My Project List</h1>
            <p><span role="img" aria-label="Heart">⚡</span> Project 1</p>
            <p><span role="img" aria-label="Heart">⚡</span> Project 2</p>
            <p><span role="img" aria-label="Heart">⚡</span> Project 3</p>
            <p><span role="img" aria-label="Heart">⚡</span> Project 4</p>
          </div>
          </div>
          <div className="img-part" >
            <img src={project} alt="project" />
          </div>
          </div>
          <br/>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Project;