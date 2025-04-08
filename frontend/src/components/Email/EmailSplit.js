import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function EmailSplit({type}){

    const [validEmail, setValidEmail] = useState(true);
    const navigate = useNavigate();

    function isValidEmail(e) {
        e = e.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(e);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const em = formData.get("email");
        // alert(em);
        if(isValidEmail(em)){
            if(type == "Dental Exams"){
                navigate("/booking-exams");
            }else if(type == "Braces"){
                navigate("/booking-braces")
            }else if(type == "Emergency"){
                navigate("/booking-emergency")
            }else if(type == "Procedures"){
                navigate("/booking-procedures")
            }else if(type == "Invisalign Aligners"){
                navigate("/booking-invisalign")
            }

        }else{
            setValidEmail(false);
        }
    }

    return (
        <>
            <div className="email-div">
                <div className="email-in">
                    <p className="email-t">What's your email?</p>

                    <form onSubmit={submitForm}>

                        <div className="e-in">
                                <input className="e-input" placeholder="Your email" name = "email" required autoComplete="off"></input>
                                <div className="small-divider-div">
                                    <div className="color-divider-green"></div>
                                </div>
                                {!validEmail && <div className="flex">
                                    <i class="bi bi-exclamation-triangle"></i><p className="email-warn">Please enter a valid email.</p>
                                </div>}
                                <button className="email-cont">CONTINUE</button>
                        </div>

                    </form>
                </div>
                <div className="email-img">
                    <img className="e-i" src = "/stock-lgreen.webp" alt = ""></img>
                </div>
            </div>
        </>
    )
}