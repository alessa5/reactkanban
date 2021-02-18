import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import CandidateList from './components/candidateList';
import Createcandidate from './components/createcandidate';
import Updatecandidate from './components/updatecandidate';
import Appheader from './components/appheader';
import Appfooter from './components/appfooter';


function App(){
  return(
    <div>
      <BrowserRouter>
      <Appheader/>
      <div className="container">
          <Switch> localhost:3000
              <Route path='/' exact component={CandidateList}></Route>
              <Route path='/mainPage' component={CandidateList}></Route>
              <Route path='/postCandidate' component={Createcandidate}></Route>
              <Route path='/putCandidate/:id' component={Updatecandidate}></Route>
          </Switch>
      </div>
      </BrowserRouter> 
      <Appfooter/>   
    </div>      
  );
}

export default App;
