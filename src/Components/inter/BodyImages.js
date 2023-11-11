import React from "react";
import "./body.css"
import logoB from '../images/logoB.jpg';
import logoC from '../images/logoC.jpg';
import logoD from '../images/logoD.jpg';
import logoE from '../images/logoE.jpg';
import resta from '../images/resta.jpeg';
import resta2 from '../images/resta2.jpeg';
import resta3 from '../images/resta3.jpeg';
import resta4 from '../images/resta4.jpeg';
import resta5 from '../images/resta5.jpeg';
import resta6 from '../images/resta6.jpeg';
import resta8 from '../images/resta8.jpeg';
import resta9 from '../images/resta9.jpeg';
import resta10 from '../images/resta10.jpeg';
import singapore from '../images/singapore.jpg';


export default function Body(){
    
    let logo_p2 =  <section className="logo-p2">
        <div className="p2">
        <img src= {logoB} alt="logo !found" className="logos-2"/>

        <img src= {logoE} alt="logo !found" className="logos-2"/>

         <img src= {logoC} alt="logo !found"         className="logos-2"/>

        <img src= {logoD} alt="logo !found" className="logos-2"/>
        </div>
        </section>
     


    return(
         <div className="main1"> 
            <p>{logo_p2}</p>
            <div className="residence">
            <h4>Best residence</h4>
            <h2>Popular Residences</h2> 
      </div>
                  
        <div id="res2">
        <div className="r2">  <img src= {resta} alt="logo !found" className="res-2"/>
        <div>
            <h2>$36500</h2>
            <h3>cargo</h3>
            <p>location</p>
        </div>
        </div>
      
       <div className="r2"><img src= {resta2} alt="logo !found" className="res-2"/> 
       <div>
            <h2>$35000</h2>
            <h3>cargo</h3>
            <p>location</p>
        </div>
</div>
        <div className="r2"><img src= {resta3} alt="logo !found"         className="res-2"/><div>
            <h2>$45000</h2>
            <h3>djiboati</h3>
            <p>location</p>
        </div>
        </div>
         
         <div className="r2"> <img src= {resta4} alt="logo !found" className="res-2"/><div>
            <h2>$65000</h2>
            <h3>malindi</h3>
            <p>location</p>
        </div>
         </div>
       
        <div className="r2"><img src= {resta5} alt="logo !found" className="res-2"/><div>
            <h2>$38900</h2>
            <h3>pakistan</h3>
            <p>location</p>
        </div>
        </div>
       
     <div className="r2"> <img src= {resta6} alt="logo !found" className="res-2"/><div>
            <h2>$54800</h2>
            <h3>dubai</h3>
            <p>location</p>
        </div>
        </div>    
       
       <div className="r2"> <img src= {singapore} alt="logo !found" className="res-2"/>
       <div>
        <h2>$55009</h2>
        <h3>singapore</h3>
        <p>location</p>
       </div>
       </div>
       <div className="r2"> <img src= {resta8} alt="logo !found" className="res-2"/><div>
            <h2>$40300</h2>
            <h3>france</h3>
            <p>location</p>
        </div>
        </div>
       
       <div className="r2"> <img src= {resta9} alt="logo !found" className="res-2"/><div>
            <h2>$45000</h2>
            <h3>paris</h3>
            <p>location</p>
        </div>
        </div>

        <div className="r2"> <img src= {resta10} alt="logo !found" className="res-2"/><div>
            <h2>$35800</h2>
            <h3>kilimall</h3>
            <p>location</p>
        </div>
        </div>
      </div>
      <div className="lg8">
        <img src={resta8} alt=" " />
        <div>

        <h2 color="gold" margin-left = '500px'>Our Values</h2>
        <details>
        <summary>best interest rate on the market</summary>
        <p>Always ready to help by providing the best services for you. We believe a good place for you to live will make you fell better </p>
        </details>
    
        <details>
            <summary>Prevent unstable prices</summary>
        <p>lways ready to help by providing the best services for you. We believe a good place for you to live will make you fell better</p>
        </details>
        <details>
            <summary>best prices in the market </summary>
        <p>lways ready to help by providing the best services for you. We believe a good place for you to live will make you fell better</p>
        </details>
         
        </div>

      </div >
            


         </div>   
    

    )
}

