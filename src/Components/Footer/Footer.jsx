import React from "react";
import './Footer.css';

export default () =>{

  return(
    <footer className="text-center text-white" style={{"background-color": "#caced1"}}>

            
       <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>
              © 2022 Copyright: <a className="text-white">Squad30 - Recode Pro </a>
                
       </div>
            
    </footer>
  )
}