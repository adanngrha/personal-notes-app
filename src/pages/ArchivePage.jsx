import React from 'react';
import { getArchivedNotes } from "../utils/local-data.js";
import NoteList from "../components/NoteList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import {useSearchParams} from "react-router-dom";

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }
    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <main className="note-app__body">
                <h4 className="section-heading">Catatan Arsip</h4>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
            </main>
        );
    }
}

const ArchivePageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

export default ArchivePageWrapper;