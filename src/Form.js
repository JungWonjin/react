import React from 'react';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form-group">
            <input type="email" class="form-control" placeholder="이메일"/>
            <input type="password" class="form-control" placeholder="비밀번호"/>
            <button type="submit" class="btn btn-primary">로그인</button>
        </div>
    );
};

export default Form;