import React from 'react';

import Typography from '@material-ui/core/Typography';

const SecondaryInformation = () => (
    <p className="demo-test-area--info main">
        <Typography variant="body1" color="textPrimary" paragraph>
            rc-chat-view is a chat window that allows you to build and add custom live chat to your
            sites. <br />
            It includes only the react chat widget. There is no backend, and no communication system
            baked in.
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
            For instructions on how to use rc-chat-view click{' '}
            <a href="https://github.com/Christopher-Caroni/rc-chat-view#readme">here</a>.
        </Typography>
    </p>
);

export default SecondaryInformation;
