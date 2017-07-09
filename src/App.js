import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BikeTable from './body/BikeTable';
import Header from './header/Header';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <BikeTable />
      </div>
    );
  }
}

export default App;
