import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SmallDivider from "../SmallDivider.js"

export default function InsuranceSplit(){

    const [showDrop, setShowDrop] = useState(false);
    const [isVisible, setIsVisible] = useState(true); //*** */
    const [hasInsurance, setHasInsurnace] = useState(null);
    
    /* THESE ARE FOR THE DROPDOWN INPUT */
    const dropdownRef = useRef(null); 
    const [Insurance, setInsurance] = useState(null);
    const [inputValue, setInputValue] = useState(""); 
    /* THESE ARE FOR THE DROPDOWN INPUT */
    
    const [faqDrop1, setFaqDrop1] = useState(false);
    const [faqDrop2, setFaqDrop2] = useState(false);
    const [faqDrop3, setFaqDrop3] = useState(false);
    const [faqDrop4, setFaqDrop4] = useState(false);
    const [faqDrop5, setFaqDrop5] = useState(false);
    const [faqDrop6, setFaqDrop6] = useState(false);
    const [faqDrop7, setFaqDrop7] = useState(false);
    const [faqDrop8, setFaqDrop8] = useState(false);
    const [faqDrop9, setFaqDrop9] = useState(false);
    const [faqDrop10, setFaqDrop10] = useState(false);
    const [faqDrop11, setFaqDrop11] = useState(false);
    
    function toggleFaqDrop1(){setFaqDrop1((prev) => !prev);}
    function toggleFaqDrop2(){setFaqDrop2((prev) => !prev);}
    function toggleFaqDrop3(){setFaqDrop3((prev) => !prev);}
    function toggleFaqDrop4(){setFaqDrop4((prev) => !prev);}
    function toggleFaqDrop5(){setFaqDrop5((prev) => !prev);}
    function toggleFaqDrop6(){setFaqDrop6((prev) => !prev);}
    function toggleFaqDrop7(){setFaqDrop7((prev) => !prev);}
    function toggleFaqDrop8(){setFaqDrop8((prev) => !prev);}
    function toggleFaqDrop9(){setFaqDrop9((prev) => !prev);}
    function toggleFaqDrop10(){setFaqDrop10((prev) => !prev);}
    function toggleFaqDrop11(){setFaqDrop11((prev) => !prev);}
    
    const insuranceList = [
        "Access Plans USA (AKAAon Benefit Solutions)",  
        "Access One Consumer Health, Inc",  
        "ACS Benefit Services LLC",  
        "Actuarial Management Resources, Inc",  
        "Admin/Dental Pay",  
        "Administration Services Only (ASO)",  
        "Administration Systems Research Corp",  
        "Administrative Concepts, Inc",  
        "Administrative Solutions, Inc",  
        "ADN Administrators, Inc.",  
        "Advantica (FKA Essex Dental Benefits)",  
        "AFSCME Care Plan of Ohio",  
        "Aetna PPO/DMO",  
        "Aliera Healthcare Inc",  
        "Allied Benefit System Inc",  
        "AlwaysCare Benefits/Unum/Starmount",  
        "Ameraplan",  
        "Amerihealth",  
        "Amerigroup",  
        "American Dental Professional Services",  
        "American Sterling Dental Health Plan Inc.",  
        "Ameritas Life Insurance Corp. - Group Div",  
        "Anthem Blue Cross & Blue Shield",  
        "Apex Benefits Services, LLC",  
        "Argus Dental Plans",  
        "Assured Benefits Administrators, Inc.",  
        "Assurant PPO",  
        "Aultra Administrative Group",  
        "Automated Benefit Services",  
        "Avalon Benefit Services, Inc",  
        "Avesis Incorporated",  
        "Avesis Medicaid",  
        "Beam Dental",  
        "Ben-E-Lect",  
        "Benefit Administrative Solutions, Inc-aka HUM Int",  
        "Benefit Administrative Systems, LLC",  
        "Benefit Administrators Inc. AK HUB International E",  
        "Benefit Assistance Corporation",  
        "Benefit Services-New Jersey",  
        "Benesys Inc.",  
        "Bento a.k.a. Cambalt Solutions, Inc",  
        "BEST Health Plans",  
        "Best Life & Health Insurance Company",  
        "Beta Health Association",  
        "Blue Cross and Blue Shield of Kansas City",  
        "Blue Cross Blue Shield of AL",  
        "Blue Cross Blue Shield of AZ",  
        "Blue Cross Blue Shield of AZ Advantage",  
        "Blue Cross Blue Shield of MA",  
        "Blue Cross Blue Shield of MI",  
        "Blue Cross Blue Shield of South Carolina",  
        "Blue Cross Blue Shield of TN",  
        "Blue Cross of Idaho",  
        "Bright Benefits",  
        "Brokerage Concepts, Inc.",  
        "Business Administrators & Consultants",  
        "Capitol Administrators CA",  
        "CareFirst Advantage PPO, Inc",  
        "CAREington",  
        "Central States Health & Life Co.",  
        "Centrix Benefit Administrators, Inc.",  
        "Century Healthcare",  
        "CFA (Formerly NCAS)",  
        "CIGNA PPO (PAINTERS/FIREFIGHTER AND LOCAL UNION PLAN)",  
        "Citizens Security Life Ins. Co",  
        "CNIC Health Solutions Inc",  
        "Colonial Life & Accident Insurance Company",  
        "Companion Life-BCBS of SC",  
        "CompBenefits-Humana Dental",  
        "Comprehensive Health Services, Inc",  
        "CoreSource (FKA: FMH Benefit Services, Inc.)",  
        "CoreSource of IL",  
        "CoreSource of MD",  
        "CoreSource of OH",  
        "CoreSource of PA",  
        "Colonial Life/Harrington",  
        "Coverdell",  
        "Custom Design Benefits",  
        "Cypress Dental Administrators",  
        "DC Medicaid",  
        "DeCare International",  
        "Delta Dental PPO",  
        "Delta Health Systems",  
        "DENCAP Dental Plans, Inc.",  
        "Dentalplans.com",  
        "DentaQuest",  
        "DentaQuest ConnectiCare",  
        "Dentemax",  
        "Dentist Direct LLC",  
        "DFB TPA Services LLC",  
        "Dominion Dental Services USA Inc",  
        "EBSO, Inc. AKA 90 Degree Benefits",  
        "Emblem Health/GHI",  
        "EMI Health",  
        "Employee Benefit Services, Inc",  
        "Employee Benefits Administrators, Inc",  
        "Employee Health Insurance Management, Inc (EHIM)",  
        "Employee Painters Trust Health & Welfare",  
        "Employee Security Inc.",  
        "Employer Driven Insurance Services, Inc",  
        "Encore Dental/Stonebridge Life",  
        "Enterprise Group Planning",  
        "Envolve",  
        "EPIC Life Insurance Company",  
        "Equitable (Formerly AXA)",  
        "Equitable Financial Life Insurance Company",  
        "Excellus",  
        "Eye Benefits",  
        "FEP BlueDental",  
        "Financial Marketing Concept, LTD",  
        "First Continental Life",  
        "Florida Combined Life",  
        "Florida Health Administrators (FHA-TPA)",  
        "Flossy a.k.a Grin Technology Services, Inc.",  
        "Free Market Administrators",  
        "Fringe Benefit Group, Inc.",  
        "Geha",  
        "Generali Global Health Services (GGHS)",  
        "Global Excel Management",  
        "Global Health",  
        "Global Management",  
        "Group & Pension Administrators Inc",  
        "Group Administrators Ltd",  
        "Group Benefit Services, Inc",  
        "Group Dental Services of Maryland",  
        "Group Insurance Service Center, INC",  
        "Group Management Services (GMS)",  
        "Group Resources, Inc.",  
        "HAA Preferred Partners LLC",  
        "Harrington/Colonial Life",  
        "Health Design Plus",  
        "Health Economics Group Inc",  
        "Health Partners Dental Administration",  
        "Health Plan Administrators LLC",  
        "Healthplex",  
        "HealthEZ",  
        "Healthgram",  
        "Healthscope Benefits",  
        "Healthscope Dental",  
        "HealthSmart Benefit Solutions - WV",  
        "HealthSmart Benefit Solutions- AZ",  
        "HealthSmart Benefit Solutions-OH",  
        "HealthSmart-KY-Employee Benefits Administrators Inc",  
        "Health Markets",  
        "HealthNet Associates",  
        "Health Resources/Dental Health Options",  
        "Horizon Blue Cross",  
        "Humana Dental Insurance Corporation",  
        "Humana (Zelis)",  
        "Humana PPO (Nationwide)",  
        "INDECS Corporation",  
        "iNetico",  
        "Insight Benefit Administrators, LLC",  
        "Insurance Administrators of America",  
        "Insurance Design Administrators",  
        "Insurance Management Services, Inc (IMS)",  
        "Interactive Medical Systems",  
        "International Medical Group Inc.",  
        "J. J. Stanis and Company",  
        "JP Farley",  
        "Key Benefits Administrators",  
        "Kaiser (for Maryland Medicaid plans with Scion Dental only)",  
        "Koegel Meats, Inc.",  
        "Kuwait Cultural Office (KCO)",  
        "Level",  
        "Level Benefits Inc. DBA Level",  
        "Liberty Dental Plan",  
        "Lifetime Benefit Solutions fka: EBS-RMSCO, Inc.",  
        "Lifemap",  
        "Lincoln Financial Group",  
        "Managed Care of North America",  
        "MedBen",  
        "Medical Benefit Administrators of Maryland, Inc",  
        "Manhattan Life",  
        "Medical Mutual of Ohio (MMOH)",  
        "Medico",  
        "Merchants Benefit Administrators",  
        "Meritain Health - EV Benefits Mgmt",  
        "Meritain Health - Minneapolis CBSA Inc.",  
        "Meritain Health - North American Benefits Network",  
        "Meritain Health - Westport",  
        "Meritain Health - Weyco",  
        "Meritain Health - North American Health Plans",  
        "Meritain Health - Smith Administrators",  
        "Mid America Associates",  
        "Mid-American Benefits Inc",  
        "Morgan White - Standard Life/Am First",  
        "Mutual of Omaha",  
        "MVP Health Care",  
        "myBenefits.ai, Inc.",  
        "National Foundation Life",  
        "Nevada Dental Benefits, Ltd",  
        "NexDent Dental Plans, Inc",  
        "NGS American",  
        "Nippon Life Insurance Company of America",  
        "Nova Healthcare Administrators",  
        "NovaNet Inc",  
        "Ohio Conference of Teamsters Health & Welfare Fund",  
        "Ohio State Plumbers & Pipefitters Health & Welfare",  
        "PacificSource Healthplans",  
        "Passive PPO",  
        "Patient Provider Alliance, Inc",  
        "Peoples Benefit Life Insurance Company",  
        "Planned Administrators, Inc",  
        "Point Comfort Underwriters, Inc",  
        "PPO USA Inc.",  
        "Prairie States Enterprises",  
        "Preferred Administrators",  
        "Premier Access",  
        "Prime Health Services, Inc",  
        "Principal Life Insurance Company",  
        "Printing Specialties/Northwest",  
        "Priority Health (FKA: CAM Administrative Services)",  
        "Priority Partners",  
        "Pro Benefits Administrators",  
        "Prodegi Corporate Benefit Services",  
        "Professional Benefit Administrators, Inc.",  
        "Professional Claims Management",  
        "ProMedical Plan PHC Inc",  
        "Promptous Inc",  
        "Redwood Health Services",  
        "Regence Blue Shield",  
        "Regency Employee Benefits Inc.",  
        "Regional Care, Inc",  
        "Renaissance Holdings",  
        "Renaissance",  
        "Revolv, Inc. (FKA Corvesta Services, Inc)",  
        "Revolv Corvesta",  
        "Scion Dental",  
        "Scion-Kaiser",  
        "Secure One Benefit Administrator Inc.",  
    ]; 

    const acceptedInsurance = ["A", "B", "Aetna PPO/DMO"]

    function toggleShowDrop(event) {
        event.preventDefault();
        setShowDrop(!showDrop);
    }

    function insuranceSelect(value) {
        setInsurance(value);
        setShowDrop(false);
        setInputValue(""); 
    }

    function goBack(){
        setIsVisible(true);
        setHasInsurnace(null);
        setInsurance(null);
        setInputValue("");
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDrop(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const filteredInsurance = insuranceList.filter(insurance =>
        insurance.toLowerCase().includes(inputValue.toLowerCase())
    );


    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // alert(JSON.stringify(Object.fromEntries(formData)));
        var formName = JSON.stringify(Object.fromEntries(formData).insurance);
        setIsVisible((prev) => !prev);
        formName = formName.slice(1,-1);

        if(acceptedInsurance.includes(formName)){
            setHasInsurnace(true);
        }else{
            setHasInsurnace(false);
        }
        
        const fetchOptions = {
            method: "POST", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Object.fromEntries(formData))
        };

        try{
            fetch("/insurance", fetchOptions);
        }catch (error){
            console.log(error);
        }
    }

    return (
        <>
            <h1 className="i-title-split">Insurance</h1>
            <p className="i-text">We accept most dental insurance plans, and we bill for services through insurance, just like a typical dentist’s office.</p>
            <div className="i-container">
                {isVisible && <div className="i-box">
                    <p className="i-box-title-split">See if your exam is covered</p>
                    <p className="i-box-text-split">Curious if your insurance covers you for a React exam? We can tell you in just a few seconds.</p>
                    <form onSubmit={submitForm} className="insurance-form">
                        
                        <div className="form-in">
                            <input className="i-input" placeholder="Your name" name = "name" required autoComplete="off"></input>
                            <div className="small-divider-div">
                                <div className="color-divider"></div>
                            </div>
                        </div>

                        <div className="form-in">
                            <input className="i-input" placeholder="Your email" name = "email" required autoComplete="off"></input>
                            <div className="small-divider-div">
                                <div className="color-divider"></div>
                            </div>
                        </div>

                        <div className="drop form-in" ref={dropdownRef}>
                            <button
                                type="button"
                                onFocus={toggleShowDrop}
                                className="i-input dropdown-btn"
                                name = "insurance"
                            >   
                                {(!showDrop && !Insurance) ? "Insurance" : (!showDrop && Insurance) ? Insurance : ""}
                            </button>
                            <div className="small-divider-div">
                                <div className="color-divider"></div>
                            </div>
                            <div className={`drop-content ${showDrop ? "shows" : ""}`}>
                                <ul>
                                    {filteredInsurance.map((insurance, index) => (
                                        <li key={index} onClick={() => insuranceSelect(insurance)}>
                                            {insurance}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {showDrop && (
                                <input
                                    autoFocus = "true"
                                    type="text"
                                    value={inputValue}
                                    className="searchable"
                                    placeholder="Type your insurance"
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            )}
                        </div>

                        <input className="insurance-input" name = "insurance" value = {(!showDrop && !Insurance) ? "Insurance" : (!showDrop && Insurance) ? Insurance : ""} required></input>

                        <button className="form-submit" type="submit">Submit</button>
                    </form>
                </div>}
                {!isVisible && <div className="i-response">
                    <div onClick={goBack} className="back-arrow"><i class="bi bi-arrow-left"></i></div>
                    {hasInsurance && <div className="i-good">
                        <div className="i-check"><i className="bi bi-check i-i-check"></i></div>
                        <h1 className="i-good-text">Good news!</h1>
                        <h2 className="i-good-text">We're in touch with {Insurance}.</h2>
                        <p className="i-good-text-plain-split">*We’re in-network with most plans offered by your insurer, but don’t accept HMO, DMO, or Medicare plans. If we don’t accept your plan, we’ll be in touch before your visit.</p>
                        <Link className="no-i-a" to = "/book">
                            <button className="no-insurance-book-split">BOOK NOW</button>
                        </Link>
                    </div>}
                    {!hasInsurance && <div className="i-x">
                        <div className="sorry-msg">Sorry, we do not accept your insurance.</div>
                        <p>The good news: you can still be treated at React! Here are estimated costs for out most common services.</p>
                        <div className="estimated-costs">
                            <div className="e-row"><div className="e-t">Services</div><div className="e-t">Estimated Cost</div></div>
                            <div className="thick-div"></div>
                            <div className="e-row"><div className="e-p">First Dental Exam</div><div className="e-p">$375</div></div>
                            <SmallDivider />
                            <div className="e-row"><div className="e-p">Filling</div><div className="e-p">$113-$420</div></div>
                            <SmallDivider />
                            <div className="e-row"><div className="e-p">Non-surgical Periodontal Treatment</div><div className="e-p">$175-$298</div></div>
                            <SmallDivider />
                            <div className="e-row"><div className="e-b">Emergency Exam</div><div className="e-b">$215</div></div>
                        </div>
                        <Link className="no-i-a" to = "/book">
                            <button className="no-insurance-book-split">BOOK NOW</button>
                        </Link>
                    </div> }

                </div>}
            </div>
            <div className="faq">
                <p className="faq-title">Frequently Asked Questions</p>
                <div className="thick"></div>
                <div onClick={toggleFaqDrop1} className="q-div">
                    <div className="faq-q">How can I check what my out-of-network benefits are?</div>
                    <div className="faq-arrow">{!faqDrop1 && <i class="bi bi-chevron-down"></i>}{faqDrop1 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop1 && <div className="faq-a">You can always check with your insurance company to find out what they are and how much they cover. However, the Tend insurance team can check for you and give you an exact break down. All we need is your Carrier name and subscriber ID.</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop2} className="q-div">
                    <div className="faq-q">How can my exam be $0 if I am out-of-network?</div>
                    <div className="faq-arrow">{!faqDrop2 && <i class="bi bi-chevron-down"></i>}{faqDrop2 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop2 && <div className="faq-a">In many instances, out of network benefits cover preventative services at 100%. Your exams and cleanings are considered preventive by React and your insurance! Give your info and we’ll tell you exactly what is covered and how much you’ll owe.</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop3} className="q-div">
                    <div className="faq-q">What is the difference between being in-network vs. out-of-network?</div>
                    <div className="faq-arrow">{!faqDrop3 && <i class="bi bi-chevron-down"></i>}{faqDrop3 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop3 && <div className="faq-a">Being out of network simply means React does not have a direct contract with your insurance provider. It does not mean we don’t take your insurance. We take all insurances except DHMOs, Medicaid, Healthplex, and Emblem. For those carriers that we do have a direct contract with, they have negotiated prices. When out of network we use the base price for the service and apply the coverage percentages that correspond to your out-of-network benefits to calculate what you’ll owe.</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop4} className="q-div">
                    <div className="faq-q">Is dental insurance different from medical insurance?</div>
                    <div className="faq-arrow">{!faqDrop4 && <i class="bi bi-chevron-down"></i>}{faqDrop4 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop4 && <div className="faq-a">The basic premise of dental insurance is the same as other types of employer-provided insurances such as Medical and Vision. Most dental insurance is provided by your employer, has monthly premiums associated with that coverage, has guidelines on who you can see, and differences in benefits provided. The major difference with dental insurance is that the insurance provider has a yearly maximum they will reimburse, whereas a medical insurance provider covers reimbursement after the individual reaches their own out of pocket maximum.</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop5} className="q-div">
                    <div className="faq-q">How does dental insurance work?</div>
                    <div className="faq-arrow">{!faqDrop5 && <i class="bi bi-chevron-down"></i>}{faqDrop5 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop5 && <div className="faq-a">Dental insurance works similarly to your medical insurance, with the main difference that the Insurance provider is responsible for “First Money Out”, meaning they cover up to a “Maximum Allowable” amount in a given benefit period (usually a year) and the patient is responsible for any amount over that limit. The Maximum Allowable amount is unique to your insurance plan and is important to know what it is when seeking more expensive care. Further, as with Medical Co-Insurance, Dental PPO plans typically cover services based on ranges or categories: Preventive, Basic, and Major. As an example, most PPO coverages provide 100% coverage for Preventive services, 80% coverage on Basic, and 50% for Major. This breakout is plan-specific and you will need to consult your personal benefits to understand your coverage. What is not covered by your insurance is the patient’s responsibility.</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop6} className="q-div">
                    <div className="faq-q">What does my dental insurance cover?</div>
                    <div className="faq-arrow">{!faqDrop6 && <i class="bi bi-chevron-down"></i>}{faqDrop6 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop6 && <div className="faq-a">Typically, dental insurance covers all types of dental care ranging from exams and cleanings (typically 2x / year), basic dental care (fillings, crowns, etc.) to oral surgery and orthodontics. Insurances categorize each type of care into Preventive, Basic, and Major services and each is covered at a determined percentage, leaving the remainng balance to the patient (typical breakouts are 100% / 80% / 50% for the coverage percents). Orthodontics are unique and typically have rules around age, who on your plan is allowed to use, and how much is offered (i.e. there is a lifetime max versus and annual amount).</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop7} className="q-div">
                    <div className="faq-q">What is PPO dental insurance?</div>
                    <div className="faq-arrow">{!faqDrop7 && <i class="bi bi-chevron-down"></i>}{faqDrop7 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop7 && <div className="faq-a">A PPO is a “Preferred Provider Organization”. PPOs do not require you to choose a primary dentist, although one is recommended. You don’t need referrals to see specialist, either, but you will save money if you see on in your plan’s network. These differ from DHMO insurance plans that typically cover dental services at a low cost and minimal or no copayments with a pre-selected primary care dentist or a dentist facility with multiple dentists. You are required to select a Primary Dentist and are restricted to that Dentist unless otherwise referred to a specialist.</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop8} className="q-div">
                    <div className="faq-q">How many cleanings and exams does dental insurance cover per year?</div>
                    <div className="faq-arrow">{!faqDrop8 && <i class="bi bi-chevron-down"></i>}{faqDrop8 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop8 && <div className="faq-a">In most cases, two exams and cleanings in a calendar year.</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop9} className="q-div">
                    <div className="faq-q">How much is a dental cleaning and exam without insurance?</div>
                    <div className="faq-arrow">{!faqDrop9 && <i class="bi bi-chevron-down"></i>}{faqDrop9 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop9 && <div className="faq-a">$375</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop10} className="q-div">
                    <div className="faq-q">Are dental implants covered by insurance?</div>
                    <div className="faq-arrow">{!faqDrop10 && <i class="bi bi-chevron-down"></i>}{faqDrop10 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop10 && <div className="faq-a">
                    In most cases, yes. However, there are exceptions and rules that are important to know prior to your visit. For instance, an implant would not be covered if you were previously missing your tooth and your coverage includes a “Missing Tooth Clause”. At Tend, we can help you determine which rules are in place for your specific coverage.</div>}
                <SmallDivider />

                <div onClick={toggleFaqDrop11} className="q-div">
                    <div className="faq-q">Does dental insurance cover braces?</div>
                    <div className="faq-arrow">{!faqDrop11 && <i class="bi bi-chevron-down"></i>}{faqDrop11 && <i class="bi bi-chevron-up"></i>}</div>
                </div>
                {faqDrop11 && <div className="faq-a">In most cases, yes. Orthodontics are unique and typically have rules around age, who on your plan is allowed to use, and how much is offered (i.e. there is a lifetime max versus and annual amount). At Tend, we can tell you what rules are in place for you specific coverage.</div>}
                <SmallDivider />
            </div>
            <div className="daunting">Insurance can be daunting. We're here to help.</div>
            <div className="daunting-text">If you have any questions at all about your coverage, give us a call at <a href="tel:123-456-7890">(XXX)XXX-XXXX</a> and we'll talk through it.</div>
        </>
    )
}