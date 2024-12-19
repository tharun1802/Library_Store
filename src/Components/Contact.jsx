import React from 'react'
import '../assets/Style/contact.css';

const Contact = () => {
  return (
    <>
        <div className="contact-form">
            <h1>Contact Us</h1>
            <form action="">
                <input type="text" name="name" placeholder="Enter your name" />
                <input type="email" name="email" placeholder="Enter your email" />
                <input type="tel" name="phonenumber" placeholder="Enter your Contact Number" />
                <textarea name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                <input type="submit" value="Submit" id="submit-btn"/>
            </form>
        </div>
    </>
  )
}

export default Contact
