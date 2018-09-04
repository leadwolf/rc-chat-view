import React from 'react';
import PropTypes from 'prop-types';
import { Emoji } from 'emoji-mart';
import { messageContentEmojiValidator } from '../../types';

const EmojiMessage = ({ emoji, onClick }) => (
    <div className="sc-message--emoji" onClick={onClick}>
        <Emoji emoji={emoji} size={32} />
    </div>
);

EmojiMessage.propTypes = {
    emoji: messageContentEmojiValidator,
    onClick: PropTypes.func.isRequired,
};

export default EmojiMessage;
