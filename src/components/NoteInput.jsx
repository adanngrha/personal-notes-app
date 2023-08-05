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
                body: event.target.innerHTML,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }
    render() {
        return (
            <section className="add-new-page">
                    <form onSubmit={this.onSubmitEventHandler}>
                        <div className="add-new-page__input">
                            <input className="add-new-page__input__title" type="text" maxLength={50}
                                   value={this.state.title} onChange={this.onTitleChangeEventHandler}
                                   placeholder="Ini adalah judul..."/>
                            <div className="add-new-page__input__body"
                                 onChange={this.onBodyChangeEventHandler}
                                 data-placeholder="Tuliskan catatanmu disini..." contentEditable="true">
                            </div>
                        </div>
                        <div className="add-new-page__action">
                            <button className="action">+</button>
                        </div>
                    </form>
            </section>
        );
    }
}

export default NoteInput;