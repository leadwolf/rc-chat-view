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
        const { userId, messages, showUsername: propShowUsername } = this.props;
        let lastSenderId = '';

        return messages.map(message => {
            const lastSenderIsDiff = lastSenderId !== message.senderId;

            const messageComp = (
                <Message
                    key={message.id}
                    message={message}
                    userId={userId}
                    showUsername={lastSenderIsDiff && propShowUsername}
                    showAvatar={lastSenderIsDiff}
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
