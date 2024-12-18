import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import Img6 from './Images/Img6.jpg';
import Logo1 from './Images/Logo1.png'
import Logo2 from './Images/Logo2.png'
import Logo3 from './Images/Logo3.png'
// import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

    // const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    const userEmail = localStorage.getItem('userEmail');

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogout = () => {
        // Clear any authentication state (for example, from local storage)
        localStorage.removeItem('isLoggedIn'); // If you're using local storage for user state
        localStorage.removeItem('isSignedIn');
        localStorage.removeItem('user'); // Optional: clear user details if stored in localStorage
        // Redirect to the login page
        navigate('/Login');
    };

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-scroll" style={{backgroundColor:"#111111"}}>
                    <div className="container-fluid">
                        <img src={Logo2} className="rounded-pill" style={{height: "60px", width: "60px"}}/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link to='/' className='nav-link'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    {/* If we will use anchor tag then it will take loading to render the page */}
                                    <Link to='/orderFood' className='nav-link'>Order Food</Link>
                                    {/* <a className="nav-link" href="/orderFood">Order Food</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link to='/BookTable' className='nav-link'>Book Table</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/BookRoom' className='nav-link'>Bookings</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/About' className='nav-link'>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Contact' className='nav-link'>Contact</Link>
                                </li>
                            </ul>
                            <button onClick={handleLogout} className='btn logout-btn'>Logout</button>
                            <ul className="navbar-nav d-flex flex-row">
                                <li className="nav-item me-3 me-lg-0 mt-2">
                                    <Link to={`/cart/${userEmail}`}>
                                        <i className="fas fa-shopping-cart text-white"></i>
                                    </Link>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="#!">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="#!">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;