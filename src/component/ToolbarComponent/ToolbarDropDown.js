import React from 'react';
import { Paper } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import ToolbarButton from './ToolbarButton';
import Fade from '@material-ui/core/Fade';

export class ToolbarDropDown extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            IsOpen: false,
            anchorEl: null,
        };
    }

    clickHandler = e => {
        const { currentTarget }=e;
        this.setState(state => ({
            anchorEl: currentTarget,
            IsOpen: !state.IsOpen
        }))
    }

    commandHandler = (e, command) =>{
        const {onCommand} = this.props
        onCommand(command)
        this.clickHandler(e)
    }

    render() {
        const { classes, name, buttonProps, readOnly, commands } = this.props
        const { IsOpen, anchorEl } = this.state
        const id = IsOpen? name:null
        const TestSvgIcon2 = require(`mdi-material-ui/${name}`).default;
        const items = commands.map((command, i) => (
            <ToolbarButton
                classes={classes}
                key={`${name}-Items${i}`}
                name={command.name}
                buttonProps={buttonProps}
                onClick={(e) => this.commandHandler(e,command)}
                disabled={readOnly} />
        ))

        return (
            <>
                <Button aria-describedby={id} color='default' className={classes.button} disabled={readOnly} onClick={this.clickHandler} {...buttonProps}>
                    <TestSvgIcon2 />
                </Button>
                <Popper id={id} open={IsOpen} anchorEl={anchorEl} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                {items}
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </>
        )
    }
}

export default ToolbarDropDown;