import React from 'react';
import { withStyles } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

// const styles = theme => ({
//     button: {
//         margin: theme.spacing.unit,
//         minWidth: '10px',
//     },
// });

const ToolbarButton = props => {
    const { classes, buttonProps, onClick, readOnly, name } = props;
    return (
        <Button variant='contained' color='default' className={classes.button} disabled={readOnly} onClick={onClick} {...buttonProps}>
            <Icon>{name}</Icon>
        </Button>
    )
}

// export default withStyles(styles)(ToolbarButton)
export default ToolbarButton