import React, { Component } from 'react';
import Message from './Message';
import '../../styles/messages/messageList.css';

class MessageList extends Component {
    componentDidUpdate(prevProps, prevState) {
        this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }

    render() {
        const { userId, messages } = this.props;

        return (
            <div className="sc-message-list" ref={el => (this.scrollList = el)}>
                {messages.map(message => (
                    <Message key={message.id} message={message} userId={userId} />
                ))}
            </div>
        );
    }
}

export default MessageList;
