import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from "./Home";
import News from "./News";
import Login from "./Login";
import Heading from './Heading';
 
 function Layout ({ children }) {
     return (
         <div>            
             <Home/>
             <News/>
             <Login/>
             <Link to="/">Home </Link>
             <Link to="/News">News </Link>
             <Link to="/Login">Login </Link>
    </div>
     );
   }
 
 export default Layout;
