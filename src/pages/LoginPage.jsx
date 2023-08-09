import React from "react";
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <section className="input-login">
            <h2>Login to use app, please.</h2>
            <br /><br />
            <form>
                <label>Email</label>
                <input type="text"/>
                <label>Password</label>
                <input type="text"/>
                <button>Login</button>
            </form>
            <br /><br />
            <p>Don't have an account? <Link to="/login">Register here</Link></p>
        </section>
    )
}

export default LoginPage;