import Divider from "../Divider.js";
import ServiceBookButtons from "../ServiceBookButtons.js";

export default function ServiceCol(props){
    return (
        <>
            <div className="service-col">
                <img className = "col-img" src = {props.services.img} alt = "Service image."/>
                <p className="service-col-title">{props.services.title}</p>
                <p className="service-col-desc">{props.services.desc}</p>
                <ServiceBookButtons />
            </div>
            <Divider />
        </>
    )
}