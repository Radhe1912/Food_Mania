import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const BookTable = () => {
    const [numTables, setNumTables] = useState(1);
    const [bookingTime, setBookingTime] = useState('');
    const [availableTables, setAvailableTables] = useState(0);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Fetch available tables from the backend
    useEffect(() => {
        const fetchAvailableTables = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/availableTables');
                setAvailableTables(response.data.totalTables - response.data.bookedTables);
            } catch (err) {
                console.error('Error fetching available tables:', err);
            }
        };
        fetchAvailableTables();
    }, []);

    const handleBookTable = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/bookTable', {
                numTables,
                bookingTime,
            });
            setSuccess(response.data);
            setError('');
        } catch (err) {
            setError(err.response ? err.response.data : 'Error booking table');
            setSuccess('');
        }
    };

    return (
        <div>
            <Header />
            <div style={{ height: '100px' }}></div>

            <h2>Book a Table</h2>
            <p>Available tables: {availableTables}</p>

            <label>
                Number of Tables:
                <input type="number" value={numTables} onChange={(e) => setNumTables(parseInt(e.target.value))} min="1" max={availableTables}/>
            </label>

            <label>
                Booking Time:
                <input type="datetime-local" value={bookingTime} onChange={(e) => setBookingTime(e.target.value)}/>
            </label>

            <button onClick={handleBookTable}>Book Table</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <Footer />
        </div>
    );
};

export default BookTable;