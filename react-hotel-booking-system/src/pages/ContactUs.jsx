import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ContactUs extends Component {
  render() {
    return (
        <div>
            <div className="htlfndr-contact_map"> <iframe style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=120%2015th%20Ave%20%23214%2C%20San%20Francisco%2C%20CA%2094118%2C%20USA&key=AIzaSyC0gPeDdmd9kdGbAIFn1UZZmY9Qs1kQHBk"
                allowfullscreen></iframe>
            </div>
        <div className="container">
            <main id="htlfndr-contact-us" className="htlfndr-main-content" role="main">
                <div className="row htlfndr-contact-page">
                    <h1 className="text-center">Contact Us</h1>
                    <div className="htlfndr-section-under-title-line"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <form action="#" id="htlfndr-contact-form" method="post"> <label htmlFor="contact-name"
                                    className="htlfndr-required htlfndr-top-label">Name</label> <input id="contact-name"
                                    className="htlfndr-review-form-input" type="text" name="contact-name" required /> <label
                                    htmlFor="contact-email" className="htlfndr-required htlfndr-top-label">E-mail</label> <input
                                    id="contact-email" className="htlfndr-review-form-input" type="email" name="contact-email"
                                    required /> <label htmlFor="contact-phone" className="htlfndr-required htlfndr-top-label">Phone
                                    number</label> <input id="contact-phone" className="htlfndr-review-form-input" type="tel"
                                    pattern="[0-9]{10}" name="contact-phone" required /> <label htmlFor="contact-subject"
                                    className="htlfndr-required htlfndr-top-label">Subject</label> <input id="contact-subject"
                                    className="htlfndr-review-form-input" type="text" name="contact-subject" required /> <label
                                    htmlFor="contact-message" className="htlfndr-required htlfndr-top-label">Message</label>
                                <textarea id="contact-message" className="htlfndr-review-form-input"
                                    name="contact-message"></textarea> <input type="submit" value="Send your message"
                                    className="btn-primary" /> </form>
                        </div>
                        <div className="col-md-6">
                            <h3 className="htlfndr-font-24">Nice to hear You!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum sollicitudin
                                pellentesque. Duis id congue dolor. Sed at tortor sed magna gravida scelerisque ut
                                maximus leo.</p>
                            <h3 className="htlfndr-font-24">Contact Information</h3>
                            <div className="contact-title">Business Hours</div>
                            <p>Our support service works for you from Monday to Friday from 8 am to 18 pm<br /> Wait for
                                our reply within 24 hours<br /> Saturday and Sunday: closed</p>
                            <div className="contact-title">Address</div>
                            <p>Hotel Finder<br /> 120 CA 15th Avenue-Suite 214, USA </p>
                            <div className="contact-title">Phone number</div>
                            <p>1-555-555-555</p>
                            <div className="contact-title">Email</div>
                            <p><Link to="/cdn-cgi/l/email-protection" className="__cf_email__"
                                    data-cfemail="02717772726d70764260677176756760716d64762c78676c666771692c616d6f2c616d6f">[email&#160;protected]</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
      </div>
    )
  }
}

export default ContactUs