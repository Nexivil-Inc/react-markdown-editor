import React from 'react';
import MarkdownIt from 'markdown-it'
import MarkdownItKatex from 'markdown-it-katex'
import DOMPurify from 'dompurify';
import TextField from '@material-ui/core/TextField';
import Resizable from 're-resizable';
import { withStyles } from '@material-ui/core/styles';

const SouthEastArrow = () => (
    <svg width='100px' height='10px' viewBox='0 0 100 10' xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="4.5" x2="20" y2="4.5" stroke="black" stroke-linecap="round" stroke-width="2" />
    </svg>
  )

const BottomRightHandle = (props) => (
    <div
    style={{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ddd',
        height: '10px',
        width: '100%',
        padding: 0,
      }}>
        <SouthEastArrow/>
    </div>
  )

  const styles = {
      input1: {
          height:'100%',
          width: '100vw'
      },
      resize:{
        border: 'solid 1px #ddd',
        background: '#f0f0f0',
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
        console.log(result)
        this.setState({markdown: result})
    }

    render() {
        return(
            <div>
                <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(this.state.markdown)}}></div> 
                <Resizable 
                    style={this.props.classes.resize}
                    enable={{ top:false, right:false, bottom:true, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
                    handleComponent={{
                        bottom: BottomRightHandle,
                      }}>
                    {/* <textarea style={{height:'calc(100% - 10px)',width:'100%'}}  onChange={this.handleChange}/> */}
                    <TextField Component='textarea' multiline rows='4' label="Test" InputProps={{classes:{ input: this.props.classes.input1}}} onChange={this.handleChange} variant="outlined" /> 
                </Resizable>
                {/* <input style={{width:'400px' , height:'400px'}} onChange={this.handleChange}></input> */}

            </div>
            

            
        )
    }
}

export default withStyles(styles)(MarkdownTest);

