import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



const Singup = () => {
	return (
		<div className="d-flex justify-content-center signin-container">
            <div>
				<InputGroup className="mb-3 input-group">
                    <InputGroup.Text className="addon">First name</InputGroup.Text>
                    <Form.Control
						className="form-control focus-ring"
                        placeholder="John"
                        aria-label="Password"
                        aria-describedby="password-input"
                    />
                </InputGroup>
				<InputGroup className="mb-3 input-group">
                    <InputGroup.Text className="addon">Last name</InputGroup.Text>
                    <Form.Control
						className="form-control focus-ring"
                        placeholder="Doe"
                        aria-label="Password"
                        aria-describedby="password-input"
                    />
                </InputGroup>
				<InputGroup className="mb-3 input-group">
                    <InputGroup.Text className="addon">Birth date</InputGroup.Text>
                    <Form.Control
						className="form-control focus-ring"
                        placeholder="12/08/1980"
                        aria-label="Password"
                        aria-describedby="password-input"
                    />
                </InputGroup>
				<InputGroup className="mb-3 input-group">
                    <InputGroup.Text className="addon">Country</InputGroup.Text>
                    <Form.Control
						className="form-control focus-ring"
                        placeholder="United States"
                        aria-label="Password"
                        aria-describedby="password-input"
                    />
                </InputGroup>
				<InputGroup className="mb-3 input-group">
                    <InputGroup.Text className="addon">Username</InputGroup.Text>
                    <Form.Control
						className="form-control focus-ring"
                        placeholder="john.doe"
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
				<Button className="login-page-btn">Sign in</Button>{' '}
            </div>
        </div>
	);
};

export default Singup;