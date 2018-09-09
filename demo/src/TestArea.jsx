import React, { Component } from 'react';
import '../assets/styles/test-area.css';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MainInformation from './MainInformation';
import SecondaryInformation from './SecondaryInformation';
import UserButton from './UserButton';

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
                <MainInformation />
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
                    <div className="demo-test-area--user-selection">
                        <UserButton
                            variant={user === 'chris' ? 'contained' : 'outlined'}
                            onClick={() => setUser('chris')}
                            color="primary"
                            fullWidth
                            text="Send as Chris"
                        />
                        <UserButton
                            variant={user === 'james' ? 'contained' : 'outlined'}
                            onClick={() => setUser('james')}
                            color="primary"
                            fullWidth
                            text="Send as James"
                        />
                    </div>
                    <Button className="demo-test-area--button" variant="contained" color="primary">
                        Send Message!{' '}
                    </Button>
                </form>
                <SecondaryInformation />
            </div>
        );
    }
}

export default TestArea;
