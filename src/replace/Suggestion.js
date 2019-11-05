import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

export default class Suggestion extends Component {
    constructor() {
        super()
        this.contentEditable = React.createRef();
        this.state = {
            html:``
        };
      };
     
      myfn = () =>{
          alert();
      }

      handleChange = evt => {
        const contant = `<span id="t1" class="toolTip">Hover over me
       
        <div class="suggest rounded tooltiptext" >
        <p class='p-2 m-0 select rounded-top'> word </p>
        <p class='p-2 m-0 ignore rounded-bottom'> 
        <i class="fa fa-trash-o" aria-hidden="true"></i>
         Ignonre</p>
    </div>
            </span>`
        this.setState({html: contant});
      };

      chk = (e) =>{
          console.log(e)
      }
     
      render(){
          return(
              <div className="container">
                
                <div>
                    
                </div>


                  <br/>
                  <button className="btn btn-outline-primary">spellCheck</button>
                  <br/>  <br/>
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
          )
      }
}
