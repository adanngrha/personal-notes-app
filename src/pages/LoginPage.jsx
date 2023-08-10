import React from 'react';
import {Link} from 'react-router-dom';
import {login} from '../utils/network-data';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput.jsx';
import LocaleContext from '../contexts/LocaleContext.js';

const LoginPage = ({loginSuccess}) => {
    const {locale} = React.useContext(LocaleContext);
    const onLogin = async ({email, password}) => {
        const {error, data} = await login({email, password});

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className='input-login'>
            <h2>{locale === 'id' ? 'Yuk, login untuk menggunakan aplikasi.' : 'Login to use app, please.'}</h2>
            <br/><br/>
            <LoginInput login={onLogin}/>
            <br/><br/>
            {
                locale === 'id' ? (
                    <p>Belum punya akun? <Link to='/register'>Daftar di sini</Link></p>
                ) : (
                    <p>Don't have an account? <Link to='/register'>Register here</Link></p>
                )
            }
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;