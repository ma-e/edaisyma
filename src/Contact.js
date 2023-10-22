import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Contact() {
    const [disableForm, setDisableForm] = useState(false);
    return (
        <Link to="/">
            <div id="contact" className="contact">
                <h1>Contact</h1>
                {!disableForm ? <form >
                    <input className="textField" type="text" id="name" name="fname" placeholder="Name" /><br />
                    <input className="textField" type="email" id="email" name="email" placeholder="Email" pattern=".+@globex\.com" /><br />
                    <textarea className="textField" type="message" id="message" name="message" placeholder="Message" minLength="20" /><br />
                    <input className="btn" type="submit" value='Send &#x2192;' onClick={() => setDisableForm(true)}></input>
                </form> :
                    <div><br /><br /><br />
                        <a className="btn" href="https://calendly.com/edaisyma/30min?month=2022-05"><p>Click to schedule an appointment.</p></a>
                    </div>}
            </div >
        </Link>
    );
}

export default Contact;