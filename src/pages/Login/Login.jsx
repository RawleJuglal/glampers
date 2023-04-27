import React from 'react'
import { Form } from 'react-router-dom'
import './Login.css'

export default function Login(){
    return(
       <div className='--login-page-container page-container flex flex-center flex-column'>
            <div className='--login-limit-width limit-width'>
                <h1 className='XXXIIpt bold center'>Sign in to your account</h1>
                <Form className='--login-form flex flex-center flex-align-center flex-column' method="post">
                    <input className='--login-email block-input' type="email" placeholder="Email" />
                    <input className='--login-password block-input' type="password" placeholder="Password"/>
                    <button className='--login-btn btn ' type="submit">Sign in</button>
                </Form>
                <p className='bold'>Don't have an account? <a className='--login-new link regular' href="#">Create one now</a></p>
            </div>
            
       </div>
    )
}