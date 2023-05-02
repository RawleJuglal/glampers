import React from 'react'
import { getTents } from '../../../hooks/api'
import { useLoaderData, defer, Await, Link } from 'react-router-dom'
import './HostTents.css'

export function loader({request}){
    return defer({tents: getTents()})
}

export function HostTents(){
    const dataPromise = useLoaderData()
    return(
        <div className='--hostTents-page-container limit-width'>
            <h1 className='--hostTents-title XXXIIpt bold'>Your listed vans</h1>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.tents}>
                    { tents => {
                        const hostIdTents = tents.filter(tent => tent.hostId === '123')
                        const hostTentEl = hostIdTents.map(tent => (
                            <Link
                                key={tent.id}
                                className='link'
                                to={tent.id}
                            >
                                <div key={tent.id} className='--hostTents-tent-container flex flex-align-center'>
                                    <img className='--hostTents-img' src={tent.imageUrl} alt={`image of ${tent.type} tent`} />
                                    <div className='--hostTents-text-container'>
                                        <h2 className='--hostTents-name XXpt semi-bold black'>{tent.name}</h2>
                                        <p className='--hostTents-price grey medium'>${tent.price}<span>/day</span></p>
                                    </div>
                                </div>
                            </Link>
                            
                        ))
                        return(
                            <>
                                {hostTentEl}
                            </>
                        )
                    }}
                </Await>
            </React.Suspense>
        </div>
    )
}