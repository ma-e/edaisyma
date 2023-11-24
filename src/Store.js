import React from 'react'
import Footer from './Footer';
import { Product } from "./Product";
import { PRODUCTS } from "./config/products";
import profileImage from './config/works/pr6.jpg';
import p1 from './config/works/p1.jpg';
import p2 from './config/works/p2.jpg';
var images = [p1, p2, profileImage];

import "./Store.css";
import { Card, CardDeck } from 'react-bootstrap';
import TwoPicturesRow from './TwoPicturesRow'; // Path to the TwoPicturesRow component file

export default function Store() {
    return (
        <div className="container">
            <TwoPicturesRow imageSrcArray={images} />
        </div>

    )
}
