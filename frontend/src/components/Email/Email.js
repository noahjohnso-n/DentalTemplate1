import Footer from "../Footer.js"
import EmailCol from "./EmailCol.js"
import EmailSplit from "./EmailSplit.js"
import WhiteLanding from "../WhiteLanding.js"
import { useLocation } from "react-router-dom"

const Email = () => {
    // Get location state (i.e., the data passed via the Link)
    const location = useLocation();
    const t = location.state || {}; // Retrieve the state or fallback to an empty object

    return (
        <>
            <WhiteLanding />
            <div id="main-landing-split">
                <EmailSplit type={t.type} /> 
            </div>
            <div id="main-landing">
                <EmailCol type={t.type} />
            </div>
            <Footer />
        </>
    );
}

export default Email;
