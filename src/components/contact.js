import React from "react";
import './contact.css';
<<<<<<< HEAD
 
=======

>>>>>>> origin/main
const Contact = () => {
    
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="form">
                        <h2># Contact Us</h2>
                        <form method="POST">
                            <div className="box">
                                <div className="label">
                                    <h4>Name</h4>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder="Name" value='' name='Name' onChange='' />
                                </div>
                            </div>
                            <div className="box">
                                <div className="label">
                                    <h4>E-mail</h4>
                                </div>
                                <div className="input">
                                    <input type="email" placeholder="E-mail" value='' name='email' onChange='' />
                                </div>
                            </div>
                            <div className="box">
                                <div className="label">
                                    <h4>Subject</h4>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder="Subject" value='' name='subject' onChange='' />
                                </div>
                            </div>
                            <div className="box">
                                <div className="label">
                                    <h4>Message</h4>
                                </div>
                                <div className="input">
                                    <textarea placeholder="Message !" value='' name='Message' onChange=''></textarea>
                                </div>
                            </div>
                            <button type="submit" >Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
<<<<<<< HEAD
export default Contact;
 
=======
export default Contact;
>>>>>>> origin/main
