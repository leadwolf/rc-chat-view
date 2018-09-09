import React from 'react';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        borderRadius: 0,
    },
};

const UserButton = ({ text, classes, ...rest }) => (
    <Button className={classes.root} {...rest}>
        {text}
    </Button>
);

export default withStyles(styles)(UserButton);
