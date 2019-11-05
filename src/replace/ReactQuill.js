import React, { Component } from 'react'
import * as ReactQuill from 'react-quill'; // Typescript
import 'react-quill/dist/quill.snow.css'; // ES6
import './suggestion.css'

 class ReactQuil extends Component {

    constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
      }
     
      handleChange(value) {
        this.setState({ text: value });
      }

      onSpellCheck =  () => {
        // let html_text = this.state.text.substr(3, this.state.text.length - 7);
        // console.log(html_text)
        // let innerHTML = html_text;
        // let model =  this.boxCreated();
        // var index = innerHTML.indexOf(text);
        // if (index >= 0) { 
        //  innerHTML = innerHTML.substring(0,index) +  `<span>"data"</span>`  + innerHTML.substring(index + text.length);
        //  console.log(innerHTML)
        //  let res = "<p>hello data <span>ee</span></P>"
        // this.setState({ text:res })
       
        // }
        // else{
        //     alert('else')
        // }

        const { text } = this.state;
        // let res = "<p>sdfsd v <strong>sfsdf </strong>sdfsd</p>"
        let res = `<p><span id="aa" style="color: rgb(255, 153, 0);" class="bg-danger" >som</span> </p>`
        console.log(text)
        this.setState({ text:res })
      }

      boxCreated = () =>{
       const contant = `<span id="t1" class="toolTip txt_sel">Hover over me
        <div class="suggest rounded tooltiptext" >
            <p class='p-2 m-0 select rounded-top' onclick="document.getElementById('t1').innerHTML = 'word'"> word </p>
            <p class='p-2 m-0 ignore rounded-bottom'> 
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            Ignonre</p>
        </div>
            </span>`
        return contant;
      }

    render() {
        return (
            <div className="container">
                
                

                <br/>
                  <button className="btn btn-outline-primary" onClick={()=> this.onSpellCheck()} >spellCheck</button>
                  <br/>  <br/>
                <div>
                <ReactQuill value={this.state.text}
                id="doc_contant"
                 spellCheck={false}
                  onChange={this.handleChange} />
                </div>

                <div>
                <h4>source</h4>
                  <textarea 
                    className="w-100" 
                    style={{height:300}}
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </div>
            </div>
        )
    }
}

export default ReactQuil