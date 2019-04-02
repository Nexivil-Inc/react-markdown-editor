import React from 'react';
import MarkdownIt from 'markdown-it'
import MarkdownItKatex from 'markdown-it-katex'
import DOMPurify from 'dompurify';

class MarkdownTest extends React.Component {

    constructor(){
        super()

        

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
                <div dangerouslySetInnerHTML={{__html:this.state.markdown}}></div> 

                <input style={{width:'400px' , height:'400px'}} onChange={this.handleChange}></input>

            </div>
            

            
        )
    }
}

export default MarkdownTest

