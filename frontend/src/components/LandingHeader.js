import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingHeader(){

  const [showDrop, setShowDrop] = useState(false);

  function toggleShowDrop(){
    setShowDrop(!showDrop);
  }

    return(
      <header>
        <div id = "header">
          <div class = "head" id = "head-left">
            <a id = "head-logo-link" href = "/"><img id = "head-logo" src = "/rdental4.png" alt = "React Dental Logo"/></a>
          </div>
          <div class = "head" id = "head-right">
            <Link to = "/about"><div class = "head-btn collapse-btn">ABOUT</div></Link>
            <Link to = "/services"><div class = "head-btn  collapse-btn">SERVICES</div></Link>
            <Link to = "/insurance"><div class = "head-btn  collapse-btn">INSURANCE</div></Link>
            <div onClick = {toggleShowDrop} class  = "head-btn  choice-btn"><i id = "head-list" class="bi bi-list"></i></div>
            <Link to = "/book"><div class  = "head-btn collapse-book" id = "book-online">BOOK</div></Link>
            {/* <div class  = "head-btn collapse-book" id = "book-online">BOOK</div> */}
          </div>
        </div>
        <div id = "dropdown" className={`dropdown ${showDrop ? "show" : ""}`}>
          <Link to = "/about">
            <div className="highlight" id = "about-drop">
            <p className="drop-btn">ABOUT</p>
            <p className="drop-plus">+</p>
            </div>
          </Link>
          
          <Link to = "/services">
            <div className="highlight" id = "services-drop">
              <p className="drop-btn">SERVICES</p>
              <p className="drop-plus">+</p>
            </div>
          </Link>

          <Link to = "/insurance">
            <div className="highlight" id = "new-patients-drop">
              <p className="drop-btn">INSURANCE</p>
            </div>
          </Link>
          
          <Link className="drop-book-a" to = "/book">
            <button className="drop-book">BOOK ONLINE</button>
          </Link>
        </div>
      </header>
    )
  }