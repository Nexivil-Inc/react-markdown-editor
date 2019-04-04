import React from 'react';
import MarkdownIt from 'markdown-it'
import MarkdownItKatex from 'markdown-it-katex'
import DOMPurify from 'dompurify';
import TextField from '@material-ui/core/TextField';
import Resizable from 're-resizable';
import { withStyles } from '@material-ui/core/styles';

const SouthEastArrow = () => (
    <svg width='100px' height='10px' viewBox='0 0 100 10' xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="5" x2="20" y2="5" stroke="#A8ABAD" stroke-linecap="round" stroke-width="2" />
    </svg>
  )

const BottomRightHandle = () => (
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



function TextArea(props) {
        return(
            <div>
                <Resizable 
                    className={props.classes.resize}
                    defaultSize={{
                        width: '100%',
                        height: 300,
                      }}
                    minHeight='300'
                    maxHeight='800'
                    enable={{ top:false, right:false, bottom:true, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
                    handleComponent={{
                        bottom: BottomRightHandle,
                      }}>
                    <TextField Component='textarea' multiline rows='4000' label="Test" InputProps={{classes:{ input: props.classes.input1}}} onChange={props.handleChange} variant="outlined" fullWidth='true' /> 
                </Resizable>
            </div>
        )
}

export default withStyles(styles)(TextArea);

