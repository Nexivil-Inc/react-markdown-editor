import React from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownItKatex from '@liradb2000/markdown-it-katex';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItToc from '@liradb2000/markdown-it-toc-done-right';
import uslug from 'uslug';
import MarkdownItApexCharts , {ApexRender} from 'markdown-it-apexcharts';
import MarkdownItMermaid from '@liradb2000/markdown-it-mermaid';
import '../css/MarkDown.css';
import DOMPurify from 'dompurify';
import MarkdownItFootnote from 'markdown-it-footnote';




const uslugify = s => uslug(s);

const renderMarkdown = (text) => {
    var md = MarkdownIt({
        html: false,
        linkify: true,
        typographer: true,
        breaks: true,
        xhtmlOut: false,
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
    }).use(MarkdownItMermaid).use(MarkdownItFootnote).use(MarkdownItApexCharts)
    //.use(MarkdownItApex).use(MarkdownItMarkvis);
    //return md.render(text? (text): "", {d3})
    var timeoutID = window.setTimeout(()=>{
        ApexRender();
    },3000);
    return md.render(text? (text): "")
}

const PreviewArea = props => {
    return (
        <div className="markdown-body" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(renderMarkdown(props.text))}}></div> 
        // <div className="markdown-body" dangerouslySetInnerHTML={{__html:renderMarkdown(props.text)}}></div> 
    )
}

export default PreviewArea;