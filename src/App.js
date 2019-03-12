/*
Requirements:
Props
State
ES6
API: https://restcountries.eu/rest/v2/all?limit=10
*/



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Gridflags from './components/Gridflags';

class App extends Component {
  render() {
    return (
      <div className="bodyColor">
      <Header/>
      <Gridflags/>
      </div>
    );
  }
}

export default App;
