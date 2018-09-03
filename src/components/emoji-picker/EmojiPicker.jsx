import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import '../../styles/emojiPicker.css';

class EmojiPicker extends Component {
    componentDidMount() {
        const elem = this.domNode;
        elem.style.opacity = 0;
        window.requestAnimationFrame(() => {
            elem.style.transition = 'opacity 350ms';
            elem.style.opacity = 1;
        });
        this.domNode.focus();
    }

    onEmojiPicked = emoji => {
        const { onEmojiPicked: propOnEmojiPicked, onBlur } = this.props;
        propOnEmojiPicked(emoji);
        onBlur();
    };

    render() {
        const { onBlur } = this.props;

        return (
            <div
                tabIndex="0"
                onBlur={onBlur}
                className="sc-emoji-picker"
                ref={e => {
                    this.domNode = e;
                }}
            >
                <Picker onSelect={this.onEmojiPicked} set="apple" />
            </div>
        );
    }
}

EmojiPicker.propTypes = {
    onEmojiPicked: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
};

export default EmojiPicker;
