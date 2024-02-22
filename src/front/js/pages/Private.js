import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


const Login = () => {
	return (
        <div className="d-flex justify-content-center login-container">
            <div>
                <h1 className="logout-title">Welcome to your private page!</h1>
                <br></br>
                <br></br>
                <Button className="login-page-btn">Log out</Button>{' '}
            </div>
        </div>
	);
};

export default Login;