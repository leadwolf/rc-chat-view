import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './messages/MessageList';
import UserInput from './UserInput';
import Header from './Header';
import '../styles/chatWindow.css';
import { messageArrayType } from '../types';

const ChatWindow = ({
    userId,
    messageList,
    onUserInputSubmit,
    isOpen,
    agentProfile: { teamName, imageUrl },
    onClose,
    showEmoji,
    showUsername,
    avatarTopPosition,
}) => (
    <div className={`sc-chat-window ${isOpen ? 'opened' : 'closed'}`}>
        <Header teamName={teamName} imageUrl={imageUrl} onClose={onClose} />
        <MessageList
            messages={messageList}
            imageUrl={imageUrl}
            userId={userId}
            showUsername={showUsername}
            avatarTopPosition={avatarTopPosition}
        />
        <UserInput showEmoji={showEmoji} onSubmit={onUserInputSubmit} />
    </div>
);

ChatWindow.propTypes = {
    userId: PropTypes.string.isRequired,
    messageList: messageArrayType.isRequired,

    onClose: PropTypes.func.isRequired,

    onUserInputSubmit: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,

    agentProfile: PropTypes.shape({
        teamName: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,

    showEmoji: PropTypes.bool.isRequired,
    showUsername: PropTypes.bool.isRequired,
    avatarTopPosition: PropTypes.bool.isRequired,
};

export default ChatWindow;
