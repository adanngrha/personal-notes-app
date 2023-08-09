import React from 'react';
import Navigation from "./Navigation.jsx";
import {Link} from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext.js";

const Header = ({ authedUser }) => {
    const { locale } = React.useContext(LocaleContext);

    return (
        <header>
            <h1>
                <Link to='/'>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link>
            </h1>
            <Navigation authedUser={authedUser} />
        </header>
    );
}

export default Header;