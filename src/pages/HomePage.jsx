import React, { useEffect, useState } from "react";
import { getActiveNotes } from "../utils/local-data.js";
import NoteList from "../components/NoteList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import {Link, useSearchParams} from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    });

    useEffect(() => {
        setNotes(getActiveNotes());
    }, []);

    const onKeywordChangeHandler = keyword => {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <section className="homepage">
            <h2>Catatan Aktif</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            <NoteList notes={filteredNotes}/>
            <div className="homepage__action">
                <Link to="notes/new" className="action"><MdNoteAdd /></Link>
            </div>
        </section>
    );
}

export default HomePage;