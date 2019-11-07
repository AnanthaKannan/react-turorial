import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

export default class Suggestion extends Component {
    constructor() {
        super()
        this.contentEditable = React.createRef();
        this.state = {
            html:'',
            suggestion:[]
        };
      };
     
      componentDidMount(){
      let hello = document.getElementsByClassName("hello");
        console.log("hello", hello);
        hello[0].remove();
      }

      handleChange = evt => {
        let text = evt.target.value;
        // this.setState({html: text});
        this.state.html = text;
        document.body.onkeyup = (e) => {
          if(e.keyCode == 32){
             this.onSpellCheck();
          }
      }
      };

      removeSuggesionFromTxt = () =>{
        let node = document.getElementById('text_content'),
        htmlContent = node.innerHTML,
        textContent = node.textContent;
        let split = textContent.split(' ');
        let content = "";
        let add = true
        split.map((text) =>{
          if(text.includes('_start_')) add = false
          if(add) content += ` ${text}`;
          if(text.includes('_end_')) add = true
        })
        let string = content.replace(/\s\s+/g, ' '); 
        console.log(string)
        return string;
      }

      retextChk = async() =>{
        let arr = await this.callBackend(this.removeSuggesionFromTxt());
        // console.log("array", arr)
        // let arr = [{ 
        // fatal: false,
        // actual: 'Ths',
        // expected:
        //  [ 'ohs', "T'S", "TH'S", 'Tbs','Th','The','This','Tho',
        //    'Thu', 'Thus','Thy','Ts','DHS','HHS','HS','HTS','THC', 'VHS' 
        // ] },
        // { 
        //   fatal: false,
        //   actual: 'hello',
        //   expected:
        //    [ 'hello', 'hai' ] }];
           this.state.suggestion = arr;
    }


      
      errorChk = (word) =>{
        let { suggestion } = this.state;
        let retData = { status: false }
        suggestion.forEach((obj) =>{
          let actual = obj.actual;
          if(actual == word){
             retData = obj;
            obj.status = true;
          }
        });
        return retData
      }

      onSpellCheck = async() => {

        await this.retextChk();
        const { html } = this.state;
        const id = 't1'
        let innerHTML = html;
        let replaceHtml = ""
    
        let split = innerHTML.split(' ');
        split = split.filter(word => word);
        console.log(split);
        split.forEach((word, index) =>{
          let res = this.errorChk(word);
          if(res.status){
            let text = res.actual;
            let expected = res.expected;
            replaceHtml += ' ' + this.boxCreated(text, `t${index}`, expected);
          }
          else{
          replaceHtml += ' ' + word;
          }
        })
        // console.log(replaceHtml)
        this.setState({ html: replaceHtml })
      }

      boxCreated = (text, id, expected) =>{

     let suggestList =  expected.map((word) => `<span class='p-2 m-0 select rounded' 
     onclick="
     document.getElementById('${id}').innerHTML = '${word}';
     alert();"
     >${word}</span>`)

       const contant = `<span id='${id}'> <span class="toolTip txt_sel">${text}
        <div class="suggest rounded tooltiptext" >
        <span class='d-none'>_start_</span>
            ${suggestList}
            <p class='p-2 m-0 ignore rounded-bottom'> 
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            Ignonre</p>
            <span class='d-none'>_end_</span>
        </div>
            </span>
            </span>`
        return contant;
      }
      
      callBackend = async(content) =>{
     
       let res = await fetch('http://localhost:4000/spellCheck', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({content})
        });
       
        res = await res.json();
        console.log('myResult', res);
        return res;
      }

      render(){
          return(
              <div className="container">
              <h1 id="hello" className="hello">hello</h1>
                  <br/>
                  <button className="btn btn-outline-primary" onClick={()=> this.onSpellCheck()} >spellCheck</button>
                  <div>
                <EditButton cmd="italic" />
                <EditButton cmd="bold" />
                <EditButton cmd="formatBlock" arg="h6" name="heading" />
                <EditButton
                  cmd="createLink"
                  arg="https://github.com/lovasoa/react-contenteditable"
                  name="hyperlink"
                />
                </div>
                <br/>
                <div id="text_content">
                  <ContentEditable className='area text-left'
                  innerRef={this.contentEditable}
                  spellCheck={false}
                  html={this.state.html} // innerHTML of the editable div
                  disabled={false}       // use true to disable editing
                  onChange={this.handleChange} // handle innerHTML change
                  tagName='div' // Use a custom HTML tag (uses a div by default)
                  onClick={this.chk}
                />
              </div>
                <div>
                <h4>source</h4>
                  <textarea 
                    className="w-100" 
                    style={{height:500}}
                    value={this.state.html}
                    onChange={this.handleChange}
                  />
                </div>
           
         

              </div>
          )
      }
}



const EditButton = (props) => {
  return (
    <button
      key={props.cmd}
      onMouseDown={evt => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name || props.cmd}
    </button>
  );
}





  