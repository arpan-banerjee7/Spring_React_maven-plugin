import React from 'react';
import { useStateValue } from './StateProvider';


function Login() {
    const [state, dispatch]= useStateValue();
    const loginToApp=()=>{
            dispatch({
                type:"SET_USER",
                user:"Arpan"
            });
        };
    return (
        <div>
            <h1>I am the login App</h1>
            <button onClick={loginToApp}>Login</button>
        </div>
    )
};

export default Login
