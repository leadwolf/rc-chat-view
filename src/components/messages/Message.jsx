import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import chatIconUrl from '../../assets/chat-icon.svg';
import '../../styles/messages/message.css';

class Message extends Component {
    _renderMessageOfType = (type, message) => {
        switch (type) {
            default:
            case 'text':
                return <TextMessage {...message} />;
            case 'emoji':
                return <EmojiMessage {...message} />;
        }
    };

    render() {
        const {
            message: { author, type },
            message,
        } = this.props;

        return (
            <div className="sc-message">
                <div className={`sc-message--content ${author === 'me' ? 'sent' : 'received'}`}>
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
