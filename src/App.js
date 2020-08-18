import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Home from './pages/HomeComponent';
import Events from './pages/Events';
import Contact from './pages/ContactComponent';
import Projects from './pages/Projects';
import Members from './pages/Members';
import About from './pages/About';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch> 
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/about' component={About}></Route> 
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/events' component={Events}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/members' component={Members}></Route>
        <Route path="" component={NotFound} />
      </Switch> 
      </Router>
  </div>
  );
}

export default App;
