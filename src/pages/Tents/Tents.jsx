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

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    
    return(
        <div className='--tents-page-container page-container flex flex-align-center flex-column'>
            <div className='--tents-limit-width-container limit-width'>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.tents}>
                    { tents => {
                        const displayedTents = typeFilter
                            ? tents.filter( tent => tent.type === typeFilter)
                            : tents

                        const tentElements = displayedTents.map( tent => (
                            <div key={tent.id} className="--tents-tile">
                                <Link  className='no-underline' to={tent.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
                                    <img className='--tents-img' src={tent.imageUrl} />
                                    <div className="--tents-info XXpt flex">
                                        <h3 className='bold'>{tent.name}</h3>
                                        <p className='--tents-price'>${tent.price}<span className='XIVpt block'>/day</span></p>
                                    </div>
                                    <i className={`--tents-type --tents-${tent.type} ${tent.type} selected`}>{tent.type}</i>
                                </Link>
                            </div>
                        ))
                        return(
                            <>
                            <div className='--tents-filters-container'>
                                <h1 className='--tents-filters-title XXXIIpt bold'>Explore our tent options</h1>
                                <button
                                onClick={() => handleFilterChange("type", "safari")}
                                className={
                                    `--tents-type --tents-safari ${typeFilter === "safari" ? "selected" : ""}`
                                }
                            >Safari</button>
                            <button
                                onClick={() => handleFilterChange("type", "yurt")}
                                className={
                                    `--tents-type --tents-yurt ${typeFilter === "yurt" ? "selected" : ""}`
                                }
                            >Yurt</button>
                            <button
                                onClick={() => handleFilterChange("type", "dome")}
                                className={
                                    `--tents-type --tents-dome ${typeFilter === "dome" ? "selected" : ""}`
                                }
                            >Rugged</button>
                            {typeFilter ? (
                                <button
                                    onClick={() => handleFilterChange("type", null)}
                                    className="--tents-type clear-filters"
                                >Clear filter</button>
                            ) : null}
                            </div>
                            <div className='--tents-products-container flex flex-wrap flex-center'>
                                {tentElements}
                            </div>
                            </>
                        )
                    }}
                
                </Await>
            </React.Suspense>
            </div>
        </div>
    )
}