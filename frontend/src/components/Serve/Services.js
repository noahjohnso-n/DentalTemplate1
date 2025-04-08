import Footer from "../Footer.js";
import LandingHeader from "../LandingHeader.js";
import ServicesCol from "./ServicesCol.js";
import ServicesSplit from "./ServicesSplit.js";

export default function Services(){

    const services = [
        { id: 1, title: "Dental Exams", desc: ["A comprehensive wellness visit with a comfortable cleaning (in the absence of periodontal disease), x-rays, and a personalized exam.", "60 minutes or less"], img: "../dental-exams.jpg"}, 
        { id: 2, title: "Orthodontics", desc: ["Straighten your smile with hidden, removable, dentist-led Invisalign aligners or standard braces.", "30 minutes or less"], img: "../ortho.jpg"},
        { id: 3, title: "Procedures", desc: ["Fillings, implants, crowns, Botox, Bridges, and anything else you may need to look and feel your best.", "Implants", "Veneers", "Whitening"], img: "../procedures.jpg"}, 
        { id: 4, title: "Emergency", desc: ["Chipped tooth? Filling came out? Toothache? Swelling? We’ll see you ASAP.", "Bleeding or swelling", "Pain or pressure", "Broken or lost tooth"], img: "../ache.jpg"},
    ]

    return (
        <>
            <LandingHeader />
            <div id = "main-landing-split">
                <ServicesSplit s = { services } />
            </div>
            <div id = "main-landing">
                <ServicesCol s = { services } />
            </div>
            <div className="space"></div>
            <Footer />
        </>
    )
}