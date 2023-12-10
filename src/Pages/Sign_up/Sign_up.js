import React, { useState } from 'react';
import axios from '../../Api/Axios';
import './Sign_up.css'
import { Link } from 'react-router-dom';

const App = () => {
    const [registrationData, setRegistrationData] = useState({
        email: '',
        name: '',
        lastname: '',
        username: '',
        password: ''
    });

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/user/register', registrationData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='mt-[100px] '>
            <h1>Registration</h1>
            <form className='w-[400px] h-[400px] flex flex-col items-center justify-around ' onSubmit={handleRegistrationSubmit}>
                <label>Email:</label>
                <input type="email" name="" id="" value={registrationData.email} placeholder='Email' className='w-[300px] h-[40px] ' onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })} />
                <input type="text" value={registrationData.name} placeholder='Name' className='w-[300px] h-[40px] ' onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })} />
                <input type="text" value={registrationData.lastname} placeholder='Lastname' className='w-[300px] h-[40px] ' onChange={(e) => setRegistrationData({ ...registrationData, lastname: e.target.value })} />
                <input type="text" value={registrationData.username} placeholder='Username' className='w-[300px] h-[40px] ' onChange={(e) => setRegistrationData({ ...registrationData, username: e.target.value })} />
                <input type="text" value={registrationData.password} placeholder='Password' className='w-[300px] h-[40px] ' onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })} />
                <Link to={`/${registrationData.username}`}>register</Link>
            </form>

            <h1>Login</h1>

        </div>
    );
};

export default App;
