import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import HomePage from "./HomePage";
import ContactUs from "./ContactUs";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src="/img/HomePageHeader-removebg-preview.png" className="LogoNavbar" alt="Logo" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-auto" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar;
