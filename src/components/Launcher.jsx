import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import launcherIcon from '../assets/logo-no-bg.svg';
import launcherIconActive from '../assets/close-icon.png';
import { messageArrayType } from '../types';

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
            agentProfile,
            showEmoji,
            showUsername,
            showAvatar,
            avatarTopPosition,
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
                    agentProfile={agentProfile}
                    showEmoji={showEmoji}
                    showUsername={showUsername}
                    showAvatar={showAvatar}
                    avatarTopPosition={avatarTopPosition}
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
    userId: PropTypes.string.isRequired,

    isOpen: PropTypes.bool, // leave null to handle state internally
    handleClick: PropTypes.func, // fired on button click and header close

    messageList: messageArrayType,
    onMessageWasSent: PropTypes.func.isRequired,
    newMessagesCount: PropTypes.number,

    showEmoji: PropTypes.bool,
    showUsername: PropTypes.bool,
    showAvatar: PropTypes.bool,
    avatarTopPosition: PropTypes.bool,
};

Launcher.defaultProps = {
    isOpen: null,
    handleClick: undefined,

    messageList: [],
    newMessagesCount: 0,

    showEmoji: true,
    showUsername: true,
    showAvatar: true,
    avatarTopPosition: false,
};

export default Launcher;
