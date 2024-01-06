


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        navigate('/');
        alert(" register successful")

        const data = {
            name,
            email,
            password,
            address,
        };

        try {
          
            const res = await axios.post("http://localhost:8080/register", data);
            if (res.status === 200) {
                

            } else {
               
                console.log(res.data.error);
            }
            console.log(res.data);
            console.log("Data submitted successfully!");
            console.log(res);
            console.log(data.name);
        } catch (error) {
           
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h1>Register</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
            <button type="submit">Signup</button>
            <div className="form-group mt-2">
                <p>Already have an account? <a href="/">Login?</a></p>
            </div>
        </form>
    );
};

export default Register;

