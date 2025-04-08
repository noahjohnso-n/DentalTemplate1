import LandingGrid from "./LandingGrid.js";
import ServiceGrid from "./ServiceGrid.js";
import GreetingSplit from "./GreetingSplit.js";
import ReviewSplit from "./ReviewSplit.js";
import Footer from "../Footer.js";

export default function MainLandingSplit(){
  
  const services = [
    { id: 1, title1: "Dental Exams", desc1: "Cleaning, x-rays, & oral exam.", img1: "/dental-exams.jpg",
      title2: "Orthodontics", desc2: "Breezy Braces® & Invisalign.", img2: "/ortho.jpg"},
    { id: 2, title1: "Procedures", desc1: "Fillings, implants, crowns, & more.", img1: "/procedures.jpg",
      title2: "Emergency", desc2: "Urgent appointments for pain, cracked teeth & more.", img2: "/ache.jpg"},
  ]

  const serviceGridElements = services.map((service) => {
    return ( <ServiceGrid id = {service.id} services = {service} /> )})

  const reviews = [
    { name1: "Noah J.", stars1: 5, review1: "For the entire team (front desk, hygienist, doctor) to take the time to explain every little bit and confirm with me at every sign post if I had any questions went a long way. I appreciate their humility with which they approached their profession that enabled me to understand my health more.",
      name2: "Mya M.", stars2: 5, review2: "For the entire team (front desk, hygienist, doctor) to take the time to explain every little bit and confirm with me at every sign post if I had any questions went a long way. I appreciate their humility with which they approached their profession that enabled me to understand my health more."
    },
    { name1: "Ryan M.", stars1: 3, review1: "For the entire team (front desk, hygienist, doctor) to take the time to explain every little bit and confirm with me at every sign post if I had any questions went a long way. I appreciate their humility with which they approached their profession that enabled me to understand my health more.",
      name2: "Hunter C.", stars2: 4, review2: "For the entire team (front desk, hygienist, doctor) to take the time to explain every little bit and confirm with me at every sign post if I had any questions went a long way. I appreciate their humility with which they approached their profession that enabled me to understand my health more."
    }
  ]

  const reviewGridElements = reviews.map((review) => {
    return ( <ReviewSplit reviews = {review} /> )
  })

  return (
    <>
      <LandingGrid />
      <GreetingSplit />
      <div className="section-head">
        <p id = "offer-grid" className = "section-desc">Services we offer</p>
      </div>
      {serviceGridElements}
      <div className="section-head">
        <p id = "review-grid" className = "section-desc">Why people love React...</p>
      </div>
      {reviewGridElements}
      <Footer />
    </>
  )
}