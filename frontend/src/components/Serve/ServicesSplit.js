import Divider from "../Divider.js";
import ServicesSplitCard from "./ServicesSplitCard.js";

export default function ServicesSplit(props){

    const  serviceSplitElements = props.s.map((service) => {
        return ( <ServicesSplitCard id = {service.id} services = {service} /> )})

    return (
        <>
            <div className="service-split">
                <img className="service-split-img" src = "/services-img.jpg" alt = "" />
                <p className="service-split-title">React Dental</p>
                <p className="service-split-desc">Comprehensive care for your smile.</p>
                <button className="service-split-book">BOOK ONLINE</button>
            </div>

            <div className="services-for-split">
                <div className="services-for-left">
                    <img className="services-for-img-split" src = "/services-for-all.jpg" alt = "Family at dentist." />
                </div>
                <div className="services-for-right">
                    <p className="services-for-title-split">All your family's dental needs in one place.</p>
                    <p className="services-for-desc-split">Make every visit to the dentist a positive one, no matter what 
                        treatment you require. Our Columbus dental services address various concerns, from preventive 
                        needs to missing teeth — all while catering to your relaxation and enjoyment.
                    </p>
                    <p className="services-for-desc-split">
                        Book online today and discover why we’re the go-to destination for exceptional dental services in Columbus.
                    </p>
                </div>
            </div>

            <Divider />

            { serviceSplitElements }
        </>
    )
}