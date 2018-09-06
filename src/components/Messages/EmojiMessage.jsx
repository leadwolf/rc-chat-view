import React from 'react';
import PropTypes from 'prop-types';
import { Emoji } from 'emoji-mart';
import { messageContentEmojiValidator } from '../../types';

/* eslint react/require-default-props: 0 */

const EmojiMessage = ({ emoji, onClick }) => (
    <div
        className="sc-message--emoji"
        onClick={onClick}
        onKeyPress={onclick}
        role="button"
        tabIndex={0}
    >
        <Emoji emoji={emoji} size={32} />
    </div>
);

EmojiMessage.propTypes = {
    emoji: messageContentEmojiValidator,
    onClick: PropTypes.func.isRequired,
};

export default EmojiMessage;
