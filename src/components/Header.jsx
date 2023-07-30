import React from 'react';
import SearchBar from "./SearchBar.jsx";

const Header = ({ onSearch }) => {
    return (
        <header className="note-app__header">
            <h1>Aplikasi Catatan</h1>
            <SearchBar onSearch={onSearch} />
        </header>
    );
}

export default Header;