import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import getState from "/workspaces/alondragerke-fspt53-sistema-de-autentificaci-n/src/front/js/store/flux.js";


const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const { actions } = getState();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await actions.login(credentials.username, credentials.password); // Utilizar la acción de login
            navigate('/private'); // Redirigir a la página privada después del inicio de sesión exitoso
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="d-flex justify-content-center login-container">
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3 input-group">
                    <InputGroup.Text className="addon">Username</InputGroup.Text>
                    <Form.Control
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        className="form-control focus-ring"
                        placeholder="john.doe"
                        aria-label="Username"
                        aria-describedby="username-input"
                        required
                    />
                </InputGroup>
                <InputGroup className="mb-3 input-group">
                    <InputGroup.Text className="addon">Password</InputGroup.Text>
                    <Form.Control
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="form-control focus-ring"
                        placeholder="123456"
                        aria-label="Password"
                        aria-describedby="password-input"
                        required
                    />
                </InputGroup>
                <Button className="login-page-btn" type="submit">Log in</Button>{' '}
            </Form>
        </div>
    );
};

export default Login;