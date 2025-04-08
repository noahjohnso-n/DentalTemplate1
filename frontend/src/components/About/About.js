import LandingHeader from "../LandingHeader.js";
import AboutSplit from "./AboutSplit.js";
import AboutCol from './AboutCol.js';
import Footer from "../Footer.js";

export default function About(){
    return (
        <>
            <LandingHeader />
            <div id = "main-landing-split"><AboutSplit /></div>
            <div id = "main-landing"><AboutCol /></div>
            <Footer />
        </>
        
    );
}