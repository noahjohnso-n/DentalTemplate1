import SmallDivider from "../SmallDivider.js";

export default function ServicesColCard(props){
    return (
        <div className="service-card">
            <img src = {props.services.img} alt = ""/>
            <p className="service-name">{props.services.title}</p>

            <div className="service-description">
                {Array.isArray(props.services.desc) 
                    ? props.services.desc.map((text, index) => <><p className="service-text" key={index}>{text}</p><SmallDivider /></>) 
                    : <><p className="service-text">{props.services.desc}</p><SmallDivider /></>
                }
            </div>
            <p className="service-learn">Learn more</p>
            <SmallDivider />
            <div className = "book-half">
                <button className = "book-on book-btn">BOOK NOW</button>
                <button className = "call-book book-btn">CALL TO BOOK</button>
            </div>
        </div>
    )
}