import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className='--home-page-container flex flex-align-center'>
      <div className='--home-content-container'>
        <h2 className='--home-title XXXVIpt bold white center'>Nature meets luxury in our premium tents.</h2>
        <p className='--home-text white center'>Add adventure to your life by joining the #glamping movement. Rent the perfect tent to make your perfect night under the stars.</p>
        <Link to="tents" className='btn --home-btn center'>Find your tent</Link>
      </div>  
    </div>
  )
}