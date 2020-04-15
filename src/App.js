import React from 'react';
import {Route, Switch} from 'react-router';


import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';

const App = () => {
  return (


    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/login' component={Login}></Route>
      </Switch>

    </div>
  )
} 
  
  
  

export default App;


