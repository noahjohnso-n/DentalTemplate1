import Divider from "../Divider.js";
import { useState } from "react";

export default function AboutSplit(){

    const [showDrop, setShowDrop] = useState(true);
    
    function toggleShowDrop(){
        setShowDrop(!showDrop);
    }

    return (
        <section>
            <div className="about-landing-split">
                <div className="about-landing-left">
                    <p className="abt-title">We want you to look forward to the dentist.</p>
                </div>
                <div className="about-landing-right">
                    {showDrop && <p className="abt">Your mouth is in great hands at Tend. We adhere to the highest standard of care, use state-of-the-art technology, and take care of not just your oral health, but your overall health.</p>}
                    {!showDrop &&
                        <>
                            <p className="abt">Your mouth is in great hands at Tend. We adhere to the highest standard of care, use state-of-the-art technology, and take care of not just your oral health, but your overall health.</p>
                            <p className="abt">And for good reason. Lack of trust. Feeling judged. Discomfort.</p>
                            <p className="abt">Dentists recognize these frustrations. They know dental isn’t working the way it should. And they, too, want to make it better.</p>
                            <p className="abt">That’s why our team decided to remake the entire experience. We combine treatment you trust with a team who’ll never judge, an environment that soothes, and products that delight.</p>
                            <p className="abt">We want you to feel amazing about your oral health. Not just twice a year, but every time you take a bite, tell a joke, laugh, or share a kiss.</p>
                        </>
                    }
                    <div onClick={toggleShowDrop} className="read-more">
                        <p>Read {showDrop ? "more" : "less"} </p>{showDrop ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}
                    </div>
                </div>
            </div>
            <Divider />
            <div className="head-doc-div-split">
                <div className="head-doc-left">
                    <img className="head-doc-split" src = "/head-doc.jpg" alt = "Head doctor"/>
                </div>
                <div className="head-doc-right">
                    <p className= "abt-person">Dr. Jane Doe</p>
                    <p className="abt-job-split">General Dentist</p>
                    <p className="abt-person-desc">
                        Dr. Chris Salierno is Tend’s Chief Dental Officer. A native New Yorker, 
                        Dr. Chris graduated from Stony Brook School of Dental Medicine, where 
                        he also completed his residency. He started his own practice on Long 
                        Island and went on to become an educator, international lecturer, and 
                        the Chief Editor of Dental Economics. 
                    </p>
                    <p className="abt-person-desc">Dr. Chris has served as the National 
                        President of the American Student Dental Association and Chair of the ADA 
                        New Dentist Committee. He advises Tend on all clinical matters, helps 
                        to lead expansion efforts, and attracts the world’s top dental talent. 
                        Dr. Chris received his BA from Muhlenberg College.
                    </p>
                </div>
            </div>
            <Divider />
            <div className="team-div-split">
                <p className="team-title">Our Team</p>
                <div className="team-card-row">
                    <div className="team-card"><img className="employee-img-col" src = "/team-doc4.jpg" alt = "Team doctor."/>Margaret<p className="employee-job-col">Office Manager</p></div>
                    <div className="team-card"><img className="employee-img-col" src = "/team-doc3.jpg" alt = "Team doctor."/>Janet<p className="employee-job-col">Lead Hygienist</p></div>
                    <div className="team-card"><img className="employee-img-col" src = "/team-doc1.jpg" alt = "Team doctor."/>Danny<p className="employee-job-col">Dental Hygienist</p></div>
                </div>
            </div>
            <Divider />
            <div className="team-div-split">
                <div className="team-card-row">
                    <div className="team-card"><img className="employee-img-col" src = "/team-doc2.jpeg" alt = "Team doctor."/>Megan<p className="employee-job-col">Patient Experience Officer</p></div>
                    <div className="team-card"></div>
                    <div className="team-card"></div>
                </div>
            </div>
            <Divider />
            <div className="visit-today">
                <div id = "visit-head" className="visit-row">
                    <p className="visit-title-split">Visit us today!</p>
                </div>
                <div className="visit-row">
                    <i className="bi bi-geo-alt-fill geo-split"></i><p className="visit-text-split">123 Dentist Rd. Columbus, OH 43004</p>
                </div>
                <div className="visit-row">
                    <i className="bi bi-clock-fill clock-split"></i>
                    <div className="hour-col">
                        <p className="visit-text-split">Monday - Thursday: 9 - 7 </p>
                        <p className="visit-text-split">Friday & Saturday: 9 - 5 </p>
                    </div>
                </div>
                <div className="visit-row">
                    <i class="bi bi-telephone-fill tele-split"></i><p className="visit-text-split">(330) 323 - XXXX</p>
                </div>
                <div className="visit-row">
                    <i class="bi bi-envelope-fill mail-split"></i><p className="visit-text-split">dentist@email.com</p>
                </div>
            </div>
        </section>
    )
}