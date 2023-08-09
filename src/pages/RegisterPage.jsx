import React from "react";
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <section className="input-register">
            <h2>Fill the form to register account.</h2>
            <br /><br />
            <form>
                <label>Name</label>
                <input type="text"/>
                <label>Email</label>
                <input type="text"/>
                <label>Password</label>
                <input type="text"/>
                <label>Confirm Password</label>
                <input type="text"/>
                <button>Register</button>
            </form>
            <br /><br />
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </section>
    )
}

export default RegisterPage;