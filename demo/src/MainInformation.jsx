import React from 'react';

import Typography from '@material-ui/core/Typography';

const MainInformation = () => (
    <div className="demo-test-area--title">
        <Typography variant="display3" color="inherit">
            rc-chat-ui demo
        </Typography>

        <Typography variant="title" color="textSecondary">
            made by Christopher Caroni
        </Typography>

        <Typography variant="body2" color="textSecondary" className="demo-test-area--info top">
            Please go see the original source at{' '}
            <a href="https://github.com/kingofthestack/react-chat-window">
                kingofthestack/react-chat-window
            </a>
        </Typography>
    </div>
);

export default MainInformation;
