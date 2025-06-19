import React, { useState } from "react";
import './nav.css';
import { CiSearch } from "react-icons/ci";
import { MdLogin } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
 
const Nav = ({ search, setSearch, searchProduct }) => {
    // const { loginWithRedirect } = useAuth0();
    // const { logout } = useAuth0();
    // const { user, isAuthenticated } = useAuth0();
    const [user, setUser] = useState(null);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
 
    const handleLoginClick = () => {
        setShowLoginForm(true);
    };
 
    const handleLogoutClick = () => {
        setUser(null);
        setShowLoginForm(false);
        setFormData({ username: '', password: '' });
    };
 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username && formData.password) {
            setUser({ username: formData.username });
            setShowLoginForm(false);
        } else {
            alert('Please enter both username and password');
        }
    };
    return (
        <>
            <div className="header">
                <div className="mid_header">
                    <div className="logo">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4IXywVr3Lw8VlrpOtZvLwuhrjAx3ouF5pOV22puWUyljkeyzvxA36Qr1YxMI1_fZkNo&usqp=CAU"
                            alt="logo"
                        />
                    </div>
                    <div className="search_box">
                        <input type="text" value={search} placeholder="search" onChange={(event) => setSearch(event.target.value)}></input>
                        <button onClick={searchProduct}><CiSearch /></button>
                    </div>
                    {!user ? (
                        <>
                            {!showLoginForm ? (
                                <button className="login-button" onClick={handleLoginClick}>
                                    <MdLogin className="lgn-btn" />Login
                                </button>
                            ) : (
                                <form className="login-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Username :</label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className="form-input"
                                        />
                                    </div>
                                    <button type="submit" className="submit-button">Login</button>
                                </form>
                            )}
                        </>
                    ) : (
                        <>
                            <p className="desc-text">Welcome, {user.username}!</p>
                            <button className="login-button" onClick={handleLogoutClick}>
                                <MdLogout className="lgn-btn" />Logout
                            </button>
                        </>
                    )}
                </div>
                <div className="last_header">
                    <div className="user_profile">
                        {user ? (
                            <>
                                <div className="icon">
                                    <CiUser />
                                </div>
                                <div className="info">
                                    <h2>{user.username}</h2>
                                    <p>{`${user.username}@gmail.com`}</p>
                                </div>
                            </>
                        ) : (
                            <p className="login-desc">Please log in to view your profile.!</p>
                        )}
                    </div>
                    <div className="nav">
                        <ul>
                            <li><Link to='/' className="link">Home</Link></li>
                            <li><Link to='/shop' className="link">Shop</Link></li>
                            <li><Link to='/cart' className="link">Cart</Link></li>
                            <li><Link to='/about' className="link">About</Link></li>
                            <li><Link to='/contact' className="link">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="offer">
                        <p>Flat 10% over all iphone</p>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Nav;