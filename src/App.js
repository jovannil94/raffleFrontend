import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Register from './components/Register';
// import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Switch>
        <Route exact path={'/'} component={Homepage}></Route>
        <Route exact path={'/register'} component={Register}></Route>
      </Switch>
    </div>
  );
}

export default App;
