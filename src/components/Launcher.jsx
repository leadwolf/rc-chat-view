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
                    messageList={messageList}
                    onUserInputSubmit={onMessageWasSent}
                    agentProfile={agentProfile}
                    isOpen={isOpen}
                    onClose={this.handleClick}
                    showEmoji={showEmoji}
                    userId={userId}
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
    onMessageWasSent: PropTypes.func.isRequired,
    newMessagesCount: PropTypes.number,
    isOpen: PropTypes.bool,
    handleClick: PropTypes.func,
    messageList: messageArrayType,
    showEmoji: PropTypes.bool,
};

Launcher.defaultProps = {
    isOpen: null,
    handleClick: undefined,

    messageList: [],

    newMessagesCount: 0,
    showEmoji: true,
};

export default Launcher;
