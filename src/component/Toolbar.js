import React from 'react';
import { withStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
    toolbar: {
        width: '100%',
        minHeight: 10,
        background: '#DFE2E5',
    },
    button: {
        margin: theme.spacing.unit,
        minWidth: '10px',
    },
});
class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: 1,
        }
    }

    tabChangeHandler = (e,value) => {
        this.setState({value})
    }

    render() {
        return (
            <div className={this.props.classes.toolbar}>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler} indicatorColor="primary" textColor="primary">
                    <Tab label='Edit'/>
                    <Tab label='Preview'/>
                </Tabs>
            </div>
        )
    }
}

export default withStyles(styles)(Toolbar)