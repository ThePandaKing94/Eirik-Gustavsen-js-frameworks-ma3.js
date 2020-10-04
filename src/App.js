import React, { Component } from 'react';
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Layout/Home';
import News from './Components/Layout/News';
import Login from './Components/Layout/Login';


function App() {
  return (
    <div className="App">
      <Layout/>
    </div>  
  );
}

export default App;
