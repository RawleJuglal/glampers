import React from 'react'
import { useLoaderData, Link, useSearchParams, defer, Await } from 'react-router-dom'
import { getTents } from '../../hooks/api'
import './Tents.css'

export function loader({request}){
    return defer({tents: getTents()})
}

export function Tents(){
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')
    const dataPromise = useLoaderData()
    
    return(
        <div className='--tents-page-container page-container flex flex-align-center flex-column'>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.tents}>
                    { tents => {
                        const displayedTents = typeFilter
                            ? tents.filter( tent => tent.type === typeFilter)
                            : tents

                        const tentElements = displayedTents.map( tent => (
                            <div key={tent.id} className="--tents-tile flex flex-wrap flex-center">
                                <Link to={tent.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
                                    <img className='--tents-img' src={tent.imageUrl} />
                                    <div className="--tents-info">
                                        <h3>{tent.name}</h3>
                                        <p>${tent.price}<span>/day</span></p>
                                    </div>
                                    <i className={`tent-type ${tent.type} selected`}>{tent.type}</i>
                                </Link>
                            </div>
                        ))
                        return(
                            <>
                            <div className='--tents-filters-container'>
                                <h1 className='XXXIIpt bold'>Explore our tent options</h1>
                                <button>Safari</button>
                                <button>Yurt</button>
                                <button>Dome</button>
                                <a className='link underline' href="">Clear filters</a>
                            </div>
                            <div className='--tents-products-container'>
                                {tentElements}
                            </div>
                            </>
                        )
                    }}
                
                </Await>
            </React.Suspense>
            
        </div>
    )
}