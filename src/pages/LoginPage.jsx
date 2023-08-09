import React from "react";
import {Link} from "react-router-dom";
import { login } from "../utils/network-data";
import PropTypes from "prop-types";
import LoginInput from "../components/LoginInput.jsx";

const LoginPage = ({ loginSuccess }) => {
    const onLogin = async ({ email, password }) => {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <section className="input-login">
            <h2>Login to use app, please.</h2>
            <br /><br />
            <LoginInput login={onLogin}/>
            <br /><br />
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;