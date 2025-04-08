import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BookServiceCard(props){

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const delay = props.id * 200; // Stagger animation based on ID
        const timer = setTimeout(() => {
            setAnimate(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [props.id]);

    return (
        <>
            <div className={`book-service-card ${animate ? "animate" : ""}`}>
                <Link to = "/email" state = {{type: props.s.title}}>
                    <div className="flex-space">
                        <div>
                            <div className="flex">
                                <div className="switch-icon"></div>
                                <p className="card-t">{props.s.title}</p>
                            </div>
                            <p className="card-d">{props.s.desc}</p>
                        </div>
                        <div className="r-arrow"><i class="bi bi-chevron-right"></i></div>
                    </div>
                </Link>
            </div>
        </>
    )
}