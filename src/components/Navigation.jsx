import React from "react";
import { Link } from "react-router-dom";
import {LocaleConsumer} from "../contexts/LocaleContext.js";
import {ThemeConsumer} from "../contexts/ThemeContext.js";

const Navigation = ({ authedUser }) => {
    if (authedUser === null) {
        return (
            <LocaleConsumer>
                {({ locale, toggleLocale }) => (
                    <ThemeConsumer>
                        {({ theme, toggleTheme }) => (
                            <nav className="navigation">
                                <ul>
                                    <li>
                                        <button onClick={toggleLocale}>
                                            {locale === "id" ? "en" : "id"}
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={toggleTheme}>
                                            {theme === "dark" ? "light" : "dark"}
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </ThemeConsumer>
                )}
            </LocaleConsumer>
        );
    }

    return (
        <LocaleConsumer>
            {({ locale, toggleLocale }) => (
                <ThemeConsumer>
                    {({ theme, toggleTheme }) => (
                        <nav className="navigation">
                            <ul>
                                <li>
                                    <Link to="/archives">Arsip</Link>
                                </li>
                                <li>
                                    <button onClick={toggleLocale}>
                                        {locale === "id" ? "en" : "id"}
                                    </button>
                                </li>
                                <li>
                                    <button onClick={toggleTheme}>
                                        {theme === "dark" ? "light" : "dark"}
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    )}
                </ThemeConsumer>
            )}
        </LocaleConsumer>
    )
};

export default Navigation;