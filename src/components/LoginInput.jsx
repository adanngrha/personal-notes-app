import React, {useState} from 'react';
import PropTypes from 'prop-types';

const LoginInput = ({login}) => {
    const useInput = (defaultValue = '') => {
        const [value, setValue] = useState(defaultValue);

        const onValueChangeHandler = (event) => {
            setValue(event.target.value);
        };

        return [value, onValueChangeHandler];
    }

    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

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
            <input type='email' placeholder='Email' value={email} onChange={onEmailChange}/>
            <label>Password</label>
            <input type='password' placeholder='Password' value={password} onChange={onPasswordChange}/>
            <button>Login</button>
        </form>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;