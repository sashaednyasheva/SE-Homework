import React from 'react'
import Form from './Form'
import LogoPS from './LogoPS.png'

const App = () => {

    const username = 'Sasha';
    const password = 'password';

    return (
        <div className="app">
            <img src={LogoPS} alt="logo perscholas" width="230px" height="150px"/>
            <p>Hello! Log in to your account to view today's assignments:</p>
            <Form username={username} password={password} />
        </div>
    )
}

export default App;