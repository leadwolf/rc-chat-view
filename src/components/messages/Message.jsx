import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';

import chatIconUrl from '../../assets/chat-icon.svg';
import '../../styles/messages/message.css';

import { MESSAGE_CONTENT_TYPE_TEXT, MESSAGE_CONTENT_TYPE_EMOJI, messageType } from '../../types';

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
            message: { senderId, type, username, avatar },
            message,
            showAvatar,
            showUsername,
        } = this.props;

        const messageIsMine = senderId === userId;

        return (
            <div className="sc-message">
                <div className={`sc-message--content ${messageIsMine ? 'sent' : 'received'}`}>
                    {!messageIsMine && (
                        <div
                            className={`sc-message--avatar ${showAvatar ? '' : 'hidden'}`}
                            // style={{
                            //     backgroundImage: `url(${chatIconUrl})`,
                            // }}
                        >
                            <Avatar {...avatar} size="30px" round />
                        </div>
                    )}
                    <div className="sc-message--content---body">
                        {!messageIsMine &&
                            showUsername && (
                                <span className="sc-message--username">{username}</span>
                            )}
                        {this._renderMessageOfType(type, message)}
                    </div>
                </div>
            </div>
        );
    }
}

Message.propTypes = {
    userId: PropTypes.string.isRequired,
    message: messageType.isRequired,

    showAvatar: PropTypes.bool.isRequired, // if the avater should be displayed or whitespace
    showUsername: PropTypes.bool.isRequired,
};

export default Message;
