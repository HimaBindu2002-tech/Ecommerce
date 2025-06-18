import React from 'react';
import './footer.css';
import { FaPiggyBank } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHeadphones } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='box'>
                            <div className='icon_box'>
                                <FaPiggyBank />
                            </div>
                            <div className='detail'>
                                <h3>Great Saving</h3>
                                <p>Lets make this deal not go waste!! Hurry up..!</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <LiaShippingFastSolid />
                            </div>
                            <div className='detail'>
                                <h3>Free Delivery</h3>
                                <p>Lets make this deal not go waste!! Hurry up..!</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <FaHeadphones />
                            </div>
                            <div className='detail'>
                                <h3>24/7 support</h3>
                                <p>Lets make this deal not go waste!! Hurry up..!</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <IoWallet />
                            </div>
                            <div className='detail'>
                                <h3>Money back</h3>
                                <p>Lets make this deal not go waste!! Hurry up..!</p>
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='header'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4IXywVr3Lw8VlrpOtZvLwuhrjAx3ouF5pOV22puWUyljkeyzvxA36Qr1YxMI1_fZkNo&usqp=CAU' alt='logo' height="50px" width="100px"/>
                            <p>Discover quality, style, and unbeatable deals--all in one place. Shop the latest trends and essentials, delivered right to your door!</p>

                        </div>
                        <div className='bottom'>
                            <div className='box'>
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>sales</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track Order</li>
                                    <li>New Product</li>
                                    <li>old Product</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h3>Contacts</h3>
                                <ul>
                                    <li>4005, Silver Business PointIndia</li>
                                    <li>+(012)999999999</li>
                                    <li>info@gmail.com</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;