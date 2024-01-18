import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {
        // Basic validations
        if (name.trim().length === 0) {
            alert("Length of name cannot be zero!");
            return;
        }

        // Validate phone number (password) length
        if (password.trim().length !== 10) {
            alert("Phone number should be of 10 digits!");
            return;
        }

        // Validate phone number (password) contains only digits
        const isNumeric = /^[0-9]+$/.test(password);
        if (!isNumeric) {
            alert("Phone number should contain only digits!");
            return;
        }



        if (email.trim().length === 0 || password.trim().length === 0) {
            alert("Email and Phone number cannot be empty!");
            return;
        }

        console.warn(name, email, password);

        let result = await fetch('http://localhost:4000/create-user', {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        result = await result.json();
        console.warn(result);

        if (result) {
         
            navigate('/');
        }


       
    }

    return (
        <>
            <div className="register">
                <h1>Welcome to the JTS </h1>

                <input className="inputBox" type="text" placeholder="Enter Name "
                    value={name} onChange={(e) => setName(e.target.value)} required
                />
                <input className="inputBox" type="text" placeholder="Enter Email "
                    value={email} onChange={(e) => setEmail(e.target.value)} required
                />
                <input className="inputBox" type="text" placeholder="Enter Phone No "
                    value={password} onChange={(e) => setPassword(e.target.value)} required
                />
                <button onClick={collectData} className="appButton" type="button">Submit</button>
            </div>
        </>
    )
}

export default SignUp;
