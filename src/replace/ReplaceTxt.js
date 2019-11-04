import React, { Component } from 'react'
import './suggestion.css'

export default class ReplaceTxt extends Component {

    state ={
        show:false,
        x:0,
        y:0,
        doc:"",
        id:null
    }
    componentDidMount(){
        // this.intialCall()
    }

    // let res = {}

    retextChk = () =>{
        let arr = [{ 
        fatal: false,
        actual: 'Ths',
        expected:
         [ 'ohs', "T'S", "TH'S", 'Tbs','Th','The','This','Tho',
           'Thu', 'Thus','Thy','Ts','DHS','HHS','HS','HTS','THC', 'VHS' 
        ] }]
    return arr;
    }

    replaceTxt(text, replace) {
         let { id, doc } = this.state;
        let nodes= []
         doc.forEach((tag, index) =>{
            
             if(typeof(tag) !== 'string'){
                if(tag.props.id == id ){
                    nodes[index] = replace
                }
                else{
                    nodes[index] = tag;
                }  
             }
             else{
                nodes[index] = tag;
             }
         });
         this.setState({doc:nodes, show:false});
      }

      showBox = (id) =>{
        const possiton = document.getElementById(id);
        var style = window.getComputedStyle(possiton, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style); 
        const x = possiton.offsetLeft ;
        const y = possiton.offsetTop + fontSize + 15;
        this.setState({ show: true, x, y, id })
      }

      getContent = ({currentTarget:div}) =>{
        const txt = document.getElementById(div.id).textContent;
        console.log(txt)
        this.state.doc = txt;
      }

      spellChk = async () => {
        let { doc } = this.state;
        console.log("documents", doc);
        let suggestions = await this.retextChk();
        let chnageDom = [];
        let splitWord = [];
        try{
         splitWord = doc.split(' ');
        }
        catch(error){
            splitWord = doc
        }
        console.log('splitWord', splitWord)
        splitWord.forEach((word, id) =>{
            let error = false;
            suggestions.forEach((suggestion) =>{
                let actual = suggestion.actual;
                if(actual == word){
                    chnageDom.push(<span id={ `t${id}`} onMouseOver={ ()=> this.showBox(`t${id}`) } className='txt_sel toolTip'>{` ${word}`}</span>);
                    error = true;
                }
            })
            if(!error) chnageDom.push(` ${word}`)
        })
        //  chnageDom =  ["some", <span id={'t0'} onMouseOver={ ()=> this.showBox('t0') } 
        // className='txt_sel toolTip'>datas</span> , `is here`,
        //  <span id={'t1'} onMouseOver={ ()=> this.showBox('t1') } 
        // className='txt_sel toolTip'>myname</span>, <span>my name</span>]
            console.log(chnageDom)
          this.setState({ doc: chnageDom})
      }

    render() {
        const { show, x, y, doc } = this.state;
        return (
            <div className="container">
                <br/> <br/> 
                <button onClick={ () => this.spellChk() } className="btn btn-outline-primary">Spell check</button>
                <br/><br/>
                <div id="inputText" spellCheck={false}
                    className='text-left area bg-white' contentEditable="true" onKeyUp={ this.getContent }
                    placeholder="I look like a textarea" >
                        { doc }
                </div>


                {
                    show && 
                <div className="suggest rounded" style={{left: x, top:y }} onMouseLeave={() => this.setState({show:false})}>
                    <p onClick={() => this.replaceTxt('datas', 'data')}
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
