import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import { messageArrayType } from '../../types';

import '../../styles/messages/messageList.css';

class MessageList extends Component {
    componentDidUpdate(prevProps, prevState) {
        this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }

    render() {
        const { userId, messages, showUsername } = this.props;

        return (
            <div className="sc-message-list" ref={el => (this.scrollList = el)}>
                {messages.map(message => (
                    <Message
                        key={message.id}
                        message={message}
                        userId={userId}
                        showUsername={showUsername}
                    />
                ))}
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
