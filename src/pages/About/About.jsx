import React from 'react'
import { Link } from 'react-router-dom'
import Jumbo from '../../assets/images/glamp-champ 1.png'
import './About.css'

export default function About(){
    return(
        <div className='--about-page-container page-container'>
            <div className='--about-jumbotron-container'>
                <img src={Jumbo} alt="women under glamp tent watching tv" />
            </div>
            <div className='--about-content-container'>
                <h2 className='--about-content-h2 XXXIIpt bold'>Glamp like a champ in our premium tents.</h2>
                <p className='--about-content-p'>Our mission is to provide a unique and liberating outdoor experience through our glamping tent rentals. We believe that everyone should have the opportunity to enjoy nature while feeling comfortable and confident in their own skin. </p>
                <p className='--about-content-p'>Our goal is to create a welcoming and inclusive atmosphere for our guests by offering private and secluded tent sites.  With our glamping tents, we hope to inspire a greater appreciation and connection to nature.</p>
                <div className='--about-cta-container'>
                    <h3 className='XIVpt bold'>Your destination is waiting.</h3>
                    <h3 className='XIVpt bold'>Your tent is ready.</h3>
                    <Link className='btn --about-btn center' to='tents'>Explore our tents</Link>
                </div>
            </div>
        </div>
    )
}