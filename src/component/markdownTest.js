import React from 'react';
import MarkdownIt from 'markdown-it'
import MarkdownItKatex from 'markdown-it-katex'
import DOMPurify from 'dompurify';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextArea from './TextArea';
import SimpleTable from './Table';
import Toolbar from './Toolbar';
import '../css/table.css';


const styles = theme => ({
    root: {
        margin: 10,
        paddingTop: 0,
        paddingBottom: 4,
    },
});

class MarkdownTest extends React.Component {

    constructor(props){
        super(props);
        this.md = MarkdownIt();
        //this.mk = MarkdownItKatex();
        this.md.use(MarkdownItKatex);
        // double backslash is required for javascript strings, but not html input
        var result = this.md.render('# Math Rulez! $\\text{\(\frac a b\)}$')
        this.result = result
        console.log(this.result)
        this.state={markdown: result}
    }

    handleChange = (event) => {
        this.md.use(MarkdownItKatex);
        var result = this.md.render(event.target.value)
        //var result = this.md.render('$\\sqrt{3x-1}+(1+x)^2$')
        // console.log(result)
        this.setState({markdown: result})
    }

    render() {
        return(
            <>
                <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(this.state.markdown)}} id="jss-insertion-point"></div> 
                <Paper className={this.props.classes.root}>

                    {/* <SimpleTable/> */}
                    <Toolbar/>
                    <TextArea handleChange={this.handleChange}/>
                </Paper>
            </>
        )
    }
}

export default withStyles(styles)(MarkdownTest);

