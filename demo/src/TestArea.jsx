import React, { Component } from 'react';
import '../assets/styles/test-area.css';

class TestArea extends Component {
    handleKey = event => {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage();
        }
    };

    sendMessage = () => {
        const { value } = this.textArea;
        const { onMessage } = this.props;
        if (value) {
            onMessage(value);
            this.textArea.value = '';
        }
    };

    render() {
        const { user, setUser, setIsTyping } = this.props;

        return (
            <div className="demo-test-area--wrapper">
                <div className="demo-test-area--title">
                    <div className="demo-test-area--title-main">react-chat-view demo</div>
                    <div className="demo-test-area--title-sub">made by Christopher Caroni</div>
                    <div>
                        Forked from{' '}
                        <a href="https://github.com/kingofthestack/react-chat-window">
                            https://github.com/kingofthestack/react-chat-window
                        </a>
                    </div>
                </div>
                <form
                    className="demo-test-area"
                    onSubmit={e => {
                        e.preventDefault();
                        this.sendMessage();
                    }}
                >
                    <div className="demo-test-area--preamble">
                        Test the chat window by sending a message:
                    </div>
                    <textarea
                        ref={e => {
                            this.textArea = e;
                        }}
                        onKeyDown={this.handleKey}
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                        className="demo-test-area--text"
                        placeholder="Write a test message...."
                    />
                    <div className="demo-test-area-user-selection">
                        <button
                            className={`demo-test-area--user-button ${
                                user === 'chris' ? 'enabled' : ''
                            }`}
                            onClick={() => setUser('chris')}
                            type="button"
                        >
                            {' '}
                            Send as Chris{' '}
                        </button>
                        <button
                            className={`demo-test-area--user-button ${
                                user === 'james' ? 'enabled' : ''
                            }`}
                            onClick={() => setUser('james')}
                            type="button"
                        >
                            {' '}
                            Send as James{' '}
                        </button>
                    </div>
                    <button className="demo-test-area--button"> Send Message! </button>
                </form>
                <p className="demo-test-area--info">
                    react-chat-view is a chat window that allows you to build and add custom live
                    chat to your sites. It includes only the react chat widget. There is no backend,
                    and no communication system baked in.
                    <br />
                    <br />
                    For instructions on how to use react-chat-window click{' '}
                    <a href="https://github.com/Christopher-Caroni/react-chat-view">here</a>.
                </p>
            </div>
        );
    }
}

export default TestArea;
