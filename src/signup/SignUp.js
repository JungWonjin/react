import React from 'react';
import '../signin.css'
import {Form, Button} from 'react-bootstrap';

const SignUp = () => {
    return (
        <div className="form-signin">
            <Button variant="outline-secondary" size="sm" block type="button">네이버</Button>
            <Button variant="outline-secondary" size="sm" block type="button">카카오</Button>
            <Button variant="outline-secondary" size="sm" block type="button">구글</Button>
        </div>
    );
};

export default SignUp;