import Greeting from "./Greeting.js";
import LandingCol from "./LandingCol.js";
import Review from "./Review.js";
import ServiceCol from "./ServiceCol.js";
import Footer from "../Footer.js";

export default function MainLanding(){

  const services = [
    { id: 1, title: "Dental Exams", desc: "Cleaning, x-rays, & oral exam.", img: "/dental-exams.jpg"}, 
    { id: 2, title: "Orthodontics", desc: "Breezy Braces® & Invisalign.", img: "/ortho.jpg"},
    { id: 3, title: "Procedures", desc: "Fillings, implants, crowns, & more.", img: "/procedures.jpg"}, 
    { id: 4, title: "Emergency", desc: "Urgent appointments for pain, cracked teeth & more.", img: "/ache.jpg"},
  ]

  const  serviceColElements = services.map((service) => {
    return ( <ServiceCol id = {service.id} services = {service} /> )})

  const reviews = [
    {name: "Noah J.", stars: 5, review: "For the entire team (front desk, hygienist, doctor) to take the time to explain every little bit and confirm with me at every sign post if I had any questions went a long way. I appreciate their humility with which they approached their profession that enabled me to understand my health more."},
    {name: "Mya M.", stars: 5, review: "For the entire team (front desk, hygienist, doctor) to take the time to explain every little bit and confirm with me at every sign post if I had any questions went a long way. I appreciate their humility with which they approached their profession that enabled me to understand my health more."},
    {name: "Hunter C.", stars: 4, review: "For the entire team (front desk, hygienist, doctor) to take the time to explain every little bit and confirm with me at every sign post if I had any questions went a long way. I appreciate their humility with which they approached their profession that enabled me to understand my health more."},
    {name: "Ryan M.", stars: 3, review: "For the entire team (front desk, hygienist, doctor) to take the time to explain every little bit and confirm with me at every sign post if I had any questions went a long way. I appreciate their humility with which they approached their profession that enabled me to understand my health more."}
  ]

  const reviewColElements = reviews.map((review) => {
    return ( <Review reviews = {review}/> )
  })

  return (
    <>
      <LandingCol />
      <Greeting />
      <div className="section-head">
        <p id ="offer-col" className="section-desc">Services we offer</p>
      </div>
      {serviceColElements}
      <div className="section-head">
        <p id = "review-col" className = "section-desc">Why people love React...</p>
      </div>
      {reviewColElements}
      <Footer />
    </>
  )
}