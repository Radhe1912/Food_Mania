import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import OrderFood from './OrderFood';
import Lunch from './Lunch';
import FastFood from './FastFood';
import IceCreamDrinks from './IceCreamDrinks';
import Cart from './Cart';
import BookRoom from './BookRoom';
import BookTable from './BookTable';
import RegularRoom from './RegularRooms';
import StandardRoom from './StandardRooms';
import LuxuriousRoom from './LuxuriousRooms';
import BookingDetails from './BookingDetails';

const RoutesLink = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orderFood" element={<OrderFood />} />
                    <Route path="/Lunch" element={<Lunch />} />
                    <Route path="/FastFood" element={<FastFood />} />
                    <Route path="/IceCreamDrinks" element={<IceCreamDrinks />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/BookRoom" element={<BookRoom />} />
                    <Route path="/RegularRoom" element={<RegularRoom />} />
                    <Route path="/StandardRoom" element={<StandardRoom />} />
                    <Route path="/LuxuriousRoom" element={<LuxuriousRoom />} />
                    <Route path="/BookingDetails" element={<BookingDetails />} />
                    <Route path="/BookTable" element={<BookTable />} />
                </Routes>
            </Router>
        </div>
    );
}

export default RoutesLink;