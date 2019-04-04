import React from 'react';
import { withStyles, Fade, Paper } from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import ToolbarButton from './ToolbarButton';
import Fade from '@material-ui/core/Fade';

class ToolbarDropDown extends React.Component {
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

        const items = commands.map((command, i) => (
            <ToolbarButton
                key={`${name}-Items${i}`}
                name={command.name}
                buttonProps={buttonProps}
                onClick={(e) => this.commandHandler(e,command)}
                disabled={readOnly} />
        ))

        return (
            <>
                <Button aria-describedby={id} variant='contained' color='default' className={classes.Button} disabled={readOnly} onClick={} {...buttonProps}>
                    <Icon>{name}</Icon>
                </Button>
                <Popper id={id} open={IsOpen} anchorEl={anchorEl} transition>
                    {({transitionProps}) => (
                        <Fade {...transitionProps} timeout={350}>
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