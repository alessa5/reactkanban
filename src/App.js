import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CandidateList from './components/candidateList';
import Appheader from './components/appheader';
import Appfooter from './components/appfooter';


function App(){
  return(
    <div>
      <Router>
        <div className="App">
        <Appheader/>
        <div >
          <CandidateList/>
          </div>
          <Appfooter/>
        </div>
      </Router>      
    </div>      
  );
}

export default App;
