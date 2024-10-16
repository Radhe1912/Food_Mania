import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './OrderFood.css';
import './RegularRooms.css'
import StandardRoom2 from './Images/hotel_rooms_images/StandardRoom2.jpg';
import StandardRoom3 from './Images/hotel_rooms_images/StandardRoom3.jpg';
import StandardRoom4 from './Images/hotel_rooms_images/StandardRoom4.jpg';
import StandardRoom5 from './Images/hotel_rooms_images/StandardRoom5.jpg';
import StandardRoom6 from './Images/hotel_rooms_images/StandardRoom6.jpg';

const StandardRoom = () => {
    return (
        <div>
            <Header />
            <div className="room-container">
                {/* Room Title */}
                <h1 className="room-title">Standard Room</h1>

                {/* Image */}
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active visually-hidden" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" className='visually-hidden' data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner" style={{ maxWidth: '800px', margin: 'auto' }}>
                        <div className="carousel-item active">
                            <img src={StandardRoom2} className="d-block w-100" alt="Regular Room 1" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={StandardRoom3} className="d-block w-100" alt="Regular Room 2" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={StandardRoom4} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={StandardRoom5} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src={StandardRoom6} className="d-block w-100" alt="Regular Room 3" style={{ maxHeight: '450px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Highlights */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Room Highlights</h2>
                        <div className="underline"></div>
                    </div>
                    <ul className="highlight-list">
                        <li><span>&#10003;</span> Spacious room with city view</li>
                        <li><span>&#10003;</span> Luxurious bedding and pillows</li>
                        <li><span>&#10003;</span> Coffee machine with complimentary coffee</li>
                        <li><span>&#10003;</span> Smart TV with streaming services</li>
                        <li><span>&#10003;</span> Private balcony access</li>
                        <li><span>&#10003;</span> Welcome fruit basket upon arrival</li>
                    </ul>
                </div>

                {/* Location */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Location</h2>
                        <div className="underline"></div>
                    </div>
                    <p className="location-description">
                        Our hotel is centrally located, providing easy access to major attractions, cultural sites, and vibrant nightlife.
                    </p>
                    <p className="location-address">Address: 456 City Center, Downtown, ZIP 00000</p>
                </div>

                {/* Facilities */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Room Facilities</h2>
                        <div className="underline"></div>
                    </div>
                    <ul className="facilities-list">
                        <li><span>&#10003;</span> Air Conditioning</li>
                        <li><span>&#10003;</span> Mini Bar stocked with snacks</li>
                        <li><span>&#10003;</span> Tea/Coffee Maker with selection of teas</li>
                        <li><span>&#10003;</span> Wardrobe with hanging space</li>
                        <li><span>&#10003;</span> Work Desk with USB charging ports</li>
                        <li><span>&#10003;</span> Safe for valuables</li>
                        <li><span>&#10003;</span> Bathrobe and slippers</li>
                        <li><span>&#10003;</span> 24/7 Housekeeping</li>
                    </ul>
                </div>

                {/* Reviews */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Guest Reviews</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="reviews">
                        <p className="review">4.7/5</p>
                        <div className="stars" style={{ marginTop: "-20px" }}>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                        </div>
                        <p className="review">(102)</p>
                    </div>
                </div>

                {/* Booking Information */}
                <div className="room-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Booking Information</h2>
                        <div className="underline"></div>
                    </div>
                    <p className="booking-info">Check-in Time: <strong>11:00 AM</strong></p>
                    <p className="booking-info">Check-out Time: <strong>10:00 AM</strong></p>
                    <p className="booking-info">Price per night: <strong>$120</strong></p>
                </div>

                {/* Contact Information */}
                <div className="room-section contact-section">
                    <div className="section-header">
                        <span className="icon">&#9733;</span>
                        <h2 className="section-title">Contact for Booking</h2>
                        <div className="underline"></div>
                    </div>
                    <p>To book this room, please contact our reservations team at:</p>
                    <p>Email: <a href="mailto:reservations@foodmania.com" className="contact-link">reservations@foodmania.com</a></p>
                    <p>Phone: <a href="tel:+11234567890" className="contact-link">+1 (123) 456-7890</a></p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StandardRoom;