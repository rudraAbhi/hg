import React, { Component } from "react";
import { NavLink,Link } from 'react-router-dom'; 
import './nav.css'

class Nav extends Component {
    render() {
      return (
        <div>
          <header className="header">
            <NavLink to="/" tag={Link} className="logo">
            <h3>Somsi</h3>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <NavLink
                  to="/"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/members"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Members
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  onMouseEnter={(event) => onMouseEnter(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      );
    }
  }
  
  export default Nav;
  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.fontWeight = 'bold';
  };
  
  const onMouseOut = (event) => {
    const el = event.target;
    el.style.fontWeight = 'normal';
  };
  
