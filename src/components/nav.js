import React, { useState } from "react";
import './nav.css';
import { CiSearch, CiUser } from "react-icons/ci";
import { MdLogin, MdLogout, MdMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch, searchProduct }) => {
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginClick = () => setShowLoginForm(true);
  const handleLogoutClick = () => {
    setUser(null);
    setShowLoginForm(false);
    setFormData({ username: '', password: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <header className="header">
      <div className="top_row">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4IXywVr3Lw8VlrpOtZvLwuhrjAx3ouF5pOV22puWUyljkeyzvxA36Qr1YxMI1_fZkNo&usqp=CAU" alt="logo" />
        </div>
        <div className="auth-section">
          {!user && !showLoginForm && (
            <button className="login-button" onClick={handleLoginClick}>
              <MdLogin className="lgn-btn" /> Login
            </button>
          )}
          {showLoginForm && (
            <form className="login-form" onSubmit={handleSubmit}>
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} className="form-input" />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} className="form-input" />
              <button type="submit" className="submit-button">Login</button>
            </form>
          )}
          {user && (
            <>
              <p className="desc-text">Welcome, {user.username}!</p>
              <button className="login-button" onClick={handleLogoutClick}>
                <MdLogout className="lgn-btn" /> Logout
              </button>
            </>
          )}
        </div>
      </div>

      <div className="second_row">
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <MdMenu />
        </button>

        <div className="search_box">
          <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={e => setSearch(e.target.value)}
          />
          <button onClick={searchProduct}><CiSearch /></button>
        </div>

        <div className="profile-section">
          {user ? (
            <div className="profile">
              <CiUser className="profile-icon" />
              <div>
                <h2>{user.username}</h2>
                <p>{`${user.username}@gmail.com`}</p>
              </div>
            </div>
          ) : (
            <p className="login-desc">Please log in to view your profile.</p>
          )}
        </div>

        <div className="offer">
          <p>Flat 10% over all iphone</p>
        </div>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to='/' className="link">Home</Link></li>
          <li><Link to='/shop' className="link">Shop</Link></li>
          <li><Link to='/cart' className="link">Cart</Link></li>
          <li><Link to='/about' className="link">About</Link></li>
          <li><Link to='/contact' className="link">Contact</Link></li>
        </ul>
      </nav>

    </header>
  );
};

export default Nav;
