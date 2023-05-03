import React from 'react'
import { useOutletContext } from 'react-router-dom'
import './TentInfo.css'

export default function TentInfo(){
    const { tent } = useOutletContext()
    return(
        <section className="--tentInfo-page-container">
            <h4 className='XIVpt black'><span className='bold'>Name:</span> {tent.name}</h4>
            <h4 className='XIVpt black'><span className='bold'>Category:</span> {tent.type}</h4>
            <h4 className='XIVpt black'><span className='bold'>Description:</span> {tent.description}</h4>
            <h4 className='XIVpt black'><span className='bold'>Visibility:</span> Public</h4>
        </section>

    )
}