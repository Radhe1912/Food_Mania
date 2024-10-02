import React from 'react';
import './Header.css';
import Img6 from './Images/Img6.jpg';
import Logo1 from './Images/Logo1.png'
import Logo2 from './Images/Logo2.png'
import Logo3 from './Images/Logo3.png'

const Header = () => {
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
                                    <a className="nav-link" href="#!">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Attractions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Opinions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Contact</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav d-flex flex-row">
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="#!">
                                        <i className="fas fa-shopping-cart"></i>
                                    </a>
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

            <div id="intro" className="bg-image" style={{ backgroundImage: `url(${Img6})`, height: "100vh"}}>
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <h1 className="mb-0 text-white display-1" style={{fontFamily: "Cinzel, Palatino Linotype,sans-serif"}}>Food Mania</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div className="container my-5 py-5"></div>
            </main>
        </div>
    );
};

export default Header;