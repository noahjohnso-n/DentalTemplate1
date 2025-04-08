import { Link } from "react-router-dom"

export default function WhiteLanding(){
    return(
      <header >
        <div id="white-header">
          <Link to = "/book"><i className="bi bi-arrow-left book-arrow"></i></Link>
          <Link className="link" to = "/"><img className="react-white" src = "react-white.png" alt = ""></img></Link>
        </div>
      </header>
    )
  }