import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext.js';

const SearchBar = ({keyword, keywordChange}) => {
    const {locale} = React.useContext(LocaleContext);

    return (
        <section className='search-bar'>
            <input
                type='text'
                placeholder={locale === 'id' ? 'Cari catatan berdasarkan judul...' : 'Search notes by title...'}
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}/>
        </section>
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;