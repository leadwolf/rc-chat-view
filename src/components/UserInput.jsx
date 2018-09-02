import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';
import EmojiIcon from './icons/EmojiIcon';
import '../styles/userInput.css';
import { MESSAGE_CONTENT_TYPE_EMOJI, MESSAGE_CONTENT_TYPE_TEXT } from '../types';

class UserInput extends Component {
    state = {
        inputActive: false,
    };

    handleKey = event => {
        if (event.keyCode === 13 && !event.shiftKey) {
            this._submitText(event);
        }
    };

    clearInput = () => (this.userInput.innerHTML = '');

    _submitText = event => {
        event.preventDefault();
        const { onSubmit } = this.props;

        const text = this.userInput.textContent;

        if (text && text.length > 0) {
            onSubmit({
                type: MESSAGE_CONTENT_TYPE_TEXT,
                text,
            });
            this.clearInput();
        }
    };

    _handleEmojiPicked = emoji => {
        const { onSubmit } = this.props;

        onSubmit({
            type: MESSAGE_CONTENT_TYPE_EMOJI,
            emoji,
        });
    };

    render() {
        const { inputActive } = this.state;
        const { showEmoji } = this.props;

        return (
            <form className={`sc-user-input ${inputActive ? 'active' : ''}`}>
                <textarea
                    onFocus={() => {
                        this.setState({ inputActive: true });
                    }}
                    onBlur={() => {
                        this.setState({ inputActive: false });
                    }}
                    ref={e => {
                        this.userInput = e;
                    }}
                    onKeyDown={this.handleKey}
                    placeholder="Write a reply..."
                    className="sc-user-input--text"
                />
                <div className="sc-user-input--buttons">
                    <div className="sc-user-input--button">
                        {showEmoji && <EmojiIcon onEmojiPicked={this._handleEmojiPicked} />}
                    </div>
                    <div className="sc-user-input--button">
                        <SendIcon onClick={this._submitText} />
                    </div>
                </div>
            </form>
        );
    }
}

UserInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    showEmoji: PropTypes.bool.isRequired,
};

export default UserInput;
