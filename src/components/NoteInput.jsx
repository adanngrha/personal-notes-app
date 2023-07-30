import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            max_char: 50,
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        if (event.target.value.length <= 50) {
            this.setState(() => {
                return {
                    title: event.target.value,
                    max_char: 50 - event.target.value.length
                }
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        if (this.state.title === '' || this.state.body === '') {
            alert('Judul dan isi catatan tidak boleh kosong!');
            return;
        }
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
                max_char: 50,
            }
        });
    }
    render() {
        return (
            <div className="note-input">
                <h2>Tambah Catatan</h2>
                <p className="note-input__title__char-limit">Sisa Karakter: {this.state.max_char}</p>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input className="note-input__title" type="text" maxLength={50}
                           value={this.state.title} onChange={this.onTitleChangeEventHandler}
                           placeholder="Ini adalah judul..."/>
                    <textarea className="note-input__body"
                              value={this.state.body} onChange={this.onBodyChangeEventHandler}
                              placeholder="Tuliskan catatanmu disini..."/>
                    <button>Tambah</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;