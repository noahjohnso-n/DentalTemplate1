import Divider from "../Divider.js";
import ServiceBookButtons from "../ServiceBookButtons.js";

export default function LandingCol(){

    return (
        <>
            <div id = "landing-main">
                <img id = "landing-img" src = "/dentist-patient.jpg" alt = "Dental patient smiling."/>
                <p id = "landing-moto-full">Look forward to the dentist.</p>
                <p id = "landing-moto-desc">Top rated clinicians and no judgement, ever.</p>
                <ServiceBookButtons />
            </div>
            <Divider />
        </>
    )
}