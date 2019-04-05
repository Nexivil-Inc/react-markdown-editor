import React from 'react';
import { withStyles } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import TestSvgIcon from 'mdi-material-ui/FormatBold';

// const styles = theme => ({
//     button: {
//         margin: theme.spacing.unit,
//         minWidth: '10px',
//     },
// });

export function ToolbarButton(props) {
    const { classes, buttonProps, onClick, readOnly, name } = props;
    // const TestSvgIcon2 = TestSvgIcon;
    const TestSvgIcon2 = require(`mdi-material-ui/${name}`).default;
    return (
        <Button color='default' className={classes.button} disabled={readOnly} onClick={onClick} {...buttonProps}>
            {/* <SvgIcon><path d={TestSvgIcon}/></SvgIcon> */}
            <TestSvgIcon2 />
        </Button>
    );
}

// export default withStyles(styles)(ToolbarButton)
export default ToolbarButton;