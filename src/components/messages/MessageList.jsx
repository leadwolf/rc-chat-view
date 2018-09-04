import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Message from './Message';
import { messageArrayType } from '../../types';

import '../../styles/messages/messageList.css';

const DATE_MIN_DIFF_SEC = 10;

class MessageList extends Component {
    componentDidUpdate(prevProps, prevState) {
        this.scrollList.scrollTop = this.scrollList.scrollHeight;
    }

    messageList = () => {
        const {
            userId,
            messages,
            showUsername: propShowUsername,
            showAvatar: propShowAvatar,
            avatarTopPosition,
            showDate: propShowDate,
        } = this.props;
        let lastSenderId = '';

        return messages.map((message, index) => {
            const lastSenderIsDiff = lastSenderId !== message.senderId;
            const nextSenderIsSame =
                index < messages.length - 1 && messages[index + 1].senderId === message.senderId;
            const canShowAvatar = avatarTopPosition ? lastSenderIsDiff : !nextSenderIsSame;

            const dateDiff =
                index > 0
                    ? moment(message.date).diff(moment(messages[index - 1].date), 'seconds')
                    : 0;

            const showDate =
                index === 0 || index === messages.length - 1 || dateDiff >= DATE_MIN_DIFF_SEC;

            const messageComp = (
                <Message
                    key={message.id}
                    message={message}
                    userId={userId}
                    showUsername={propShowUsername && lastSenderIsDiff}
                    showAvatar={propShowAvatar}
                    canShowAvatar={canShowAvatar}
                    showDate={propShowDate && showDate}
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
    showAvatar: PropTypes.bool.isRequired,
    avatarTopPosition: PropTypes.bool.isRequired,
    showDate: PropTypes.bool.isRequired,
};

export default MessageList;
