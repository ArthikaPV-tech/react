import React, {Component, useState} from "react";
import "./browse.css";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'; 
import Paydeal from "./payday";
import Vaccum from "./vacc";
import Hair from "./haircare";
import  Air from "./air";
import Light from "./light";
import Headphones from "./headphones";
import Seller from "./seller";
import "./vaccum.css";
function App() {

  return (
    <>
     <section className="intro">
            <nav className="navbar">
              <div className="container">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
               
              </div>
               <a className="navbar-brand brand b" href="#">dyson</a>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right r">
                  <li className="ac"><a href="#">Discover dyson</a></li>
                  <li className="ac"><a href="#">For business</a></li>
                  <li className="ac"><a href="#">Store Finder</a></li>
                  <li className="ac"><a href="#">Register Machine</a></li>
                  <li className="ac"><a href="#">Contact us</a></li>
                  
                </ul>
              </div>
              </nav>
              </section>
              <div className="navs">
        <Router>
           <ul className="hd">
                <li className="pay"><Link to="/">Paydeal</Link></li>
                <ul className="dropdown">
               <li><Link to="/vaccum">Vaccum & wet cleaners</Link>
               <div className="container dropdown-menu boxer">
            <div className="row">
              
                <div className="col-md-5 col-xs-12 ">
                 <h2>Explore vacuums & wet cleaners</h2>
                    <p>Cord-free Vacuums</p>
                    <p>Corded vacuums</p>
                    <p>Wet & Dry vacuum cleaners</p>
                    <p>Wet floor cleaners</p>
                    <p>Shop all vacuum cleaners</p>
                </div>
                
                 <div className="col-md-5 col-xs-12">
                     <h2>More from Dyson</h2>
                    <p>Help me choose</p>
                    <p>Stands, tools, batteries & filters</p>
                    <p>Dyson Dust Research</p>
                    <p>Pet Science</p>
                </div>
            </div>

        </div>

</li></ul>
<ul className="dropdown">
               <li><Link to="/hair">Hair care</Link>
                <div className="container dropdown-menu boxer">
            <div className="row">
              
                <div className="col-md-5 col-xs-12 a">
                 <h2>Explore vacuums & wet cleaners</h2>
                    <p>Cord-free Vacuums</p>
                    <p>Corded vacuums</p>
                    <p>Wet & Dry vacuum cleaners</p>
                    <p>Wet floor cleaners</p>
                    <p>Shop all vacuum cleaners</p>
                </div>
                
                 <div className="col-md-5 col-xs-12">
                     <h2>More from Dyson</h2>
                    <p>Help me choose</p>
                    <p>Stands, tools, batteries & filters</p>
                    <p>Dyson Dust Research</p>
                    <p>Pet Science</p>
                </div>
            </div>

        </div>
        </li></ul>
       <ul className="dropdown">
               <li><Link to="/air">Air purifiers</Link>
                <div className="container dropdown-menu boxer">
            <div className="row">
              
                <div className="col-md-5 col-xs-12">
                 <h2>Explore air purifies</h2>
                    <p>Air Purifiers</p>
                    <p>Purifier + Heaters</p>
                    <p>Shop all air purifiers</p>
                </div>
                
                 <div className="col-md-5 col-xs-12">
                     <h2>More from Dyson</h2>
                    <p>Help me choose</p>
                    <p>Purifier filters</p>
                    <p>Dyson air quality backpack research</p>
                    <p>Dyson Purifier Filter Research</p>
                    <p>Dyson Purifier Testing Standards</p>
                </div>
            </div>

        </div>
        </li></ul>
         
               <li><Link to="/hp">Headphones</Link></li>
                <li><Link to="/seller">Best sellers</Link></li>
             </ul>
            <Routes> 
              <Route exact path="/" element={<Paydeal/>}></Route>
              <Route exact path="/vaccum" element={<Vaccum/>}></Route>
              <Route exact path="/hair" element={<Hair/>}></Route>
              <Route exact path="/air" element={<Air/>}></Route>
              <Route exact path="/hp" element={<Headphones/>}></Route>
              <Route exact path="/seller" element={<Seller/>}></Route>
            </Routes>
            </Router>  
	  
    </div>
           
    
    </>
  );
}

export default App;