import React, { Component } from 'react'
import './suggestion.css'

export default class ReplaceTxt extends Component {

    state ={
        show:false,
        x:0,
        y:0
    }
    componentDidMount(){
        // this.intialCall()
    }

     highlight(text, replace) {
         text= `<span id="t1" class="txt_sel toolTip">${text}</span>`;
        var inputText = document.getElementById("inputText");
        var innerHTML = inputText.innerHTML;
        console.log('innerHTML', innerHTML)
        var index = innerHTML.indexOf(text);
        if (index >= 0) { 
         innerHTML = innerHTML.substring(0,index) + replace  + innerHTML.substring(index + text.length);
          console.log('innerHTML', innerHTML)
         inputText.innerHTML = innerHTML;
        }
        this.setState({show:false})
      }

      showBox = (e) =>{
        const possiton = document.getElementById("t1");
        var style = window.getComputedStyle(possiton, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style); 
        const x = possiton.offsetLeft ;
        const y = possiton.offsetTop + fontSize + 15;
        this.setState({ show: true, x, y })
      }

    render() {
        const { show, x, y } = this.state;
        return (
            <div>
                <br/> <br/> <br/>
                <h1 id="inputText"> some <span id="t1" onMouseOver={ this.showBox } 
                 className='txt_sel toolTip'>datas</span> is here  </h1>
               
                {
                    show && 
                <div className="suggest rounded" style={{left: x, top:y }} onMouseLeave={() => this.setState({show:false})}>
                    <p onClick={() => this.highlight('datas', 'data')}
                     className='p-2 m-0 select rounded-top'> data </p>
                    <p className='p-2 m-0 ignore rounded-bottom'> 
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                     Ignonre</p>
                </div>
            }

                
               
            </div>
        )
    }
}
