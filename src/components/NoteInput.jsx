import React, {useState} from 'react';
import {MdSave} from 'react-icons/md';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext.js';

const NoteInput = (props) => {
    const [maxChar, setMaxChar] = useState(50);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const {locale} = React.useContext(LocaleContext);

    const onTitleChangeEventHandler = (event) => {
        if (event.target.value.length <= 50) {
            setTitle(event.target.value);
            setMaxChar(50 - event.target.value.length);
        }
    };

    const onBodyChangeEventHandler = (event) => {
        setBody(event.target.innerHTML);
    };

    const onSubmitEventHandler = (event) => {
        event.preventDefault();
        props.addNote({
            title: title,
            body: body,
        });
    };

    return (
        <section className='add-new-page'>
            <form onSubmit={onSubmitEventHandler}>
                <div className='add-new-page__input'>
                    <input className='add-new-page__input__title' type='text' maxLength={50}
                           value={title} onChange={onTitleChangeEventHandler}
                           placeholder={locale === 'id' ? 'Ini adalah judul...' : 'This is title...'}/>
                    <div className='add-new-page__input__body'
                         onInput={onBodyChangeEventHandler}
                         data-placeholder={locale === 'id' ? 'Tuliskan catatanmu disini...' : 'Write your note here...'}
                         contentEditable>
                    </div>
                </div>
                <div className='add-new-page__action'>
                    <button className='action'><MdSave/></button>
                </div>
            </form>
        </section>
    );
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired
}

export default NoteInput;
