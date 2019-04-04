import React from 'react';
import MarkdownIt from 'markdown-it'
import MarkdownItKatex from 'markdown-it-katex'
import DOMPurify from 'dompurify';


class Test extends React.Component {


    render(){
        const {editorRef} = this.props
        return(
            <textarea onChange={editorRef}>fawefawef</textarea>
        )
    }
}

export default Test