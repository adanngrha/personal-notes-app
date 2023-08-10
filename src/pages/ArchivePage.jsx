import React, {useEffect, useState} from 'react';
import {getArchivedNotes} from '../utils/network-data.js';
import NoteList from '../components/NoteList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import {useSearchParams} from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext.js';

const ArchivePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const [initializing, setInitializing] = useState(true);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    });
    const {locale} = React.useContext(LocaleContext);

    useEffect(() => {
        getArchivedNotes().then(({data}) => {
            setNotes(data);
        });
        setInitializing(false);
    }, []);

    const onKeywordChangeHandler = keyword => {
        setKeyword(keyword);
        setSearchParams({keyword});
    }

    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    if (initializing) {
        return null;
    }

    return (
        <section className='archives-page'>
            <h2>{locale === 'id' ? 'Catatan Terarsip' : 'Archived Notes'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            <NoteList notes={filteredNotes}/>
        </section>
    );
}

export default ArchivePage;
