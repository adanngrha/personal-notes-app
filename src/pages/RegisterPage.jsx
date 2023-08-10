import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {register} from '../utils/network-data.js';
import RegisterInput from '../components/RegisterInput.jsx';

const RegisterPage = () => {
    const navigate = useNavigate();
    const onRegister = async (user) => {
        const {error} = await register(user);
        if (!error) {
            navigate('/');
        }
    }

    return (
        <section className='input-register'>
            <h2>Fill the form to register account.</h2>
            <br/><br/>
            <RegisterInput register={onRegister}/>
            <br/><br/>
            <p>Already have an account? <Link to='/'>Login here</Link></p>
        </section>
    )
}

export default RegisterPage;