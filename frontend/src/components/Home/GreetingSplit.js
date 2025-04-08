import Divider from "../Divider.js";

export default function GreetingSplit(){
    return (
        <>
        <div className = "greet-split">
            <div className="welcome-split">
                <div className="welcome-split-desc">
                    <p className="welcome-split-title">Welcome to React Dental!</p>
                    <p className="welcome-split-par1">
                    Enjoy modern dental care in a calm, spa-like setting.
                    Our experienced team at React Dental combines years of expertise with cutting-edge technology to provide high-quality, personalized treatments.
                    </p>
                    <p className="welcome-split-par2">
                    Inspired by the dynamic nature of connection and innovation, we’re committed to delivering seamless, efficient care tailored to your needs.
                    Step into a welcoming environment where your comfort and smile are our top priorities — transforming every visit into a positive and refreshing experience.
                    </p>
                </div>

                <img className="welcome-split-pic" src = "/dental-team.jpg" alt = "Dental team."/>
            </div>
        </div>
        <Divider />
        </>
    )
}