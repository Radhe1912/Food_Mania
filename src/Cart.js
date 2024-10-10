import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PDFDocument, rgb } from 'pdf-lib';
import html2canvas from 'html2canvas';
import Header from './Header';
import Footer from './Footer';
import './Cart.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/cart')
            .then((response) => {
                setCartItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cart items:', error);
            });
    }, []);

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const generatePDF = async () => {
        const hotelName = "Food Mania";  // Set your hotel name here
        const message = "Thank you for choosing Food Mania. We hope you enjoyed your order experience!";
        
        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([595, 842]); // A4 size page
        const fontSize = 20;
        const messageFontSize = 14;
        const tableFontSize = 12;
        const totalFontSize = 16;
        const lineHeight = 20;
    
        let currentY = page.getHeight() - 50;  // Start near the top of the page
    
        // Draw the hotel name
        page.drawText(hotelName, {
            x: 50,
            y: currentY,
            size: fontSize,
            color: rgb(0, 0.53, 0.71), // Customize the color if needed
        });
    
        // Draw the custom message
        currentY -= 30;
        page.drawText(message, {
            x: 50,
            y: currentY,
            size: messageFontSize,
            color: rgb(0, 0, 0),
        });
    
        // Move position below the message
        currentY -= 40;
    
        // Draw the table header
        page.drawText("Item", { x: 50, y: currentY, size: tableFontSize });
        page.drawText("Price", { x: 250, y: currentY, size: tableFontSize });
        page.drawText("Quantity", { x: 350, y: currentY, size: tableFontSize });
        page.drawText("Total", { x: 450, y: currentY, size: tableFontSize });
    
        currentY -= lineHeight;  // Move down for the table rows
    
        // Iterate over cart items and draw them in the table
        cartItems.forEach(item => {
            if (currentY < 100) { // If there's not enough space, create a new page
                currentY = page.getHeight() - 50;  // Reset Y coordinate for the new page
                const newPage = pdfDoc.addPage([595, 842]);
                page.drawText("Item", { x: 50, y: currentY, size: tableFontSize });
                page.drawText("Price", { x: 250, y: currentY, size: tableFontSize });
                page.drawText("Quantity", { x: 350, y: currentY, size: tableFontSize });
                page.drawText("Total", { x: 450, y: currentY, size: tableFontSize });
                currentY -= lineHeight;  // Space for the rows
            }
    
            // Draw the item details
            page.drawText(item.name, { x: 50, y: currentY, size: tableFontSize });
            page.drawText(`$${item.price.toFixed(2)}`, { x: 250, y: currentY, size: tableFontSize });
            page.drawText(item.quantity.toString(), { x: 350, y: currentY, size: tableFontSize });
            page.drawText(`$${(item.price * item.quantity).toFixed(2)}`, { x: 450, y: currentY, size: tableFontSize });
            currentY -= lineHeight;  // Move down for the next row
        });
    
        // Calculate the total cost
        const totalCost = calculateTotalCost();
    
        // Draw the total cost after the table
        currentY -= 20;  // Add some space before the total
        page.drawText(`Total Cost: $${totalCost}`, {
            x: 50,
            y: currentY,
            size: totalFontSize,
            color: rgb(0, 0, 0),
        });
    
        const pdfBytes = await pdfDoc.save(); // Save the PDF document
        const blob = new Blob([pdfBytes], { type: 'application/pdf' }); // Create a blob from the PDF bytes
        const url = URL.createObjectURL(blob); // Create a URL for the blob
    
        // Create a link element to download the PDF
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cart-invoice.pdf');
        document.body.appendChild(link);
        link.click(); // Trigger the download
        document.body.removeChild(link); // Remove the link
    };    

    return (
        <div>
            <Header/>
            <h1 style={{ marginTop: "100px" }}>Your Cart</h1>
            <div className="cart-container">
                {cartItems.length === 0 ? (
                    <p className="empty-cart">Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="cart-items">
                            {cartItems.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <p className="cart-item-name">{item.name}</p>
                                        <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
                                        <p className="cart-item-price">Quantity: {item.quantity}</p>
                                        <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="cart-summary">
                            <h3>Total Cost: ${calculateTotalCost()}</h3>
                            <button className="btn custom-btn" onClick={generatePDF}>
                                Generate Invoice (PDF)
                            </button>
                        </div>
                    </>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Cart;