import React, { Component } from 'react';
import Message from './Message';
import '../../styles/messages/messageList.css';

class MessageList extends Component {
    componentDidUpdate(prevProps, prevState) {
        this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }

    render() {
        const { userId } = this.props;

        return (
            <div className="sc-message-list" ref={el => (this.scrollList = el)}>
                {this.props.messages.map((message, i) => <Message message={message} key={i} userId={userId} />)}
            </div>
        );
    }
}

export default MessageList;
