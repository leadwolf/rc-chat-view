import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import { messageArrayType } from '../../types';

import '../../styles/messages/messageList.css';

class MessageList extends Component {
    componentDidUpdate(prevProps, prevState) {
        this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }

    messageList = () => {
        const { userId, messages, showUsername } = this.props;
        let lastSenderId = '';

        return messages.map(message => {
            const showAvatar = lastSenderId !== message.senderId;

            const messageComp = (
                <Message
                    key={message.id}
                    message={message}
                    userId={userId}
                    showUsername={showUsername}
                    showAvatar={showAvatar}
                />
            );

            lastSenderId = message.senderId;

            return messageComp;
        });
    };

    render() {
        return (
            <div className="sc-message-list" ref={el => (this.scrollList = el)}>
                {this.messageList()}
            </div>
        );
    }
}

MessageList.propTypes = {
    userId: PropTypes.string.isRequired,
    messages: messageArrayType.isRequired,

    showUsername: PropTypes.bool.isRequired,
};

export default MessageList;
