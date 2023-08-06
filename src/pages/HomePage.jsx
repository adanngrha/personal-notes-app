import React from "react";
import { getActiveNotes } from "../utils/local-data.js";
import NoteList from "../components/NoteList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import {Link, useSearchParams} from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
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
            <main>
                <section className="homepage">
                    <h2 className="section-heading">Catatan Aktif</h2>
                    <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                    <NoteList notes={notes}/>
                    <div className="homepage__action">
                        <Link to="notes/add" className="action"><MdNoteAdd /></Link>
                    </div>
                </section>
            </main>
        );
    }
}

const HomePageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

export default HomePageWrapper;