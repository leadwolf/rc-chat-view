import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from '../assets/logo-no-bg.svg';
import launcherIconActive from '../assets/close-icon.png';
import { messageArrayType, headerConfigType } from '../types';

import '../styles/launcher.css';

class Launcher extends Component {
    state = {
        isOpen: false,
    };

    handleClick = () => {
        const { handleClick: propHandleClick } = this.props;

        if (propHandleClick) {
            propHandleClick();
        } else {
            this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
        }
    };

    render() {
        const { isOpen: stateIsOpen } = this.state;
        const {
            userId,
            isOpen: propIsOpen,
            newMessagesCount,
            messageList,
            onMessageWasSent,
            headerConfig,
            showEmoji,
            showUsername,
            showAvatar,
            avatarTopPosition,
            showDate,
            minDateDiff,
            isTyping,
        } = this.props;

        const isOpen = propIsOpen !== null ? propIsOpen : stateIsOpen;

        return (
            <div>
                <div />
                <div className={`sc-launcher ${isOpen ? 'opened' : ''}`} onClick={this.handleClick}>
                    <MessageCount count={newMessagesCount} isOpen={isOpen} />

                    {/* css manages state via class */}
                    <img className="sc-open-icon" src={launcherIconActive} alt="open chat" />
                    <img className="sc-closed-icon" src={launcherIcon} alt="close chat" />
                </div>
                <ChatWindow
                    userId={userId}
                    isOpen={isOpen}
                    onClose={this.handleClick}
                    messageList={messageList}
                    onUserInputSubmit={onMessageWasSent}
                    headerConfig={headerConfig}
                    showEmoji={showEmoji}
                    showUsername={showUsername}
                    showAvatar={showAvatar}
                    avatarTopPosition={avatarTopPosition}
                    showDate={showDate}
                    minDateDiff={minDateDiff}
                    isTyping={isTyping}
                />
            </div>
        );
    }
}

const MessageCount = ({ count, isOpen }) => {
    if (!count || isOpen) return null;

    return <div className="sc-new-messsages-count">{count}</div>;
};

Launcher.propTypes = {
    userId: PropTypes.string.isRequired, // the user's id. Used to determine whether a message is his or not (display right/left)

    isOpen: PropTypes.bool, // leave null or dont set to handle state internally
    handleClick: PropTypes.func, // fired on button click and header close, use this to determine your own `isOpen` state
    headerConfig: headerConfigType,

    messageList: messageArrayType, // the array of messages to display
    onMessageWasSent: PropTypes.func.isRequired, // Called when the user submits text or an emoji. Passes a single object parameter with keys `text` and `text/emoji`
    newMessagesCount: PropTypes.number, // the number for the unread messages counter

    showEmoji: PropTypes.bool, // show the emoji picker, does not change markdown emoji parsing
    showUsername: PropTypes.bool, // globally enable/disable usernames
    showAvatar: PropTypes.bool, // globally enable/disable avatars
    avatarTopPosition: PropTypes.bool, // true for top, false for bottom
    showDate: PropTypes.bool, // globally enable/disable dates
    minDateDiff: PropTypes.number, // the min amount of time betweeen messages to automatically display the date (in seconds)
    isTyping: PropTypes.bool, // show typing indicator
};

Launcher.defaultProps = {
    isOpen: null,
    handleClick: undefined,
    headerConfig: {
        imageUrl: '',
        headerName: '',
        onHeaderNameClick: () => undefined,
    },

    messageList: [],
    newMessagesCount: 0,

    showEmoji: true,
    showUsername: true,
    showAvatar: true,
    avatarTopPosition: false,
    showDate: true,
    minDateDiff: 60 * 5,
    isTyping: false,
};

export default Launcher;
