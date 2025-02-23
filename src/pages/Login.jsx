import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            setError("Both fields are required!");
            return;
        }
        
        setLoading(true);
        setError(null);

        try {
            const res = await axios.post("http://localhost:5000/login", { email, password });
            localStorage.setItem("username", res.data.username);
            setIsLoggedIn(true);
            navigate("/home");
        } catch (err) {
            setError("Invalid Credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                
                {error && <div className="error-msg">{error}</div>}

                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                
                <button 
                    onClick={handleLogin}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
                
                <p>
                    New user? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;