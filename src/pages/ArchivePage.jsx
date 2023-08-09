import React, { useState, useEffect } from 'react';
import { getArchivedNotes } from "../utils/local-data.js";
import NoteList from "../components/NoteList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { useSearchParams } from "react-router-dom";

const ArchivePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    });

    useEffect(() => {
        setNotes(getArchivedNotes());
    }, []);

    const onKeywordChangeHandler = keyword => {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <section className="archives-page">
            <h2>Catatan Arsip</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            <NoteList notes={filteredNotes}/>
        </section>
    );
}

export default ArchivePage;
