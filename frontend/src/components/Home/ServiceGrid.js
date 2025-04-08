import ServiceBookButtons from "../ServiceBookButtons.js";
import Divider from "../Divider.js";

export default function ServiceGrid(props){
    return (
        <>
            <div className = "service-full">
                <div className="service-left service-item">
                    <img className="service-left-img service-item-img" src = {props.services.img1} alt = "" />
                    <p className = "service-title">{props.services.title1}</p>
                    <p className = "service-desc">{props.services.desc1}</p>
                    <ServiceBookButtons />
                </div>
                <div className="service-right service-item">
                    <img className="service-right-img service-item-img" src = {props.services.img2} alt = "" />
                    <p className = "service-title">{props.services.title2}</p>
                    <p className = "service-desc">{props.services.desc2}</p>
                    <ServiceBookButtons />
                </div>
            </div>
            <Divider />
        </>
    )
}