import React, {useState} from 'react';
import PropTypes from 'prop-types';

const RegisterInput = ({register}) => {
    const useInput = (defaultValue = '') => {
        const [value, setValue] = useState(defaultValue);

        const onValueChangeHandler = (event) => {
            setValue(event.target.value);
        };

        return [value, onValueChangeHandler];
    }

    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [passwordConfirmation, onPasswordConfirmationChange] = useInput('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (password !== passwordConfirmation) {
            alert('Password and password confirmation must be same!');
            return;
        }

        register({
            name: name,
            email: email,
            password: password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className='register-input'>
            <label>Name</label>
            <input type='text' placeholder='Nama' value={name} onChange={onNameChange}/>
            <label>Email</label>
            <input type='email' placeholder='Email' value={email} onChange={onEmailChange}/>
            <label>Password</label>
            <input type='password' placeholder='Password' autoComplete='current-password' value={password}
                   onChange={onPasswordChange}/>
            <label>Confirm Password</label>
            <input type='password' placeholder='Password Confirmation' autoComplete='current-password'
                   value={passwordConfirmation} onChange={onPasswordConfirmationChange}/>
            <button>Register</button>
        </form>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;