import React from "react";
import "./inter.css";
import logo from '../images/logo.jpeg';
import singapore from "../images/singapore.jpg";
import location from "../images/location.png";

export default function Inter(){
    return(
    <div>

    <section className="home_page" id="home">
  <a href="#home" > <img className="logo" src={logo} alt="Logo" /></a>   
        <nav>
        
        <a className="anchor" href="#residents">recidents</a>
            <a className="anchor" href="#values">our values</a>
            <a className="anchor" href="#contact">contact us</a>
            <a className="anchor" href="#getStarted">Get started</a>
            <a className="btn" href="+254789087363" target="_blank">contact</a>
     </nav>

    <h2 className="header">FREDDY's RESTARANT</h2>
        <div className="resta">
        <img className="restarant" src={singapore} alt="restarant"/>
        <div className="showfloat">
           <p>worldClasss restarant</p>
        </div>
        </div>

        <main className="main">
        
       <div className="intro">
       <p className="discover" >discover <br/>most suitable <br/>property</p>
        <p className="find">find a variety of properties that suit you very easily <br/>forget of difficulties in finding a residence for you</p>

       </div>
        <div className="search">
        <label for="search"> <img className="location" src={location} alt="Location"/></label>
        <input type="search" id="search" />
        <button className="btn--1">search</button>
        </div>
        <div className="rating">
            <p> <span className="rate-1">8900<span className="plus"> +</span><br/></span>Premium Products</p>

            <p> <span className="rate-1">1900<span   className="plus"  > +</span><br/></span>Happy Clients</p>

            <p> <span className="rate-1">20<span className="plus"> +</span><br/></span>Award Rating</p>

        </div>

        
        </main>  
    </section>

    <section className="residence">

    </section>
    
    </div>
    )
}