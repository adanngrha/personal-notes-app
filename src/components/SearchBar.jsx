import React from "react";

const SearchBar = ({ onSearch }) => {
    return (
        <div className="note-search">
            <input className="note-search" type="text" placeholder="Cari Catatan..." onChange={onSearch} />
        </div>
    )
}

export default SearchBar;