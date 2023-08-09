import React, { useState } from "react";
import PropTypes from "prop-types";

const RegisterInput = ({ register }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const onNameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const onPasswordConfirmationChangeHandler = (event) => {
        setPasswordConfirmation(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        register({
            name: name,
            email: email,
            password: password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className='register-input'>
            <label>Name</label>
            <input type="text" placeholder="Nama" value={name} onChange={onNameChangeHandler} />
            <label>Email</label>
            <input type="email" placeholder="Email" value={email} onChange={onEmailChangeHandler} />
            <label>Password</label>
            <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={onPasswordChangeHandler} />
            <label>Confirm Password</label>
            <input type="password" placeholder="Password Confirmation" autoComplete='current-password' value={passwordConfirmation} onChange={onPasswordConfirmationChangeHandler} />
            <button>Register</button>
        </form>
    )
}

export default RegisterInput;