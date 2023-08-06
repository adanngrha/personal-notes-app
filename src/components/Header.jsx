import React from 'react';
import Navigation from "./Navigation.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>
                <Link to='/'>Aplikasi Catatan</Link>
            </h1>
            <Navigation />
        </header>
    );
}

export default Header;