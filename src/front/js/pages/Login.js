import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const Login = () => {
	return (
        <div className="d-flex justify-content-center login-container">
            <div>
                <InputGroup className="mb-3 input-group">
                    <InputGroup.Text className="addon">Username</InputGroup.Text>
                    <Form.Control
						className="form-control focus-ring"
                        placeholder="John Doe"
                        aria-label="Username"
                        aria-describedby="username-input"
                    />
                </InputGroup>
                <InputGroup className="mb-3 input-group">
                    <InputGroup.Text className="addon">Password</InputGroup.Text>
                    <Form.Control
						className="form-control focus-ring"
                        placeholder="123456"
                        aria-label="Password"
                        aria-describedby="password-input"
                    />
                </InputGroup>
				<Button className="login-page-btn">Log in</Button>{' '}
            </div>
        </div>
	);
};

export default Login;