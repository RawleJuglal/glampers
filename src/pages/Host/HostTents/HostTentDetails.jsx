import React from 'react'
import { Outlet, defer, Await, useLoaderData, useLocation, Link, NavLink } from 'react-router-dom'
import { getTent } from '../../../hooks/api'
import './HostTentDetail.css'

export function loader({params, request}){
    return defer({tent: getTent(params.id)})
}

export function HostTentDetails(){
    const location = useLocation()
    const dataPromise = useLoaderData()

    const activeStyles = {
        textDecoration:'underline',
        color:'#161616'
    }

    const search = location.state?.search || '';
    const type = location.state?.type || 'all'

    return(
        <main className='hostTentDetails-page-container limit-width'>
            <Link to={`..${search}`} relative='path' className='back-button link'>&larr; <span>Back to {type} tents</span></Link>
            <React.Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.tent}>
                    {tent => {
                        return(
                            <>
                                <section className='--hostTentDetails-info-container flex'>
                                    <img className='--hostTentDetails-img' src={tent.imageUrl} alt={`image of ${tent.type} tent`} />
                                    <div>
                                        <i className={`--hostTentDetails-type type-of-tent --tents-${tent.type} ${tent.type} selected`}>{tent.type}</i>
                                        <h3 className='--hostTentDetails-name XXVIpt bold'>{tent.name}</h3>
                                        <p className='XIVpt grey'><span className='XVIIIpt bold black'>${tent.price}</span>/day</p>
                                    </div>
                                </section>
                                <nav className='--hostTentDetails-nav'>
                                    <NavLink className='link grey' style={({isActive}) => isActive ? activeStyles : null} end to=".">Details</NavLink>
                                    <NavLink className='link grey' style={({isActive}) => isActive ? activeStyles : null} to="pricing">Pricing</NavLink>
                                    <NavLink className='link grey' style={({isActive}) => isActive ? activeStyles : null} to="photos">Photos</NavLink>
                                </nav>
                                <Outlet context={{tent}}/>
                            </>
                        )
                    }}
                </Await>
            </React.Suspense>
            
        </main>
    )
}