import React, { useState } from "react";
import PropTypes from "prop-types";

const LoginInput = ({ login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        login({
            email: email,
            password: password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Email</label>
            <input type='email' placeholder='Email' value={email} onChange={onEmailChangeHandler}/>
            <label>Password</label>
            <input type='password' placeholder='Password' value={password} onChange={onPasswordChangeHandler}/>
            <button>Login</button>
        </form>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;