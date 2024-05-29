import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ContactUs() {
    return (
        <div className="contactus centre ">
            <form style={{ width: '26rem' }}>
                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example1">Name :</label>
                    <input type="text" id="form4Example1" className="form-control" />
                    
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example2">Email address :</label>

                    <input type="email" id="form4Example2" className="form-control" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example3">Message :</label>

                    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                    <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form4Example4"
                        defaultChecked
                    />
                    <label className="form-check-label" htmlFor="form4Example4">
                        Send me a copy of this message
                    </label>
                </div>

                <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;
