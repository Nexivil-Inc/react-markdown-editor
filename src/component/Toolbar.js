import React from 'react';
import { withStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {getDefaultCommands} from '../commands';
import ToolbarDropDown from './ToolbarComponent/ToolbarDropDown';
import ToolbarButton from './ToolbarComponent/ToolbarButton';


const styles = theme => ({
    toolbar: {
        width: '100%',
        minHeight: 10,
        background: '#DFE2E5',
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('xs')]: {
            position: 'fixed',
            bottom: 0,
            zIndex: 1001,
            left: 0,
        },
    },
    button: {
        /* margin: theme.spacing.unit, */
        marginTop: theme.spacing.unit,
        minWidth: '10px',
    },
    toolGroup: {
        margin: '0px 10px 0px 0px',
    }
});
class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: 0,
        }
        this.commands = getDefaultCommands();
    }


    tabChangeHandler = (e,value) => {
        if (value !==this.state.value) {
            this.setState({value})
            this.props.tabChangeHandler(value)
        }
    }

    render() {
        const {classes, onCommand, readOnly} = this.props;
        return (
            <div className={this.props.classes.toolbar}>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler} indicatorColor="primary" textColor="primary">
                    <Tab label='Edit'/>
                    <Tab label='Preview'/>
                </Tabs>
                {this.commands.map((commandGroup, i) => (
                    <div key={i} className={classes.toolGroup} >
                    {commandGroup.commands.map((c,j) => {
                        if (c.children) {
                            return (
                                <ToolbarDropDown
                                    classes={classes}
                                    key={j}
                                    buttonProps={c.buttonProps}
                                    name={c.name}
                                    commands={c.children}
                                    onCommand={(cmd) => onCommand(cmd)}
                                    readOnly={readOnly}/>
                            );
                        }
                        return (
                            <ToolbarButton
                                classes={classes}
                                key={j}
                                name={c.name}
                                buttonProps={c.buttonProps}
                                onClick={()=>onCommand(c)}
                                readOnly={readOnly} />
                        )
                    })}
                    </div>
                ))}
            </div>
        )
    }
}

export default withStyles(styles)(Toolbar)