import React, { Component } from "react";
import facebook from '../assets/img/icons8-facebook.svg';
import twitter from '../assets/img/icons8-twitter.svg';
import linkedin from '../assets/img/icons8-linkedin.svg';
import slack from '../assets/img/icons8-slack-new.svg';
import dev from '../assets/img/icons8-dev.svg';
import github from '../assets/img/icons8-github.svg';
import gitlab from '../assets/img/icons8-gitlab.svg';
import gmail from '../assets/img/icons8-mail.png';
import './sm.css'

class Sm extends Component {
    render() {
      return (
        <div className="sm">
            <a className="sm-item" href="https://facebook.com/hg.iiitr"><img src={facebook} alt="facebook" /></a>
            <a className="sm-item" href="https://twitter.com/hg.iiitr"><img src={twitter} alt="twitter" /></a>
            <a className="sm-item" href="https://www.linkedin.com/in/hg.iiitr/"><img src={linkedin} alt="linkedin" /></a>
            <a className="sm-item" href="https://hgiiitr.github.io"><img src={slack} alt="slack" /></a>
            <a className="sm-item" href="https://dev.to/iiitr"><img src={dev} alt="dev" /></a>
            <a className="sm-item" href="https://github.com/hg.iiitr"><img src={github} alt="github" /></a>
            <a className="sm-item" href="https://gitlab.com/hg.iiitr"><img src={gitlab} alt="gitlab" /></a>
            <a className="sm-item" href="mailto:hg.iiitr@gmail.com"><img src={gmail} alt="gmail" /></a>
        </div>
      );
    }
  }
  
  export default Sm;