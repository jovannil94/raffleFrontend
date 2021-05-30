import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={'/'} component={Homepage}></Route>
        <Route exact path={'/signup'} component={Signup}></Route>
      </Switch>
    </div>
  );
}

export default App;
