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
        <Route exact path="/Portfolio2020" component={Home} />
        <Route path="/Portfolio2020/home" component={Homei} />
        {/* <Route path="/" component={} /> */}
        {/* <Home></Home> */}
        {/* <Homei></Homei> */}
      </div>
    </Router>
  );
}

export default App;
