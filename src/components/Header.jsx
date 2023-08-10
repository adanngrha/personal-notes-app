import React from 'react';
import Navigation from './Navigation.jsx';
import {Link} from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext.js';
import PropTypes from 'prop-types';

const Header = ({authedUser, onLogout}) => {
    const {locale} = React.useContext(LocaleContext);

    return (
        <header>
            <h1>
                <Link to='/'>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link>
            </h1>
            <Navigation authedUser={authedUser} onLogout={onLogout}/>
        </header>
    );
}

Header.propTypes = {
    authedUser: PropTypes.object,
    onLogout: PropTypes.func.isRequired,
}

export default Header;