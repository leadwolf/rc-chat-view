import React, { Component } from 'react';
import Message from './Message';
import '../../styles/messages/messageList.css';

class MessageList extends Component {
    componentDidUpdate(prevProps, prevState) {
        this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }

    render() {
        return (
            <div className="sc-message-list" ref={el => (this.scrollList = el)}>
                {this.props.messages.map((message, i) => {
                    return <Message message={message} key={i} />;
                })}
            </div>
        );
    }
}

export default MessageList;
