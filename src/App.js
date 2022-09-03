import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import Footbar from './Footbar.js';
import College from './College';
import BusDetails from "./BusDetails";
import Driver from './Driver';
import Login from './Login';
const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/driver-details' element={<Driver/>}/>
          <Route path='/college-details' element={<College/>}/>
          <Route path='/bus-details' element={<BusDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
