import React from 'react';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

const SouthEastArrow = () => (
    <svg width='100px' height='10px' viewBox='0 0 100 10' xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="5" x2="20" y2="5" stroke="#A8ABAD" strokeLinecap="round" strokeWidth="2" />
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

const styles = theme => ({
    input1: {
      minHeight: '100px',
      maxHeight: '100%',
      //height: '100%',
      [theme.breakpoints.down('xs')]: {
        maxHeight: '100%'
    },
    },
    root: {
      height: '100vh',
    },
    
  });


class TextAreaWrapper extends React.PureComponent {
  render() {
    const {classes} = this.props;
    return (
      
        <TextArea {...this.props}/>
      
    )
  }
}

class TextArea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      TempText: props.value,
    };
  }

  componentWillUpdate(prev1,prev2) {
    return false;
  }
  componentWillUnmount() {
    // console.log(this.TempText);
    this.props.saveTempText(this.state.TempText);
  }

  onChangeHandler = (e) => {
    // this.setState({TempText:e.target.value}); 
    this.setState({TempText:e.target.value});
    // console.log(this.TempText);
  }

  render() {
    const {value, editorRef, classes} = this.props;
    return (
        <TextField 
          InputProps={{classes:{ input: classes.input1, root: classes.root}}}
          variant="outlined"
          inputRef={editorRef} 
          defaultValue={value}
          onChange={this.onChangeHandler}
          multiline
          rows='100'
          fullWidth={true}
          placeholder='Test'
          autoFocus={true} /> 
    )
  }
}

export default withStyles(styles)(TextAreaWrapper);

