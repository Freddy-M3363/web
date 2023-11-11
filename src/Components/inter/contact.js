import React from "react";
import "./contact.css"
import resta8 from "./images/resta8";

 export default function Contact(){
    return (
        <div>
                <img src={resta8} alt=" "/>
                <h2>Contact Us</h2>
                <h3>Easy way to contact us</h3>
                <p> we are always ready to serve you as our client. here are the methods that you can use to reach us for free.</p>
                <div className="cont">
                    <div>
                        <h5>Call</h5>
                        <p>0707090876</p>
                        <a href="#0707090876">call now</a>

                    </div>
                    <div>
                        <h5> Video Call</h5>
                        <p>0707090876</p>
                        <a href="#0707090876">Video  call now</a>

                    </div>
                    <div>
                        <h5>Chat</h5>
                        <p>0707090876</p>
                        <a href="#0707090876">Chat now</a>

                    </div>
                    <div>
                        <h5>message</h5>
                        <p>(+1) 9870 709 0876</p>
                        <a href="#0707090876">message now</a>

                    </div>
                </div>

        </div>
    )
 }