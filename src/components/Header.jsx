import React from "react";
import '../App.css'


function Header(){
    return(
        <div className="header">

          <div className="title">
            <h1>Book App</h1>

              <div className="tabs">
                <h3>Home</h3>
                <h3>Books</h3>
                <h3>About</h3>
            </div>
          </div>
        </div>
    )
}

export default Header;
