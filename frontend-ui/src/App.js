import React, { Component } from 'react';
import Routes from "./routes/routes";
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/dashboard.jsx';
import Login from './pages/login.jsx';

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;