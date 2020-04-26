import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <>
            <Link to="/">Home</Link> | <Link to="/liquid-converter">Liquid Converter</Link> | 
            <Link to="/score">Score Counter</Link> |  <Link to="/temp-converter">Temperature Converter</Link> | 
            <Link to="/contact">Contact Form</Link> | <Link to="/contact-ajax">Contact Form with Ajax</Link> | 
            <Link to="/list">Simple Listing</Link> | <Link to="/profile-list">Profile Listing</Link>
             | <Link to="/tic-tac">TicTac</Link>
        </>
    )
}