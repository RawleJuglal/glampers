import { redirect } from "react-router-dom";

export async function requireAuth(request){
    console.log('in the auth')
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem('loggedin')
    console.log(isLoggedIn)
    if (isLoggedIn === 'null') {
        console.log('should redirect')
        throw redirect(
            `/glampers/login?message=You must log in first.&redirectTo=${pathname}`
        )
    }
}