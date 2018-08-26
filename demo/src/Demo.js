import React, { Component } from 'react';
import { Launcher } from '../../src';
import messageHistory from '../data/messageHistory';
import TestArea from './TestArea';
import Header from './Header';
import Footer from './Footer';
import monsterImgUrl from './../assets/monster.png';
import './../assets/styles/base.css';

export default class Demo extends Component {
    constructor() {
        super();
        this.state = {
            messageList: messageHistory,
            newMessagesCount: 0,
            isOpen: false,
        };
    }

    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message],
        });
    }

    _sendMessage(text) {
        if (text.length > 0) {
            const newMessagesCount = this.state.isOpen
                ? this.state.newMessagesCount
                : this.state.newMessagesCount + 1;
            this.setState({
                newMessagesCount: newMessagesCount,
                messageList: [
                    ...this.state.messageList,
                    {
                        author: 'them',
                        type: 'text',
                        data: { text },
                    },
                ],
            });
        }
    }

    _handleClick() {
        this.setState({
            isOpen: !this.state.isOpen,
            newMessagesCount: 0,
        });
    }

    render() {
        return (
            <div>
                <Header />
                <TestArea onMessage={this._sendMessage.bind(this)} />
                <Launcher
                    agentProfile={{
                        teamName: 'react-chat-view',
                        imageUrl:
                            'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={this.state.messageList}
                    newMessagesCount={this.state.newMessagesCount}
                    handleClick={this._handleClick.bind(this)}
                    isOpen={this.state.isOpen}
                    showEmoji
                />
                <img className="demo-monster-img" src={monsterImgUrl} />
                <Footer />
            </div>
        );
    }
}
