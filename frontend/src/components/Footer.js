export default function Footer(){
    return (
        <>
            <div className="foot-split">
                <div className="foot-row">
                    <div className="foot-col">Office
                        <p className="foot-link">123 Dentst Rd. Columbus, OH, 43004</p>
                        <p className="foot-link">(XXX) XXX - XXXX</p>
                        <p className="foot-link">dentist@email.com</p>
                    </div>
                    <div className="foot-col">Services
                        <p className="foot-link">Dental Exams</p>
                        <p className="foot-link">Orthodontics</p>
                        <p className="foot-link">Procedures</p>
                        <p className="foot-link">Emergencies</p>
                    </div>
                    <div className="foot-col">Social
                        <div className="icon-box">
                            <div className="foot-icon"><i class="bi bi-instagram"></i></div>
                            <div className="foot-icon"><i class="bi bi-facebook"></i></div>
                            <div className="foot-icon"><i class="bi bi-twitter-x"></i></div>
                            <div className="foot-icon"><i class="bi bi-linkedin"></i></div>
                        </div>
                    </div>
                    <div className="foot-col">Reivew Us
                        <p className="foot-link">Google</p>
                        <p className="foot-link">Facebook</p>
                    </div>
                </div>

                <div className="foot-copy">
                    <p >© React Dental {new Date().getFullYear()}</p>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Accessbility</p>
                </div>

                <div className="designer">
                    <p>Dental Web Design & SEO by Noah Johnson</p>
                </div>
            </div>

            <div className="foot-c">
                <div className="foot-top">
                    <div className="foot-row-col">Office
                        <p className="foot-link">123 Dentst Rd. Columbus, OH, 43004</p>
                        <p className="foot-link">(XXX) XXX - XXXX</p>
                    </div>
                    <div className="foot-row-col">Services
                        <p className="foot-link">Orthodontics</p>
                    </div>
                </div>

                <div className="foot-bottom">
                    <div className="foot-row-col">Social
                        <div className="icon-box">
                            <div className="foot-icon"><i class="bi bi-instagram"></i></div>
                            <div className="foot-icon"><i class="bi bi-facebook"></i></div>
                            <div className="foot-icon"><i class="bi bi-twitter-x"></i></div>
                            <div className="foot-icon"><i class="bi bi-linkedin"></i></div>
                        </div>
                    </div>
                    <div className="foot-row-col">Reivew Us
                        <p className="foot-link">Google</p>
                        <p className="foot-link">Facebook</p>
                    </div>
                </div>

                <div className="foot-copy">
                    <p >© React Dental {new Date().getFullYear()}</p>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Accessbility</p>
                </div>

                <div className="designer">
                    <p>Dental Web Design & SEO by Noah Johnson</p>
                </div>
            </div>
        </>
    )
}