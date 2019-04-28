import React from 'react';
import { withStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {getDefaultCommands} from '../commands';
import ToolbarDropDown from './ToolbarComponent/ToolbarDropDown';
import ToolbarButton from './ToolbarComponent/ToolbarButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const styles = theme => ({
    /* toolbar: {
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
    }, */
    button: {
        /* margin: theme.spacing.unit, */
        marginTop: theme.spacing.unit,
        minWidth: '10px',
    },
    toolGroup: {
        margin: '0px 10px 0px 0px',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        overflow: 'hidden',
        backgroundColor: '#DFE2E5',
        [theme.breakpoints.down('xs')]: {
            position: 'fixed',
            bottom: 0,
            zIndex: 1001,
            left: 0,
        },
      },
      gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
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
            <div className={classes.root}>
                <GridList className={classes.gridList} component='div' cols={0} cellHeight='auto'>
                    <GridListTile component='div' >
                        <Tabs value={this.state.value} onChange={this.tabChangeHandler} indicatorColor="primary" textColor="primary">
                            <Tab label='Edit'/>
                            <Tab label='Preview'/>
                        </Tabs>
                    </GridListTile>
                    {this.commands.map((commandGroup, i) => (
                        <GridListTile key={i} component='div' >
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
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

export default withStyles(styles)(Toolbar)