const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fastfood', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Schema for cart items
const cartSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: String,
});

const CartItem = mongoose.model('CartItem', cartSchema);

// Schema for booked rooms
const bookingSchema = new mongoose.Schema({
    roomType: String,
    numRooms: Number,
    numPersons: Number,
    startDate: Date,
    endDate: Date,
    createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model('Booking', bookingSchema);

// Add item to the cart (POST request)
app.post('/api/cart', async (req, res) => {
    const { name, price, quantity, image } = req.body;

    try {
        let cartItem = await CartItem.findOne({ name });

        if (cartItem) {
            cartItem.quantity += quantity;
            await cartItem.save();
        } else {
            cartItem = new CartItem({ name, price, quantity, image });
            await cartItem.save();
        }
        res.status(201).send(cartItem);
    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).send('Server error');
    }
});

// Get cart items (GET request)
app.get('/api/cart', async (req, res) => {
    try {
        const cartItems = await CartItem.find();
        res.status(200).send(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).send('Server error');
    }
});

// Book a room (POST request)
app.post('/api/bookRooms', async (req, res) => {
    const { roomType, numRooms, numPersons, startDate, endDate } = req.body;

    try {
        const today = new Date();
        const selectedStartDate = new Date(startDate);
        const selectedEndDate = new Date(endDate);

        // Validation checks
        const dateDiff = (selectedStartDate - today) / (1000 * 60 * 60 * 24);
        if (dateDiff < 5) {
            return res.status(400).send('Start date must be at least 5 days from today.');
        }
        
        if (selectedEndDate <= selectedStartDate) {
            return res.status(400).send('End date must be after start date.');
        }

        const booking = new Booking({
            roomType,
            numRooms,
            numPersons,
            startDate,
            endDate,
        });

        await booking.save();
        res.status(201).send(booking);
    } catch (error) {
        console.error('Error booking the room:', error);
        res.status(500).send('Server error');
    }
});

// Get booked rooms (GET request)
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).send(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).send('Server error');
    }
});

const tableBookingSchema = new mongoose.Schema({
    numTables: Number,  // Number of tables booked
    bookingTime: Date,  // Booking time selected by user
    createdAt: { type: Date, default: Date.now },
});

// Schema for available tables
const availableTableSchema = new mongoose.Schema({
    totalTables: { type: Number, default: 30 },  // Set default available tables as 30
    bookedTables: { type: Number, default: 0 },  // Track how many tables are booked
});

const TableBooking = mongoose.model('TableBooking', tableBookingSchema);
const AvailableTable = mongoose.model('AvailableTable', availableTableSchema);

// Initialize default available tables if not set
const initializeAvailableTables = async () => {
    try {
        let availableTables = await AvailableTable.findOne();
        if (!availableTables) {
            availableTables = new AvailableTable({ totalTables: 30 });
            await availableTables.save();
            console.log('Default available tables set to 30.');
        }
    } catch (error) {
        console.error('Error initializing available tables:', error);
    }
};

initializeAvailableTables();  // Ensure the available tables are set on server start

// Book a table (POST request)
app.post('/api/bookTable', async (req, res) => {
    const { numTables, bookingTime } = req.body;

    try {
        const now = new Date();
        const bookingDateTime = new Date(bookingTime);

        // Validate booking time (must be more than 2 hours ahead)
        const timeDiff = (bookingDateTime - now) / (1000 * 60 * 60);
        if (timeDiff <= 2) {
            return res.status(400).send('Booking must be made at least 2 hours before the selected time.');
        }

        // Get available tables
        let availableTables = await AvailableTable.findOne();
        if (!availableTables) {
            return res.status(400).send('No tables available for booking.');
        }

        const remainingTables = availableTables.totalTables - availableTables.bookedTables;
        
        // Validate if enough tables are available
        if (numTables > remainingTables) {
            return res.status(400).send('Not enough tables available for booking.');
        }

        // Save the booking and update available tables
        const tableBooking = new TableBooking({ numTables, bookingTime });
        await tableBooking.save();

        // Update the booked tables count
        availableTables.bookedTables += numTables;
        await availableTables.save();

        res.status(201).send('Table booked successfully!');
    } catch (error) {
        console.error('Error booking the table:', error);
        res.status(500).send('Server error');
    }
});

// Get available tables (GET request)
app.get('/api/availableTables', async (req, res) => {
    try {
        const availableTables = await AvailableTable.findOne();
        res.status(200).send(availableTables);
    } catch (error) {
        console.error('Error fetching available tables:', error);
        res.status(500).send('Server error');
    }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});