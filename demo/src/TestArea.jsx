import React, { Component } from 'react';
import '../assets/styles/test-area.css';

class TestArea extends Component {
    render() {
        return (
            <div className="demo-test-area--wrapper">
                <div className="demo-test-area--title">
                    <div className="demo-test-area--title-main">
                        react-chat-window demo
                    </div>
                    <div className="demo-test-area--title-sub">
                        made by Christopher Caroni
                    </div>
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
                        this.props.onMessage(this.textArea.value);
                        this.textArea.value = '';
                    }}
                >
                    <div className="demo-test-area--preamble">
                        Test the chat window by sending a message:
                    </div>
                    <textarea
                        ref={e => {
                            this.textArea = e;
                        }}
                        className="demo-test-area--text"
                        placeholder="Write a test message...."
                    />
                    <button className="demo-test-area--button">
                        {' '}
                        Send Message!{' '}
                    </button>
                </form>
                <p className="demo-test-area--info">
                    react-chat-view is a chat window that allows you to build
                    and add custom live chat to your sites. It includes only the
                    react chat widget. There is no backend, and no communication
                    system baked in.
                    <br />
                    <br />
                    For instructions on how to use react-chat-window click{' '}
                    <a href="https://github.com/Christopher-Caroni/react-chat-view">
                        here
                    </a>
                    .
                </p>
            </div>
        );
    }
}

export default TestArea;
