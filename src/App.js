import React,{ Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Homei from './components/Homei'
import Home from './components/Home'
// import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar></Navbar> */}
        <Route exact path="/" component={Homei} />
        <Route path="/home" component={Home} />
        {/* <Route path="/" component={} /> */}
        {/* <Home></Home> */}
        {/* <Homei></Homei> */}
      </div>
    </Router>
  );
}

export default App;