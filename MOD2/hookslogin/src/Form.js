import React, { useState } from 'react'
import Failure from './Failure'
import Welcome from './Welcome'


const Form = (props) => {

    const [username, setUsername] = useState(" ") 
    const [password, setPassword] = useState(" ")
    const [showLogin, setShowLogin] = useState(" ")

    const handleLogin = (event) => {
        
        event.preventDefault()
        
        if (username === props.username && password === props.password){
            setShowLogin(<Welcome username={props.username}/>) 
            // return (<Welcome username={props.username}/>)
        }
        else {
            setShowLogin(<Failure />) 
        }

    }

    const handleChange1 = (event) => setUsername(event.target.value)


    const handleChange2 = (event) => setPassword(event.target.value)

    return(
        <div> 
            <form className="formDiv" onSubmit = {handleLogin}>
            <label>Username: <input id='username' type="text" onChange={handleChange1}/> </label>
            <label>Password: <input id='password' type="password" onChange={handleChange2}/></label>
            <button>Login</button>
            </form>

           <div> {showLogin} </div>

          
        </div>
    )
}
export default Form;