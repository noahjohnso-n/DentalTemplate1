import React from 'react';
// import CheckoutForm from './CheckoutForm';
// import StripeReact from './StripeReact.js';
import { useNavigate, useLocation } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const userDetails = {
      firstName: formData.get("fname"),
      lastName: formData.get("lname"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };
  
    // Navigate to /booked with user details
    navigate("/booked", { state: { userDetails } });
  }

  const location = useLocation();
  const s = location.state || {}; // Getting the 'type' from the state

  return (
    <div className='checkout-page'>
      <div className='check-left'>
        <div className='checkout-form'>
          <p className='checkout-t'>Enter your details</p>
        </div>
        <div className='visit-details'>
          <div className='visit-cal'>
            <p className='cal-month'>{s.details.month}</p>
            <p className='cal-day'>{s.details.day}</p>
            <p className='cal-time'>{s.details.time}</p>
          </div>
          <div className='visit-right'>
            <p className='visit-d'>Visit Details</p>
            <p className='visit-p'>{s.details.time}</p>
            <p className='visit-p'>{s.details.month} {s.details.day}</p>
            <p className='visit-p'>123 Columbus Rd. Columbus, OH</p>
          </div>
        </div>
        <form className='checkout-form2' onSubmit={submitForm}>
          <div className="form-in2">
              <input className="i-input2" placeholder="First Name" name = "fname" required autoComplete="off"></input>
              <div className="small-divider-div">
                  <div className="color-divider-green2"></div>
              </div>
          </div>
          <div className="form-in2">
              <input className="i-input2" placeholder="Last Name" name = "lname" required autoComplete="off"></input>
              <div className="small-divider-div">
                  <div className="color-divider-green2"></div>
              </div>
          </div>
          <div className="form-in2">
              <input className="i-input2" placeholder="Email" name = "email" required autoComplete="off"></input>
              <div className="small-divider-div">
                  <div className="color-divider-green2"></div>
              </div>
          </div>
          <div className="form-in2">
              <input className="i-input2" placeholder="Phone Numer" name = "phone" required autoComplete="off"></input>
              <div className="small-divider-div">
                  <div className="color-divider-green2"></div>
              </div>
          </div>
          <button type="submit" className='checkout-submit'>CONTINUE</button>
        </form>
      </div>
      <div className='check-right'>
        <img src = "/stock-green.webp"></img>
      </div>
    </div>
  );
};

export default Checkout;