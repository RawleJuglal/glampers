import React from 'react'
import { useLoaderData, defer, Await } from 'react-router-dom'
import { getTents } from '../../../hooks/api'
import './Dashboard.css'

export function loader(){
    return defer({tents: getTents()})
}

export function Dashboard(){
    const dataPromise = useLoaderData()
    return(
        <div className='--dashboard-page-container limit-width'>
            <div className='--dashboard-welcome-container'>
                <h1 className='XXXVIpt bold black'>Welcome!</h1>
                <div className='--dashboard-income-text-container flex flex-align-center grey'>
                    <h2>Income</h2>
                    <p>last <span className='bold underline'>30 days</span></p>
                    <p className='push-right'>Details</p>
                </div>
                <p>$2,260</p>
            </div>
            <React.Suspense fallback={<h1>Loading ...</h1>}>
                <Await resolve={dataPromise.tents}>
                    {tents => {
                        const hostIdTents = tents.filter(tent => tent.hostId === '123')
                        const hostTentsEl = hostIdTents.map(tent => (
                            <div>
                                <h1>{tent.name}</h1>
                            </div>
                        ))

                        return(
                            <>
                                {hostTentsEl}
                            </>
                            
                        )
                    }}
                </Await>
            </React.Suspense>
        </div>
    )
}