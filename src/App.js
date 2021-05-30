import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Raffle from './components/Raffles';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Homepage}></Route>
        <Route exact path={'/raffles'} component={Raffle}></Route>
      </Switch>
    </div>
  );
}

export default App;
