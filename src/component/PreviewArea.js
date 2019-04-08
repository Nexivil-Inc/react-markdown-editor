import React from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownItKatex from 'markdown-it-katex';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItToc from '@liradb2000/markdown-it-toc-done-right';
import DOMPurify from 'dompurify';
import uslug from 'uslug';
import MarkdownItMermaid from '@liradb2000/markdown-it-mermaid';
import '../css/MarkDown.css';

const uslugify = s => uslug(s);

const renderMarkdown = (text) => {
    var md = MarkdownIt({
        html: false,
        xhtml: true,
        linkify: true,
        typographer: true
    });
    md.use(MarkdownItKatex).use(MarkdownItAnchor,{
        level: [1, 2, 3],
        slugify: uslugify,
        permalink: true,
        // renderPermalink: (slug, opts, state, permalink) => {},
        permalinkClass: 'material-icons anchor',
        permalinkSymbol: 'link',
        permalinkBefore: false,
    }).use(MarkdownItToc, {
        level: [1,2],
        slugify: uslugify,
    }).use(MarkdownItMermaid);
    return md.render(text? text: "")
}

const PreviewArea = props => {
    return (
        <div className="markdown-body" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(renderMarkdown(props.text))}}></div> 
    )
}

export default PreviewArea;