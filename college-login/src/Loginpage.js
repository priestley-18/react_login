// src/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css'; // Optional: for styling

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Student');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Here you would typically make an API call to your backend for authentication
        // For now, we will just simulate a successful login
        console.log('Logging in with:', { username, password, role });

        // Simulate login success
        if (username === 'test' && password === 'test' && role) {
            setError('');
            alert('Login successful!');
            // Redirect to respective dashboard based on role
            // e.g., window.location.href = `/${role.toLowerCase()}-dashboard`;
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="Student">Student</option>
                        <option value="FacultyMember">Faculty Member</option>
                        <option value="Administrator">Administrator</option>
                    </select>
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
