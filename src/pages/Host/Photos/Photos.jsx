import React from 'react'
import { useOutletContext } from 'react-router-dom'
import './Photos.css'

export default function Photos(){
    const { tent } = useOutletContext()
    return(
        <section className='--photos-page-container'>
            <img className='--photos-img' src={tent.imageUrl} alt={`image of ${tent.type} tent`} />
        </section>
    )
}