import React, { useState } from 'react';
import axios from '../../Api/Axios';
import { Link } from 'react-router-dom';

function Sign_in() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/user/login', loginData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='mt-[100px]'>
            <h1 className='text-center'>Login</h1>
            <form className='w-[400px] border-[2px] h-[200px] flex items-center justify-around flex-col m-auto ' onSubmit={handleLoginSubmit}>
                <label>Username:</label>
                <input
                    className='w-[300px] h-[40px] '
                    type="text"
                    value={loginData.username}
                    placeholder='Username'
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={loginData.password}
                    placeholder='Password'
                    className='w-[300px] h-[40px] '
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
                <button type="submit">Login</button>
                <Link to={'/sign_up'} >Sign up</Link>
            </form>
        </div>
    );
}

export default Sign_in;
