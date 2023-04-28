import React from 'react'
import { useLoaderData, Link,  defer, Await, useLocation } from 'react-router-dom'
import { getTent } from '../../hooks/api'

export function loader(params){
    return defer({tent: getTent(params.id)})
}

export function TentDetails(){
    const location = useLocation()
    const dataPromise = useLoaderData()

    const search = location.state?.search || '';
    const type = location.state?.type || 'all'

    return(
        <div className='--tentDetails-page-container page-container'>
            
            <React.Suspense fallback={<h1>Loading Tent...</h1>}>
                <Await resolve={dataPromise.tent}>
                    {tent => {
                        return(
                            <div className='--tentDetails-main-container limit-width'>
                            <Link to={`..${search}`} relative='path' className='back-button link'>&larr; <span>Back to {type} vans</span></Link>

                                <img className='--tentDetails-img' src={tent.imageUrl} alt={`image of ${tent.type} tent`} />
                                <i className={`--tentDetails-type --tents-${tent.type} ${tent.type} selected`}>{tent.type}</i>
                                <div className="--tentDetails-info XXpt">
                                    <h3 className='bold'>{tent.name}</h3>
                                    <p className='--tentDetails-price'>${tent.price}<span className='XIVpt'>/day</span></p>
                                </div>
                                <p className='--tentDetails-description '>{tent.description}</p>
                                <button className='--tentDetails-btn btn'>Rent this van</button>
                            </div>
                        )
                    }}
                </Await>
            </React.Suspense>
        </div> 
    )
}