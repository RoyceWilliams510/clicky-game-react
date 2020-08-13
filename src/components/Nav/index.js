import React from "react";


function Nav(prop) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand" href="#">Don't Forget Your Friends!</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <span className="nav-link" href="#"> {prop.message} </span>
            </li>
          </ul>
          <span className="navbar-text">
           Score: {prop.score} | High Score: {prop.highScore}
          </span>
        </div>
      </nav>
    );
  }
  
  export default Nav;
  