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
     
      handleChange = evt => {
        // console.log(evt.target.value)
        this.setState({html: evt.target.value});
      };

      retextChk = () =>{
        let arr = [{ 
        fatal: false,
        actual: 'Ths',
        expected:
         [ 'ohs', "T'S", "TH'S", 'Tbs','Th','The','This','Tho',
           'Thu', 'Thus','Thy','Ts','DHS','HHS','HS','HTS','THC', 'VHS' 
        ] },
        { 
          fatal: false,
          actual: 'hello',
          expected:
           [ 'hello', 'hai' ] }];
           this.state.suggestion = arr;
        // return arr;
    }

      // onSpellCheck = () =>{
      //   const contant = `<span id="t1" class="toolTip">Hover over me
      //   <div class="suggest rounded tooltiptext" >
      //       <p class='p-2 m-0 select rounded-top' onclick="document.getElementById('t1').innerHTML = 'word'"> word </p>
      //       <p class='p-2 m-0 ignore rounded-bottom'> 
      //       <i class="fa fa-trash-o" aria-hidden="true"></i>
      //       Ignonre</p>
      //   </div>
      //       </span>`
      // }

      // function highlight(text) {
      //   var inputText = document.getElementById("inputText");
      //   var innerHTML = inputText.innerHTML;
      //   var index = innerHTML.indexOf(text);
      //   if (index >= 0) { 
      //    innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
      //    inputText.innerHTML = innerHTML;
      //   }
      // }
      
      errorChk = (word) =>{
        let { suggestion } = this.state;
        let retData = { status: false }
        suggestion.forEach((obj) =>{
          let actual = obj.actual;
          if(actual == word){
             retData = obj;
            obj.status = true;
          }
        })

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

        // if (index >= 0) { 
        //  innerHTML = innerHTML.substring(0,index) +  model  + innerHTML.substring(index + text.length);
        // this.setState({ html:innerHTML })
        // }

      }

      boxCreated = (text, id, expected) =>{

      //  let suggestList = `<p class='p-2 m-0 select rounded-top' onclick="
      //  document.getElementById('${id}').innerHTML = 'word'; 
      //  "> word </p>`

     let suggestList =  expected.map((word) => `<span class='p-2 m-0 select rounded-top' onclick="
       document.getElementById('${id}').innerHTML = '${word}'; 
       "> ${word} </span>`)

       const contant = `<span id='${id}'> <span class="toolTip txt_sel">${text}
        <div class="suggest rounded tooltiptext" >
            ${suggestList}
            <p class='p-2 m-0 ignore rounded-bottom'> 
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            Ignonre</p>
        </div>
            </span>
            </span>`
        return contant;
      }
      
      render(){
          return(
              <div className="container">
                
            


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
                  <ContentEditable className='area text-left'
                  innerRef={this.contentEditable}
                  spellCheck={false}
                  html={this.state.html} // innerHTML of the editable div
                  disabled={false}       // use true to disable editing
                  onChange={this.handleChange} // handle innerHTML change
                  tagName='div' // Use a custom HTML tag (uses a div by default)
                  onClick={this.chk}
                />

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





  