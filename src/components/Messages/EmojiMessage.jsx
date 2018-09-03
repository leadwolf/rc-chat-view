import React from 'react';
import { Emoji } from 'emoji-mart';

const EmojiMessage = ({ emoji }) => (
    <div className="sc-message--emoji">
        <Emoji emoji={emoji} size={32} />
    </div>
);

export default EmojiMessage;
