import React from 'react';
import {Link} from 'react-router-dom';
import LocaleContext, {LocaleConsumer} from '../contexts/LocaleContext.js';
import {ThemeConsumer} from '../contexts/ThemeContext.js';
import {MdGTranslate, MdOutlineBedtime, MdOutlineLogout, MdOutlineWbSunny} from 'react-icons/md';
import PropTypes from 'prop-types';

const Navigation = ({authedUser, onLogout}) => {
    const {locale} = React.useContext(LocaleContext);

    return (
        <LocaleConsumer>
            {({toggleLocale}) => (
                <ThemeConsumer>
                    {({theme, toggleTheme}) => (
                        !authedUser ? (
                            <nav className='navigation'>
                                <ul>
                                    <li>
                                        <button onClick={toggleLocale} className='toggle-locale'>
                                            <MdGTranslate/>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={toggleTheme} className='toggle-theme'>
                                            {theme === 'dark' ? <MdOutlineWbSunny/> : <MdOutlineBedtime/>}
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        ) : (
                            <>
                                <nav className='navigation'>
                                    <ul>
                                        <li>
                                            <Link to='/archives'>{locale === 'id' ? 'Terarsip' : 'Archived'}</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <button onClick={toggleLocale} className='toggle-locale'>
                                    <MdGTranslate/>
                                </button>
                                <button onClick={toggleTheme} className='toggle-theme'>
                                    {theme === 'dark' ? <MdOutlineWbSunny/> : <MdOutlineBedtime/>}
                                </button>
                                <button onClick={onLogout} className='button-logout'>
                                    <MdOutlineLogout/>{authedUser.name}
                                </button>
                            </>
                        )
                    )}
                </ThemeConsumer>
            )}
        </LocaleConsumer>
    )
};

Navigation.propTypes = {
    authedUser: PropTypes.object,
    onLogout: PropTypes.func.isRequired,
}

export default Navigation;