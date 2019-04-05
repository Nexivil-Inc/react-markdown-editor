import React from 'react';
import MarkdownIt from 'markdown-it'
import MarkdownItKatex from 'markdown-it-katex'
import DOMPurify from 'dompurify';
import '../css/MarkDown.css';

const renderMarkdown = (text) => {
    var md = MarkdownIt();
    md.use(MarkdownItKatex);
    return md.render(text? text: "")
}

const PreviewArea = props => {
    return (
        <div className="markdown-body" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(renderMarkdown(props.text))}}></div> 
    )
}

export default PreviewArea;