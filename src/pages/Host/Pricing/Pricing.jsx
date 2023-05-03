import React from 'react'
import { useOutletContext } from 'react-router-dom'
import './Pricing.css'

export default function Pricing(){
    const { tent } = useOutletContext()
    return(
        <section className='pricing-page-container'>
            <h4 className='grey medium'><span className='XXIVpt medium black'>${tent.price}.00</span>/day</h4>
        </section>
    )
}