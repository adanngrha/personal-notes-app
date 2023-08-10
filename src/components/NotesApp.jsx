import React, {useEffect, useState} from 'react';
import Header from './Header.jsx';
import HomePage from '../pages/HomePage.jsx';
import AddPage from '../pages/AddPage.jsx';
import ArchivePage from '../pages/ArchivePage.jsx';
import {Route, Routes} from 'react-router-dom';
import DetailPage from '../pages/DetailPage.jsx';
import NotFound from './NotFound.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import {LocaleProvider} from '../contexts/LocaleContext.js';
import {ThemeProvider} from '../contexts/ThemeContext.js';
import {getUserLogged, putAccessToken} from '../utils/network-data.js';

const NotesApp = () => {
    const [authedUser, setAuthedUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [localeContext, setLocaleContext] = useState({
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
            setLocaleContext((prevState) => {
                const newLocale = prevState.locale === 'id' ? 'en' : 'id';
                localStorage.setItem('locale', newLocale);
                return {
                    ...prevState,
                    locale: newLocale,
                };
            });
        },
    });
    const [themeContext, setThemeContext] = useState({
        theme: localStorage.getItem('theme') || 'dark',
        toggleTheme: () => {
            setThemeContext((prevState) => {
                const newTheme = prevState.theme === 'dark' ? 'light' : 'dark';
                localStorage.setItem('theme', newTheme);
                return {
                    ...prevState,
                    theme: newTheme,
                };
            });
        },
    });

    const onLoginSuccess = async ({accessToken}) => {
        putAccessToken(accessToken);
        const {data} = await getUserLogged();
        setAuthedUser(data);
    }

    const onLogout = () => {
        setAuthedUser(null);
        putAccessToken('');
    }

    useEffect(() => {
        getUserLogged().then(({data}) => {
            setAuthedUser(data);
        })
        setInitializing(false);
        document.documentElement.setAttribute('data-theme', themeContext.theme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themeContext.theme);
    }, [themeContext]);

    if (initializing) {
        return null;
    }

    return (
        <LocaleProvider value={localeContext}>
            <ThemeProvider value={themeContext}>
                <div className='app-container'>
                    <Header authedUser={authedUser} onLogout={onLogout}/>
                    <main>
                        <Routes>
                            {
                                !authedUser ? (
                                    <>
                                        <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess}/>}/>
                                        <Route path='/register' element={<RegisterPage/>}/>
                                    </>
                                ) : (
                                    <>
                                        <Route path='/' element={<HomePage/>}/>
                                        <Route path='/archives' element={<ArchivePage/>}/>
                                        <Route path='/notes/new' element={<AddPage/>}/>
                                        <Route path='/notes/:id' element={<DetailPage/>}/>
                                        <Route path='*' element={<NotFound/>}/>
                                    </>
                                )
                            }
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </LocaleProvider>
    )
}

export default NotesApp;