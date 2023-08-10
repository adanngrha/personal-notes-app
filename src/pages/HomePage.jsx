import React, {useEffect, useState} from 'react';
import NoteList from '../components/NoteList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import {Link, useSearchParams} from 'react-router-dom';
import {MdNoteAdd} from 'react-icons/md';
import {getActiveNotes} from '../utils/network-data.js';
import LocaleContext from '../contexts/LocaleContext.js';

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const [initializing, setInitializing] = useState(true);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    });
    const {locale} = React.useContext(LocaleContext);

    useEffect(() => {
        getActiveNotes().then(({data}) => {
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
        <section className='homepage'>
            <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            <NoteList notes={filteredNotes}/>
            <div className='homepage__action'>
                <Link to='notes/new' className='action'><MdNoteAdd/></Link>
            </div>
        </section>
    );
}

export default HomePage;