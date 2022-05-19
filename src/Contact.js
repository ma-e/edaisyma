import React, { useState } from 'react';

function Contact() {
    const [disableForm, setDisableForm] = useState(false);
    return (
        <div id="contact" className="contact">
            <h1>Contact</h1>
            {!disableForm ? <form >
                <input className="textField" type="text" id="name" name="fname" placeholder="Name" /><br />
                <input className="textField" type="email" id="email" name="email" placeholder="Email" /><br />
                <textarea className="textField" type="message" id="message" name="message" placeholder="Message" minlength="20" /><br />
                <input className="btn" type="submit" value='Send &#x2192;' onClick={() => setDisableForm(true)}></input>
            </form> :
                <div >
                    <a className="btn" href="https://calendly.com/edaisyma/30min?month=2022-05"><p>Schedule Appointment</p></a>
                </div>}
        </div >
    );
}

export default Contact;