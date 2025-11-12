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
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
          
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#mainNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              
            </div>
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="nav navbar-nav">
               <li className="pay"><Link to="/" className="dropdown-toggle">Paydeal</Link></li>
                {/* Vacuum */}
                <li className="dropdown">
                  <Link
                    to="/vaccum"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Vacuum & Wet Cleaners <span className="caret"></span>
                  </Link>
                  <div className="dropdown-menu boxer container">
                    <div className="row">
                      <div className="col-md-5 col-xs-12">
                        <h4>Explore vacuums & wet cleaners</h4>
                        <p>Cord-free Vacuums</p>
                        <p>Corded vacuums</p>
                        <p>Wet & Dry vacuum cleaners</p>
                        <p>Wet floor cleaners</p>
                      </div>
                      <div className="col-md-5 col-xs-12">
                        <h4>More from Dyson</h4>
                        <p>Help me choose</p>
                        <p>Stands, tools, batteries & filters</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="dropdown">
                  <Link to="/hair" className="dropdown-toggle" data-toggle="dropdown">
                    Hair Care <span className="caret"></span>
                  </Link>
                  <div className="dropdown-menu boxer container">
                    <div className="row">
                      <div className="col-md-5 col-xs-12">
                        <h4>Explore hair care</h4>
                        <p>Hair dryers</p>
                        <p>Hair stylers</p>
                      </div>
                      <div className="col-md-5 col-xs-12">
                        <h4>More from Dyson</h4>
                        <p>Accessories</p>
                        <p>Help me choose</p>
                      </div>
                    </div>
                  </div>
                </li>

            
                <li className="dropdown">
                  <Link to="/air" className="dropdown-toggle" data-toggle="dropdown">
                    Air Purifiers <span className="caret"></span>
                  </Link>
                  <div className="dropdown-menu boxer container">
                    <div className="row">
                      <div className="col-md-5 col-xs-12">
                        <h4>Explore air purifiers</h4>
                        <p>Air Purifiers</p>
                        <p>Purifier + Heaters</p>
                      </div>
                      <div className="col-md-5 col-xs-12">
                        <h4>More from Dyson</h4>
                        <p>Purifier filters</p>
                        <p>Testing standards</p>
                      </div>
                    </div>
                  </div>
                </li>

          
                <li>
                  <Link to="/hp">Headphones</Link>
                </li>
                <li>
                  <Link to="/seller">Best Sellers</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Paydeal />} />
          <Route path="/vaccum" element={<Vaccum />} />
          <Route path="/hair" element={<Hair />} />
          <Route path="/air" element={<Air />} />
          <Route path="/hp" element={<Headphones />} />
          <Route path="/seller" element={<Seller />} />
        </Routes>
      </Router>
    </div>
    </>
  );
 
}


export default App;
