import React, { useState } from "react";

import './Login.scss';
import './UI.scss';

const Login = () => {
    const [userName, setUserName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userName.length < 1) {

        }

        localStorage.setItem('userName', userName);
        setUserName('');
    } 

    return (
        <div className="center">
            <div>
                <div>
                    {userName && <h1>Hello, {userName}!</h1>}
                </div>
                <form className="input-form" onSubmit={handleSubmit}>
                    <label>
                        Your Nickname:
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            className="userNameInput"
                        />
                    </label><br/>
                    <button className="button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
