import React, { Component } from "react";
import "./App.css";
import Smurfs from './components/smurfs';
import SmurfCard from "./components/smurf-card";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfCard />
        <Smurfs />
      </div>
    );
  }
}

export default App;
