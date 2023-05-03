import React from 'react'
import { useLoaderData, defer, Await, Link } from 'react-router-dom'
import { getTents } from '../../../hooks/api'
import { BsStarFill } from "react-icons/bs"
import './Dashboard.css'

export function loader({request}){
    return defer({tents: getTents()})
}

export function Dashboard(){
    const dataPromise = useLoaderData()
    return(
        <main className='--dashboard-page-container limit-width'>
            <section className='--dashboard-welcome-container'>
                <h1 className='XXXVIpt bold black'>Welcome!</h1>
                <div className='--dashboard-income-text-container flex flex-align-center grey'>
                    <h2>Income</h2>
                    <p className='--dashboard-welcome-last-p'>last <span className='bold underline'>30 days</span></p>
                    <Link to={`income`} className='push-right link grey'>Details</Link>
                </div>
                <p className='XLVIIIpt extra-bold black'>$2,260</p>
            </section>
            <section className='--dashboard-review-container flex flex-align-center'>
                <h1 className='XXIVpt bold black'>Review score</h1>
                <span className='--dashboard-review-text grey XXpt'><BsStarFill className="--dashboard-review-star"/><span className='bold black'>5.0</span>/5</span>
                <Link to={`reviews`} className='push-right grey link'>Details</Link>
            </section>
            <React.Suspense fallback={<h1>Loading ...</h1>}>
                <Await resolve={dataPromise.tents}>
                    {tents => {
                        const hostIdTents = tents.filter(tent => tent.hostId === '123')
                        const hostTentsEl = hostIdTents.map(tent => (
                            <Link
                                key={tent.id}
                                className='link'
                                to={tent.id}
                            >
                                <div key={tent.id} className='tent-container flex flex-align-center'>
                                    <img className='host-img' src={tent.imageUrl} alt={`image of ${tent.type} tent`} />
                                    <div className='--dashboard-text-container'>
                                        <h2 className='host-name XXpt semi-bold black'>{tent.name}</h2>
                                        <p className='--dashboard-price grey medium'>${tent.price}<span>/day</span></p>
                                    </div>
                                    <Link to={`tents/${tent.id}`} className='push-right link black'>Edit</Link>
                                </div>
                            </Link>
                        ))

                        return(
                            <section className='--dashboard-host-tents'>
                                {hostTentsEl}
                            </section>                            
                        )
                    }}
                </Await>
            </React.Suspense>
        </main>
    )
}