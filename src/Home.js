import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import Img1 from './Images/Img1.jpg';
import Img2 from './Images/Img2.jpg';
import Img3 from './Images/Img3.jpg';
import Img4 from './Images/Img4.jpg';
import Img5 from './Images/Img5.jpg';
import Img6 from './Images/Img6.jpg';
import Img7 from './Images/Img7.jpg';
import Room1 from './Images/hotel_rooms_images/Room1.jpg'
import Table1 from './Images/hotel_rooms_images/Table1.jpg'
import Food1 from './Images/food_images/Food1.jpg'
import Event4 from './Images/hotel_rooms_images/Event4.jpg'
import Meeting1 from './Images/hotel_rooms_images/Meeting1.jpg'
import Wedding1 from './Images/hotel_rooms_images/Wedding1.jpg'

const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const speed = 200; // Adjust the speed of the counter

    useEffect(() => {
        const updateCount = () => {
            const increment = target / speed;

            if (count < target) {
                setCount(Math.ceil(count + increment));
            }
        };

        const timer = setTimeout(updateCount, 20); // Adjust the interval timing

        return () => clearTimeout(timer);
    }, [count, target]);

    return <h1 className="display-5 text-white mb-0">{count}</h1>;
};

const Home = () => {
    // Use refs to refer to the slide and the next/prev buttons
    const slideRef = useRef(null);
    const nextRef = useRef(null);
    const prevRef = useRef(null);

    // Function to handle "next" button click
    const handleNext = () => {
        const items = slideRef.current.querySelectorAll('.item');
        slideRef.current.appendChild(items[0]); // Move the first item to the end
    };

    // Function to handle "prev" button click
    const handlePrev = () => {
        const items = slideRef.current.querySelectorAll('.item');
        slideRef.current.prepend(items[items.length - 1]); // Move the last item to the start
    };

    useEffect(() => {
        // Add event listeners
        nextRef.current.addEventListener('click', handleNext);
        prevRef.current.addEventListener('click', handlePrev);

        // Cleanup event listeners on component unmount
        return () => {
            nextRef.current.removeEventListener('click', handleNext);
            prevRef.current.removeEventListener('click', handlePrev);
        };
    }, []);

    const handleRedirect = (url) => {
        setTimeout(() => {
            window.location.href = url; // Redirect to the specific page
        }, 200); // 200ms delay
    };

    return (
        <div>

            <div className='justify-content-center' style={{marginTop:"-100px", marginBottom:"50px"}}>
                <h1 style={{fontFamily: "Cinzel,Palatino Linotype,sans-serif"}}>Savor the Flavors: A Taste Experience Like No Other</h1>
            </div>

            <div className='data'>
                <div className="slide" ref={slideRef}>
                    <div className="item" style={{ backgroundImage: `url(${Img1})` }}>
                        <div className="content">
                            <div className="name">Culinary Excellence</div>
                            <div className="des">Crafted by master chefs with a passion for creating unforgettable dining experiences.</div>
                            <button className="see-more-btn">See More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${Img2})` }}>
                        <div className="content">
                            <div className="name">Sustainable Practices</div>
                            <div className="des">Our commitment to sustainability means you can enjoy guilt-free indulgence.</div>
                            <button className="see-more-btn">See More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${Img3})` }}>
                        <div className="content">
                            <div className="name">Decadent Delights</div>
                            <div className="des">Indulge in our rich, creamy desserts crafted to satisfy your sweetest cravings.</div>
                            <button className="see-more-btn">See More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${Img7})` }}>
                        <div className="content">
                            <div className="name">World-Class Flavors</div>
                            <div className="des">From spices of the East to the freshest seafood, savor global cuisines with every dish.</div>
                            <button className="see-more-btn">See More</button>
                        </div>
                    </div>
                    <div className="item" style={{ backgroundImage: `url(${Img5})` }}>
                        <div className="content">
                            <div className="name">Artisan Ice Cream</div>
                            <div className="des">Handcrafted with premium ingredients, our ice creams offer unique flavors and a velvety texture.</div>
                            <button className="see-more-btn">See More</button>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <button className="prev" ref={prevRef}><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="next" ref={nextRef}><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            <div style={{ height: "150px", width: "100%", textAlign: "center", marginTop: "50px", marginBottom:"-40px" }}>
                <h1 style={{textAlign: "center", fontFamily: "Cinzel,Palatino Linotype,sans-serif" }}>Luxurious Stays, Fine Dining, and Easy Food Orders</h1>
            </div>

            {/* Images */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded">
                                    <img className="img-fluid w-100" src={Room1} alt="" style={{ height: "400px", borderRadius: "5px" }} />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Book Rooms</h5>
                                <p className="card-text">
                                    Experience ultimate comfort and luxury in our well-appointed rooms, designed to make your stay memorable. Each room features modern amenities, including free Wi-Fi, air conditioning, and a spacious bed, ensuring relaxation after a long day of exploring the city or attending business meetings.
                                </p>
                                <button className="btn custom-btn" onClick={() => handleRedirect('/book-room')}>Explore Rooms</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded">
                                    <img className="img-fluid w-100" src={Table1} alt="" style={{ height: "400px", borderRadius: "5px" }} />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Book Table</h5>
                                <p className="card-text">
                                    Reserve a table at our elegant restaurant and indulge in a fine dining experience. Whether you're planning a romantic dinner, a family gathering, or a business lunch, our cozy ambiance and attentive service will make your meal unforgettable. Book your table today and enjoy a delightful dining experience.
                                </p>
                                <button className="btn custom-btn" onClick={() => handleRedirect('/book-table')}>Reserve a Table</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded">
                                    <img className="img-fluid w-100" src={Food1} alt="" style={{ height: "400px", borderRadius: "5px" }} />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Order Food</h5>
                                <p className="card-text">
                                    Satisfy your cravings by ordering from our delicious menu, featuring a wide variety of gourmet dishes crafted by our expert chefs. Whether you're in the mood for a quick snack or a full-course meal, we deliver fresh food right to your door. Place your order now and enjoy a taste of luxury in every bite.
                                </p>
                                <button className="btn custom-btn" onClick={() => handleRedirect('/order-food')}>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Events */}
            <div className="events-container">
                <h1 className="events-title">Events and Conferences</h1>
                
                <p className="events-description">
                    Food Mania elevates every occasion into an awe-inspiring, immersive experience to cherish forever.
                </p>

                <div className="events-grid row">
                    <div className="event-item col-lg-4">
                        <img src={Meeting1} alt="Meetings & Conferences" className="event-image"/>
                        <p className="event-label">MEETINGS & CONFERENCES</p>
                    </div>

                    <div className="event-item col-lg-4">
                        <img src={Event4} alt="Events" className="event-image"/>
                        <p className="event-label">EVENTS</p>
                    </div>

                    <div className="event-item col-lg-4">
                        <img src={Wedding1} alt="Timeless Weddings" className="event-image"/>
                        <p className="event-label">TIMELESS WEDDINGS</p>
                    </div>
                </div>
            </div>

            <div className='justify-content-center'>
                <h1 style={{fontFamily: "Cinzel, Palatino Linotype, sans-serif", position: "relative", paddingBottom: "20px",paddingTop: "20px"}} className="custom-title">Exceeding Expectations: Our Journey of Accomplishments</h1>
            </div>

            <div className="container-fluid facts p-5 my-5" style={{backgroundColor: "#113955"}}>
                <div className="row gx-5 gy-4 py-5">
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#ff5722' }}>
                                <i className="fa fa-star fs-4 text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-secondary text-uppercase">Google Review</h5>
                                <Counter target={5} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#ff5722' }}>
                                <i className="fa fa-check fs-4 text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-secondary text-uppercase">Our Experiance</h5>
                                <span className='counter-text'>
                                    <Counter target={10} /> <h1 style={{ color: "white", marginTop: "7px", marginLeft: "10px" }}>Years</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#ff5722' }}>
                                <i className="fa fa-mug-hot fs-4 text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-secondary text-uppercase">Food Items</h5>
                                <span className='counter-text'>
                                    <Counter target={50} /> <h1 style={{ color: "white", marginTop: "7px", marginLeft: "10px" }}>+</h1>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: '#ff5722' }}>
                                <i className="fa fa-users fs-4 text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="text-secondary text-uppercase">Happy Clients</h5>
                                <Counter target={5000} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;