import React from "react";

const SearchBar = ({ keyword, keywordChange }) => {
    return (
        <section className="search-bar">
            <input
                type="text"
                placeholder="Cari Catatan..."
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)} />
        </section>
    )
}

export default SearchBar;