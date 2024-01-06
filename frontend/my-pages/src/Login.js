import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();
        navigate('/home');


        setEmail("");
        setPassword("");
        

        const data = {

            email,
            password,

        };

        try {

            await axios
                .post("http://localhost:8080/login", {

                    email: email,
                    password: password,

                })
                .then((res) => {
                    if (res.status === 200) {
                       
                        // window.location.href = "/home";
                    } else {
                        
                        console.log(res.data.error);
                    }
                    console.log(res.data);
                    console.log("Data Login  successfully!");
                    console.log(res.data.token);
                    console.log(data.name);
                });
        } catch (error) {
           
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h1>Login</h1>

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

            <button type="submit">Login</button>
            <div className="form-group mt-2">
                <p>create new user <a href="/register">Sign up?</a></p>
            </div>
        </form>
    );
};

export default Login;
