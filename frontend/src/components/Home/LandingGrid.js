import Divider from "../Divider.js";
import { Link } from "react-router-dom";

export default function LandingGrid(){
    return (
      <>
        <div id = "landing-div">
          <div id = "landing-left">
            <p id = "landing-moto">Look forward to the dentist.</p>
            <p id = "landing-desc" >Top rated clinicians and no judgement, ever.</p>
            <Link to = "/book"><button id = "landing-book">BOOK NOW</button></Link>
            <p id = "landing-num">OR CALL: XXX - XXX - XXXX</p>
          </div>
          <img id = "landing-img-tall" src = "/dentist-patient-tall.jpg" alt = "Dental patient." />
        </div>
        <Divider />
      </>
    )
}