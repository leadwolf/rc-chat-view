import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment';

import { Launcher } from '../../src';
import messageHistory from '../data/messageHistory';
import TestArea from './TestArea';
import Header from './Header';
import Footer from './Footer';

import monsterImgUrl from '../assets/monster.png';
import '../assets/styles/base.css';
import { MESSAGE_CONTENT_TYPE_TEXT, MESSAGE_CONTENT_TYPE_EMOJI } from '../../src/types';

class Demo extends Component {
    state = {
        messageList: messageHistory,
        newMessagesCount: 0,
        isOpen: false,
    };

    appendMessage = message => {
        if (
            (message.type === MESSAGE_CONTENT_TYPE_TEXT && message.text.length > 0) ||
            (message.type === MESSAGE_CONTENT_TYPE_EMOJI && message.emoji)
        ) {
            this.setState(({ isOpen, newMessagesCount, messageList }) => ({
                newMessagesCount: isOpen ? newMessagesCount : newMessagesCount + 1,
                messageList: [
                    ...messageList,
                    {
                        ...message,
                        id: `message_${messageList.length}`,
                        date: moment(),
                    },
                ],
            }));
        }
    };

    _sendMessage = message => {
        this.appendMessage({
            ...message,
            senderId: 'dummy_sender_1',
            username: 'sam',
            avatar: { name: 'sam' },
        });
    };

    fakeReceiveMessage = text => {
        this.appendMessage({
            type: 'text',
            text,
            senderId: 'dummy_sender_2',
            username: 'chris',
            avatar: { name: 'chris' },
        });
    };

    _handleClick = () => {
        this.setState(({ isOpen }) => ({
            isOpen: !isOpen,
            newMessagesCount: 0,
        }));
    };

    render() {
        const { messageList, newMessagesCount, isOpen } = this.state;

        return (
            <div>
                <Header />
                <TestArea onMessage={this.fakeReceiveMessage} />
                <Launcher
                    agentProfile={{
                        teamName: 'react-chat-view',
                        imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
                    }}
                    onMessageWasSent={this._sendMessage}
                    messageList={messageList}
                    newMessagesCount={newMessagesCount}
                    handleClick={this._handleClick}
                    isOpen={isOpen}
                    showEmoji
                    userId="dummy_sender_1"
                />
                <img className="demo-monster-img" src={monsterImgUrl} alt="monster" />
                <Footer />
            </div>
        );
    }
}

export default hot(module)(Demo);
