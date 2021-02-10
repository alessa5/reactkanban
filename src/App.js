import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import CandidateList from './components/candidateList';
import Createcandidate from './components/createcandidate';
import Appheader from './components/appheader';
import Appfooter from './components/appfooter';


function App(){
  return(
    <div>
      <BrowserRouter>
      <Appheader/>
      <div className="container">
          <Switch> localhost:3000
              <Route path='/mainPage' component={CandidateList}></Route>
              <Route path='/putCandidate' component={Createcandidate}></Route>
          </Switch>
      </div>
      </BrowserRouter> 
      <Appfooter/>   
    </div>      
  );
}

export default App;
