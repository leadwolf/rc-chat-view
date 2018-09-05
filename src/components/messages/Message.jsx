import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import moment from 'moment';

import AnimateHeight from 'react-animate-height';

import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';

import chatIconUrl from '../../assets/chat-icon.svg';
import '../../styles/messages/message.css';

import { MESSAGE_CONTENT_TYPE_TEXT, MESSAGE_CONTENT_TYPE_EMOJI, messageType } from '../../types';

class Message extends Component {
    state = {
        canShowDate: this.props.shouldShowDate,
        toggleState: this.props.shouldShowDate,
        prevPropShouldShowDate: this.props.shouldShowDate,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const { shouldShowDate } = nextProps;
        const { canShowDate, prevPropShouldShowDate, toggleState } = prevState;
        console.log(shouldShowDate, prevPropShouldShowDate, canShowDate, toggleState);

        if (!toggleState) {
            return { canShowDate: false, prevPropShouldShowDate };
        }

        if ((prevPropShouldShowDate && shouldShowDate) || toggleState) {
            return { canShowDate: true, prevPropShouldShowDate };
        }
        return { canShowDate: false, prevPropShouldShowDate };
    }

    _renderMessageOfType = (type, message) => {
        switch (type) {
            default:
            case MESSAGE_CONTENT_TYPE_TEXT:
                return <TextMessage {...message} onClick={this.handleMessageClick} />;
            case MESSAGE_CONTENT_TYPE_EMOJI:
                return <EmojiMessage {...message} onClick={this.handleMessageClick} />;
        }
    };

    handleMessageClick = e => {
        e.preventDefault();
        this.setState(({ canShowDate }) => ({
            toggleState: !canShowDate,
        }));
    };

    render() {
        const {
            userId,
            message: { senderId, type, username, avatar, date },
            message,
            showAvatar,
            canShowAvatar,
            showUsername,
            showDate,
        } = this.props;
        const { canShowDate } = this.state;

        const messageIsMine = senderId === userId;

        return (
            <div className="sc-message">
                <div className={`sc-message--content ${messageIsMine ? 'sent' : 'received'}`}>
                    {!messageIsMine &&
                        showAvatar && (
                            <div className={`sc-message--avatar ${canShowAvatar ? '' : 'hidden'}`}>
                                <Avatar {...avatar} size="30px" round />
                            </div>
                        )}
                    <div className="sc-message--content---body">
                        {!messageIsMine &&
                            showUsername && (
                                <span className="sc-message--username">{username}</span>
                            )}
                        {this._renderMessageOfType(type, message)}
                        {showDate && (
                            <AnimateHeight
                                duration={500}
                                height={canShowDate ? 'auto' : '0'}
                                className="sc-message--date"
                            >
                                {moment(date).format('LTS')}
                            </AnimateHeight>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

Message.propTypes = {
    userId: PropTypes.string.isRequired,
    message: messageType.isRequired,

    showAvatar: PropTypes.bool.isRequired, // if avatar should be displayed or collapsed
    canShowAvatar: PropTypes.bool.isRequired, // if the avatar should be displayed or whitespace
    showUsername: PropTypes.bool.isRequired,
    showDate: PropTypes.bool.isRequired,
    shouldShowDate: PropTypes.bool.isRequired,
};

export default Message;
