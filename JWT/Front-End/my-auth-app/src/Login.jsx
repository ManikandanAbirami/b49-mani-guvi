import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Login = ({setToken}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/login', formData);
            const { token } = response.data;
            setToken(token); // Store the token in your app.js state
            localStorage.setItem('token', token);
            // history.push('/protected');
            navigate('/home')
        } catch (error) {
            console.error(error.response.data.message);
        }
    }
  return (
    <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='username'>Username:</label>
            <input
                type='text'
                id='username'
                name='username'
                onChange={handleChange}
                value={formData.username}
                required
            ></input>
        </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input
                type='password'
                id='password'
                name='password'
                onChange={handleChange}
                value={formData.password}
                required
            ></input>
        </div>
        <button type="submit">Login</button>
    </form>
</div>
  )
}

export default Login