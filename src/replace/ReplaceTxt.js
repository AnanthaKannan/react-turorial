import React, { Component } from 'react'
import './suggestion.css'

export default class ReplaceTxt extends Component {

    state ={
        show:false,
        x:0,
        y:0,
        doc:"ths is chennai",
        id:null
    }
    componentDidMount(){
        // this.intialCall()
    }

    // let res = {}

    retextChk = () =>{
        let arr = [{ 
        ruleId: 'ths',
        fatal: false,
        actual: 'Ths',
        expected:
         [ 'ohs', "T'S", "TH'S", 'Tbs','Th','The','This','Tho',
           'Thu', 'Thus','Thy','Ts','DHS','HHS','HS','HTS','THC', 'VHS' 
        ] }]
    return arr;
    }

     highlight(text, replace) {
         const { id, doc } = this.state;
         text= `<span id="${id}" class="txt_sel toolTip">${text}</span>`;
        var innerHTML = doc;
        console.log('innerHTML_A', innerHTML)
        var index = innerHTML.indexOf(text);
        if (index >= 0) { 
         innerHTML = innerHTML.substring(0,index) + replace  + innerHTML.substring(index + text.length);
          console.log('innerHTML_B', innerHTML);
         this.setState({ doc: innerHTML})
        }
        this.setState({show:false})
      }

      showBox = (id) =>{
        const possiton = document.getElementById(id);
        var style = window.getComputedStyle(possiton, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style); 
        const x = possiton.offsetLeft ;
        const y = possiton.offsetTop + fontSize + 15;
        this.setState({ show: true, x, y, id })
      }

      getContent = (e) =>{
        console.log(e.target.value)
      }

      spellChk = () => {
          const { doc } = this.state;
          let chnageDom =  doc.split(' ').map((str, index) => {
              let id = `t${index}`
              return  <span> some <span id={id} onMouseOver={ ()=> this.showBox(id) } 
                        className='txt_sel toolTip'>datas</span> is here </span>
          })
        // let chnageDom =   <span> some <span id={'t0'} onMouseOver={ ()=> this.showBox('t0') } 
        //                 className='txt_sel toolTip'>datas</span> is here </span>
          this.setState({ doc: chnageDom})
      }

    render() {
        const { show, x, y, doc } = this.state;
        return (
            <div className="container">
                <br/> <br/> 
                <button onClick={ () => this.spellChk() } className="btn btn-outline-primary">Spell check</button>
                <br/><br/>
                <div id="inputText"
                    className='text-left area bg-white' contentEditable="true" onKeyDown={ this.getContent }
                    placeholder="I look like a textarea" >
                        { doc }
                                    </div>


                {/* <h1 id="inputText">  some <span id="t1" onMouseOver={ this.showBox } 
                 className='txt_sel toolTip'>datas</span> is here  </h1> */}
               
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
