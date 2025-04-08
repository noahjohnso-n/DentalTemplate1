import Footer from "../Footer.js";
import LandingHeader from "../LandingHeader.js";
import InsuranceSplit from "./InsuranceSplit.js";
import InsuranceCol from "./InsuranceCol.js";

export default function Insurance(){
    return (
        <>
            <LandingHeader />
            <div id = "main-landing-split"><InsuranceSplit /></div>
            <div id = "main-landing"><InsuranceCol /></div>
            <Footer />
        </>
    )
}