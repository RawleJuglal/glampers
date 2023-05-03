import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './HostLayout.css'

export default function HostLayout(){
    const activeStyles = {
        textDecoration:'underline',
        color:'#161616'
    }
    return(
        <div className='--hostlayout-page-container page-container'>
            <nav className='--hostlayout-limit-width-container limit-width'>
                <NavLink className='link black' style={({isActive}) => isActive ? activeStyles : null} end to=".">Dashboard</NavLink>
                <NavLink className='link black' style={({isActive}) => isActive ? activeStyles : null} to="income">Income</NavLink>
                <NavLink className='link black' style={({isActive}) => isActive ? activeStyles : null} to="tents">Tents</NavLink>
                <NavLink className='link black' style={({isActive}) => isActive ? activeStyles : null} to="reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}