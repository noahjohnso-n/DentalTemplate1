import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import About from './components/About/About.js';
import Services from './components/Serve/Services.js';
import Insurance from './components/Insurance/Insurance.js';
import Book from "./components/Book/Book.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Email from './components/Email/Email.js';
import Booking from './components/Email/Booking.js';
import Procedures from './components/Email/Procedures.js';
import Braces from './components/Email/Braces.js';
import Invisalign from './components/Email/Invisalign.js';
import Emergency from './components/Email/Emergency.js';
import Checkout from './Checkout.js';
import Booked from './Booked.js';
import ScrollToTop from './ScrollToTop.js';
// import { Router, Routes, Route } from "react-router-dom";


// import reportWebVitals from './tools/reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <ScrollToTop />
        <Routes>
            <Route path = "/" element = {<App />} ></Route>
            <Route path = "/about" element = {<About />}></Route>
            <Route path = "/services" element = {<Services />}></Route>
            <Route path = "/insurance" element = {<Insurance />}></Route>
            <Route path = "/book" element = {<Book />}></Route>
            <Route path = "/email" element = {<Email />}></Route>
            <Route path = "/booking-exams" element = {<Booking />}></Route>
            <Route path = "/booking-procedures" element = {<Procedures />}></Route>
            <Route path = "/booking-braces" element = {<Braces />}></Route>
            <Route path = "/booking-invisalign" element = {<Invisalign />}></Route>
            <Route path = "/booking-emergency" element = {<Emergency />}></Route>
            <Route path = "/checkout" element = {<Checkout />}></Route>
            <Route path = "/booked" element = {<Booked />}></Route>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
