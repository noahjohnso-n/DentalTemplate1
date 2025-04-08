import Divider from "../Divider.js";
import ServicesColCard from "./ServicesColCard.js";

export default function ServicesCol(props){

    const  serviceColElements = props.s.map((service) => {
        return ( <ServicesColCard id = {service.id} services = {service} /> )})

    return (
        <>
            <div className="service-land">
                <img className="service-land-img" src = "/services-img.jpg" alt = ""/>
                <p className="service-land-title">React Dental</p>
                <p className="service-land-desc">Comprehensive care for your smile.</p>
                <button className="service-land-book">BOOK ONLINE</button>
            </div>

            <div className="services-for-all">
                <img className="services-for-img" src = "/services-for-all.jpg" alt = "Family at dentist." />
                <p className="services-for-title">All your family's dental needs in one place.</p>
                <p className="services-for-desc">Make every visit to the dentist a positive one, no matter what 
                    treatment you require. Our Columbus dental services address various concerns, from preventive 
                    needs to missing teeth — all while catering to your relaxation and enjoyment.
                </p>
                <p className="services-for-desc">
                    Book online today and discover why we’re the go-to destination for exceptional dental services in Columbus.
                </p>
            </div>
            
            <Divider />

            {serviceColElements}
        </>
    )
}