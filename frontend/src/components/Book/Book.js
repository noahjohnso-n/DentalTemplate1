import Footer from "../Footer.js";
import LandingHeader from "../LandingHeader.js";
import BookServiceCard from "./BookServiceCard.js";
import BookServiceCard2 from "./BookServiceCard2.js";

const services = [
    { id: 1, title: "Dental Exams", desc: "Routine cleaning, x-rays, and exam"}, 
    { id: 2, title: "Procedures", desc: "Botox, implants, and more"}, 
    { id: 3, title: "Braces", desc: "Standard metal fitting braces"},
    { id: 4, title: "Invisalign Aligners", desc: "Discreet, removable aligners"},
    { id: 5, title: "Emergency", desc: "We'll get you in ASAP"},
]

const two_services = [
    { id: 1, title1: "Dental Exams", desc1: "Routine cleaning, x-rays, and exam", title2: "Procedures", desc2: "Botox, implants, and more"}, 
    { id: 2, title1: "Braces", desc1: "Standard metal fitting braces", title2: "Invisalign Aligners", desc2: "Discreet, removable aligners"},
    { id: 3, title1: "Emergency", desc1: "We'll get you in ASAP"}
]

export default function Book(){

    const  bookServiceElements = services.map((service) => {
        return ( <BookServiceCard id = {service.id} s = {service} /> )
    })

    const bookServiceElements2 = two_services.map((service) => {
        return ( <BookServiceCard2 id = {service.id} s = {service} />)
    })

    return (
        <>
            <LandingHeader />
                <h1 className="book-title">How can we help?</h1>
                <div className="book-divider"></div>
                <div id = "book-card-holder-sm" className="book-card-holder">
                    {bookServiceElements}
                </div>

                <div id = "book-card-holder-lg" className="book-card-holder">
                    {bookServiceElements2}
                </div>
                
            <Footer />
        </>
    )
}