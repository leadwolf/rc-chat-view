import React, { Component } from 'react';
import '../assets/styles/test-area.css';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
                    <Typography variant="display3" color="inherit">
                        rc-chat-ui demo
                    </Typography>

                    <Typography variant="title" color="textSecondary">
                        made by Christopher Caroni
                    </Typography>

                    <Typography
                        variant="body2"
                        color="textSecondary"
                        className="demo-test-area--info top"
                    >
                        Please go see the original source at{' '}
                        <a href="https://github.com/kingofthestack/react-chat-window">
                            kingofthestack/react-chat-window
                        </a>
                    </Typography>
                </div>
                <form
                    className="demo-test-area"
                    onSubmit={e => {
                        e.preventDefault();
                        this.sendMessage();
                    }}
                >
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        className="demo-test-area--preamble"
                    >
                        Test the chat window by sending a message:
                    </Typography>
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
                    <div>
                        <Button
                            variant={user === 'chris' ? 'contained' : 'outlined'}
                            onClick={() => setUser('chris')}
                            color="primary"
                        >
                            Send as Chris
                        </Button>
                        <Button
                            variant={user === 'james' ? 'contained' : 'outlined'}
                            onClick={() => setUser('james')}
                            color="primary"
                        >
                            Send as James
                        </Button>
                    </div>
                    <Button className="demo-test-area--button" variant="contained" color="primary">
                        Send Message!{' '}
                    </Button>
                </form>
                <p className="demo-test-area--info main">
                    <Typography variant="body1" color="textPrimary" paragraph>
                        rc-chat-view is a chat window that allows you to build and add custom live
                        chat to your sites. <br />
                        It includes only the react chat widget. There is no backend, and no
                        communication system baked in.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                        For instructions on how to use rc-chat-view click{' '}
                        <a href="https://github.com/Christopher-Caroni/rc-chat-view#readme">here</a>
                        .
                    </Typography>
                </p>
            </div>
        );
    }
}

export default TestArea;
