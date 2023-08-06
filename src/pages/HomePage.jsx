import React from "react";
import { getActiveNotes } from "../utils/local-data.js";
import NoteList from "../components/NoteList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import {Link, useSearchParams} from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";
import PropTypes from "prop-types";

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
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <NoteList notes={notes}/>
                <div className="homepage__action">
                    <Link to="notes/new" className="action"><MdNoteAdd /></Link>
                </div>
            </section>
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

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;