import React from 'react';
import '../signin.css'
import {Form, Button} from 'react-bootstrap';

const SignIn = () => {
    return (
        <Form className="form-signin">
            <Form.Label className="sr-only">이메일</Form.Label>
            <Form.Control type="email" placeholder="이메일" autoFocus required />
            <Form.Label className="sr-only">비밀번호</Form.Label>
            <Form.Control type="password" placeholder="비밀번호" required />
            <Button variant="primary" size="lg" block type="submit">로그인 또는 가입하기</Button>
        </Form>
    );
};

export default SignIn;
