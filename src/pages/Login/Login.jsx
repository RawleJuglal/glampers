import React from 'react'
import { Form, useLoaderData, redirect, useActionData, useNavigation } from 'react-router-dom' 
import { loginUser } from '../../hooks/api'
import { publishEvent } from '../../hooks/customEvent'
import './Login.css'

export function loader({request}){
    return new URL(request.url).searchParams.get('message')
}

export async function action({request}){
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const pathname = new URL(request.url).searchParams.get('redirectTo') || '/glampers/host'
    try{
        const data = await loginUser({ email, password})
        
        const key = 'loggedin'
        const newValue = JSON.stringify(true)
        localStorage.setItem(key, newValue)
        publishEvent("login", { key, newValue });
        return redirect(pathname)
    } catch(err){
        return err.message
    }
}

export function Login(){
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()
    return(
        <div className='--login-page-container page-container flex flex-center flex-column'>
            <div className='--login-limit-width limit-width'>
                <h1 className='XXXIIpt bold center'>Sign in to your account</h1>
                {message && <h2 className="--login-error-message red XXpt bold">{message}</h2>}
                {errorMessage && <h2 className="--login-error-message red XXpt bold">{errorMessage}</h2>}
                <Form className='--login-form flex flex-center flex-align-center flex-column' method="post" replace>
                    <input className='--login-email block-input' name="email" type="email" placeholder="Email" />
                    <input className='--login-password block-input' name="password" type="password" placeholder="Password"/>
                    <button className='--login-btn btn ' disabled={navigation.state === 'submitting'}>{navigation.state === 'submitting' ? 'Logging in...' : 'Sign in'}</button>
                </Form>
                <p className='bold'>Don't have an account? <a className='--login-new link regular' href="#">Create one now</a></p>
            </div>  
        </div>
    )
}
