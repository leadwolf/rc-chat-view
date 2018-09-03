import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';

import chatIconUrl from '../../assets/chat-icon.svg';
import '../../styles/messages/message.css';

import { MESSAGE_CONTENT_TYPE_TEXT, MESSAGE_CONTENT_TYPE_EMOJI } from '../../types';

class Message extends Component {
    _renderMessageOfType = (type, message) => {
        switch (type) {
            default:
            case MESSAGE_CONTENT_TYPE_TEXT:
                return <TextMessage {...message} />;
            case MESSAGE_CONTENT_TYPE_EMOJI:
                return <EmojiMessage {...message} />;
        }
    };

    render() {
        const {
            userId,
            message: { senderId, type },
            message,
        } = this.props;

        return (
            <div className="sc-message">
                <div className={`sc-message--content ${senderId === userId ? 'sent' : 'received'}`}>
                    <div
                        className="sc-message--avatar"
                        style={{
                            backgroundImage: `url(${chatIconUrl})`,
                        }}
                    />
                    {this._renderMessageOfType(type, message)}
                </div>
            </div>
        );
    }
}

export default Message;
