import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../../assets/images/logo.png'
import { BsPersonCircle, BsDoorClosedFill } from 'react-icons/bs'
import './Header.css'


export default function Header(){
    const activeStyles = {
        textDecoration:'underline',
        color:'#161616'
    }

    function logout(){
        localStorage.clear()
    }

    return(
        <div className='--header-page-container flex flex-wrap flex-align-center'>
            <Link className='--header-logo' to='/'><img src={LogoImg} alt="Happy Glampers Logo" /></Link>
            <nav className='--header-nav bold'>
                <NavLink className='nav-link black' style={({isActive}) => isActive ? activeStyles : null} to="host">
                    Host
                </NavLink>
                <NavLink className='nav-link black' style={({isActive}) => isActive ? activeStyles : null} to="about">
                    About
                </NavLink>
                <NavLink className='nav-link black' style={({isActive}) => isActive ? activeStyles : null} to='tents'>
                    Tents
                </NavLink>
                <NavLink className='nav-link black' style={({isActive}) => isActive ? activeStyles : null} to='login'>
                    <BsPersonCircle />
                </NavLink>
                <a  className='nav-link black' onClick={logout}><BsDoorClosedFill/></a>
                
            </nav>
        </div>
    )
}