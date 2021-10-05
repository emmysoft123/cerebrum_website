import React from 'react';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import './App.css';
//<Route path="/Login" component={DashBoardNavbarPage} exact />
import 'bootstrap/dist/css/bootstrap.min.css';
//    <Route path="/Login" component={LoginPage} exact />  
import SigninPage from './pages/signin';

import LoginPage from './pages/Login';
 import DashBoardNavbarPage from './pages/Dashboard';
import Home from './pages';
import PrivateRoute from "./pages/PrivateRoute";
import { AuthProvider } from "./Auth";


//import Footer from './components/Footer';
//import Sidebar from './components/Sidebar';
function App() {
	

  return (
    <AuthProvider>
    <Router>
    <Switch>
     <Route path="/" component= {Home} exact />
    <Route path="/signin" component={SigninPage} exact />
    <Route path="/Login" component={LoginPage} exact />    
    <Route path="/Dashboard" component={DashBoardNavbarPage} exact />
  
      
    </Switch>,
    
   
    </Router>
    </AuthProvider>
  );
}

export default App;
