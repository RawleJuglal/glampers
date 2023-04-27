import React from 'react'
import { BsCCircle } from 'react-icons/bs'
import './Footer.css'

export default function Footer(){
    return(
        <div className='--footer-page-container flex flex-center flex-align-center'>
            <p className='--footer-text'><BsCCircle/> 2023 Happy Glampers, INC</p>
        </div>
    )
}