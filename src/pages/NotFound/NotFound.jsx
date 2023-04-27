import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound(){
    return(
        <div className='--notfound-page-container page-container flex flex-center flex-align-center flex-column'>
            <div className='--notfound-limit-width limit-width'>
                <h1 className='XXXIIpt bold center'>Sorry, the page you were looking for was not found.</h1>
                <Link className='--notfound-btn btn center' to='.'>Return to Home</Link>
            </div>
            
        </div>
    )
}