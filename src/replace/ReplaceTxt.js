import React, { Component } from 'react'
import './suggestion.css'

export default class ReplaceTxt extends Component {

    state ={
        show:false,
        x:0,
        y:0,
        doc:[],
        id:null,
        suggest:[],
        childLength:0
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

      

      showBox = async(id) =>{
        // to set the positon for the model box
        const possiton = document.getElementById(id);
        var style = window.getComputedStyle(possiton, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style); 
        const x = possiton.offsetLeft ;
        const y = possiton.offsetTop + fontSize + 15;
        
        // get the value form selected span
        let hoverWord = document.getElementById(id).textContent;
        let suggestions = await this.retextChk();
        let suggest = [];
        console.log("suggestions", suggestions);
        suggestions.forEach((suggestion) =>{
            let actual = suggestion.actual;
            console.log("actual", actual, "hoverWord", hoverWord);
            if(actual.trim() === hoverWord.trim()){
               let suggestionList = suggestion.expected;
               suggestionList.forEach((SuggestWord) =>{
                   suggest.push(<span onClick={() => this.replaceTxt(actual, ` ${SuggestWord}`)} className='p-2 m-0 select rounded-top'> { SuggestWord } </span>)
               })
            }
        })

        console.log(suggest)
        this.setState({ show: true, x, y, id, suggest })
      }

     

      getContent = ({currentTarget:div}) =>{
        const txt = document.getElementById(div.id).textContent;
        // this.state.doc = txt;
        this.setState({doc: txt})
      }

      spellChk = async () => {
        let { doc, childLength } = this.state;
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
                if(actual == word && typeof(word) === 'string'){

                    chnageDom.push(<span id={ `t${id}`} onMouseOver={ ()=> this.showBox(`t${id}`) } 
                                        className='txt_sel toolTip'>{ (word[0] == ' ') ? word : ` ${word}`}</span>);
                    error = true;
                }
            })
            if(!error && typeof(word) === 'string') chnageDom.push((word[0] == ' ') ? word : ` ${word}`);
            if(typeof(word) !== 'string')chnageDom.push(word);
        })

        let filterData = chnageDom.filter((arrTxt) => {
            if(typeof(arrTxt) == 'string')
               return arrTxt.trim()
            else return arrTxt
       });
            let length = filterData.length;
            console.log("childLength",childLength, 'length', length)
            if(childLength > length){
                let diff = childLength - length;
                alert(diff)
                Array(diff + 3).fill('').forEach((val) =>{
                    filterData.push(val);
                })
            }
        
          console.log(chnageDom, filterData)
          this.setState({ doc: filterData, childLength: filterData.length})
      }

    render() {
        const { show, x, y, doc, suggest } = this.state;
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
                    { suggest }
                    <p className='p-2 m-0 ignore rounded-bottom'> 
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                     Ignonre</p>
                </div>
               }

            </div>
        )
    }
}
