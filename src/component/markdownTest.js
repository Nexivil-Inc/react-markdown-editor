import React from 'react';
import MarkdownIt from 'markdown-it'
import MarkdownItKatex from 'markdown-it-katex'
import DOMPurify from 'dompurify';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import TextArea from './TextArea';
import SimpleTable from './Table';
import '../css/table.css';



const SouthEastArrow = () => (
    <svg width='100px' height='10px' viewBox='0 0 100 10' xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="5" x2="20" y2="5" stroke="#A8ABAD" stroke-linecap="round" stroke-width="2" />
    </svg>
  )

const BottomRightHandle = (props) => (
    <div
    style={{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#DFE2E5',
        height: '10px',
        width: '100%',
        padding: 0,
      }}>
        <SouthEastArrow/>
    </div>
  )

  const styles = {
    input1: {
        height: '100%',
    },
    resize:{
        display: 'flex',
        position: 'relative',
        border: 'solid 1px #ddd',
        background: '#FFFFFF',
        padding:10
    }
  };




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


    componentDidMount() {
       
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

                {/* <SimpleTable/> */}
                <TextArea handleChange={this.handleChange}/>
            </>
        )
    }
}

export default MarkdownTest;

