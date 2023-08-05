import React from "react";

const SearchBar = ({ keyword, keywordChange }) => {
    return (
        <div className="search-bar">
            <input
                   type="text"
                   placeholder="Cari Catatan..."
                   value={keyword}
                   onChange={(event) => keywordChange(event.target.value)} />
        </div>

    )
}

export default SearchBar;