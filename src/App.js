import React from 'react';
import logo from './logo.svg';
import './App.css';
import CandidateList from './components/candidateList';
import Appheader from './components/appheader';
import Appfooter from './components/appfooter';


function App(){
  return(
    <div>
      <Appheader/>
      <div className="App">
      <CandidateList/>
      </div>
      <Appfooter/>
    </div>      
  );
}

export default App;
