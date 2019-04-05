import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextArea from './TextArea';
import PreviewArea from './PreviewArea';
import Toolbar from './Toolbar';
// import '../css/table.css';
import {TextAreaCommandExcuteHelper} from '../utils/commandExcuteHelper'

const styles = theme => ({
    root: {
        margin: 10,
        paddingTop: 0,
        paddingBottom: 4,
    },
});

class MarkdownTest extends React.PureComponent {

    constructor(props){
        super(props);

        this.state={
            tabIndex: 0,
            TempText: null,
            readOnly: false,
        }
    }

    saveTempText = (text) => {
        this.setState({TempText: text});
    }

    setTextAreaRef = (element) => {
        this.textAreaRef = element;
        this.commandContainer = new TextAreaCommandExcuteHelper(this.textAreaRef);
    };

    commandHandler = (command) => {
        this.commandContainer.excuteCommand(command)
    }

    tabChangeHandler = (value) => {
        this.setState({
            tabIndex:value,
            readOnly: !this.state.readOnly,
        });
    }

    render() {
        const {tabIndex, readOnly} = this.state;
        return(
            <>
                <Paper className={this.props.classes.root}>
                    {/* <SimpleTable/> */}
                    <Toolbar tabChangeHandler={this.tabChangeHandler} onCommand={this.commandHandler} readOnly={readOnly} />
                    {tabIndex===0? 
                        <TextArea
                            editorRef={this.setTextAreaRef}
                            saveTempText={this.saveTempText}
                            value={this.state.TempText} />
                        :
                        <PreviewArea text={this.state.TempText}/>}
                </Paper>
            </>
        )
    }
}

export default withStyles(styles)(MarkdownTest);

