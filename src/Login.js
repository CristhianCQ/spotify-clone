import React from 'react' //rafc 
import './Login.css'
import { loginUrl } from './spotify'


export const Login = () => {
    return (
        <div className= "login">
            
            <img 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="spotify logo"
            />
             <a href={loginUrl}>LOGIN WITH SPOTIFY</a >
            <h1>Login</h1>
        </div>
    )
}
