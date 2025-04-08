import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BookServiceCard2(props){

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const delay = props.id * 200; // Stagger animation based on ID
        const timer = setTimeout(() => {
            setAnimate(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [props.id]);

    const exams = { name: "exams"}

    return (
        <>
            <div className="card-separator">
                <div className={`book-service-card ${animate ? "animate" : ""}`}>
                    <Link to = "/email" state = {{type: props.s.title1}}>
                    <div className="flex">
                        <div className="switch-icon-lg"></div>
                        <div className="flex-c">
                            <p className="card-t-lg">{props.s.title1}</p>
                            <p className="card-d-lg">{props.s.desc1}</p>
                        </div>
                        <div className="r-arrow"><i class="bi bi-chevron-right"></i></div>
                    </div>
                    </Link>
                </div>

                {props.s.title2 && <div className={`book-service-card ${animate ? "animate" : ""}`}>
                    <Link to = "/email" state = {{type: props.s.title2}}>
                    <div className="flex">
                        <div className="switch-icon-lg"></div>
                        <div className="flex-c">
                            <p className="card-t-lg">{props.s.title2}</p>
                            <p className="card-d-lg">{props.s.desc2}</p>
                        </div>
                        <div className="r-arrow"><i class="bi bi-chevron-right"></i></div>
                    </div>
                    </Link>
                </div>}

                {!props.s.title2 && <div className="no-display"></div>}      
            </div>
        </>
    )
}