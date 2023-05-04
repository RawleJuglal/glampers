import React, {Component, useState} from 'react'
const { Provider, Consumer } = React.createContext()

class UserContextProvider extends Component{
    state = {
        loggedIn: false
    }

    toggleLoggedIn = (userStatus)=>{
        if(userStatus !== this.state.loggedIn){
            this.setState(prevState => {
                return {
                    loggedIn: !prevState.loggedIn
                }
            })
        }
        
    }
    render(){
        return(
            <Provider value={{user: this.state.loggedIn, toggleLoggedIn: this.toggleLoggedIn}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}