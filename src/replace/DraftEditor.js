import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EditorState, CompositeDecorator, SelectionState, Modifier, RichUtils } from 'draft-js';
import Editor, {createEditorStateWithText } from 'draft-js-plugins-editor';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import createCounterPlugin from 'draft-js-counter-plugin';

import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import './draft.css'
import DraftBtn from './DraftBtn';
import { spellCheck, passiveVoice } from './draftApi';


const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const counterPlugin = createCounterPlugin();
const { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;
const plugins = [counterPlugin, staticToolbarPlugin];

export default class DraftEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
          search: '',
          replace: '',
          editorState: EditorState.createEmpty(),
          show:false,
          passiveShow: false,
          inside:false,
          x:0,
          y:0,
          suggesion:[],
          ignore:null,
          allSuggesion:[]
        }
      }

    componentDidMount(){
      // spellCheck()
      document.body.onkeyup = e => {
        let key = e.keyCode;
        if(key == 190){
          passiveVoice(this, this.getCurrentPara());
        }
        if (key == 32 || key == 190) {
          spellCheck(this, this.getCurrentPara());
        }
       
    }
    }

    getCurrentPara = () =>{
      let { editorState } = this.state;
      let selectionState = editorState.getSelection();
      let anchorKey = selectionState.getAnchorKey();
      let currentContent = editorState.getCurrentContent();
      let currentContentBlock = currentContent.getBlockForKey(anchorKey);
      let selectedText = currentContentBlock.getText()
      return selectedText;
    }



    onSearch = (e) => {
      let { editorState, allSuggesion } = this.state;
        this.setState({
          editorState: EditorState.set(editorState, { decorator:  this.generateDecorator(allSuggesion) })
        });
      }
    
      onChangeReplace = (e) => {
        this.setState({
          replace: e.target.value,
        });
      }

      fatalResponse = (text) =>{
        console.log(text)
        let result = [{
          fatal: false,
          actual: 'Ths',
          expected:
           [ 'ohs', "T'S", "TH'S", 'Tbs','Th','The','This','Tho',
             'Thu', 'Thus','Thy','Ts','DHS','HHS','HS','HTS','THC', 'VHS'
          ] },
          {
            fatal: false,
            actual: 'some',
            expected:
             [ 'same', 'soft', 'added'] }];
        return result;
      }
    
      onReplace = (blockKey, start, end, suggestWord) => {

        const { editorState } = this.state;
        const selectionsToReplace = [];
            const blockSelection = SelectionState
              .createEmpty(blockKey)
              .merge({
                anchorOffset: start,
                focusOffset: end,
              });
      
        selectionsToReplace.push(blockSelection)
        
        let contentState = editorState.getCurrentContent();
      
        selectionsToReplace.forEach(selectionState => {
          contentState = Modifier.replaceText(
            contentState,
            selectionState,
            suggestWord,
          )
        });
      
        this.setState({
          editorState: EditorState.push(
            editorState,
            contentState,
          ),
          show:false,
          inside:false,
        })
      }

      passiveShowdiv = (element) =>{
        var ele = element.target
        var rect = ele.getBoundingClientRect();
        console.log('element', rect)
        const x = rect.left;
        const y = rect.bottom;
        this.setState({x, y, passiveShow:true})
      }

      passiveHidediv = () =>{
        this.setState({passiveShow: false})
      }

      mouseEnter = (blockKey, start, end, suggesion, element) =>{
        console.log(blockKey, start, end, suggesion);
      
        var ele = element.target
        var rect = ele.getBoundingClientRect();
        console.log('element', rect)
        const x = rect.left;
        const y = rect.bottom;
        console.log("x", x, 'y', y)
        let suggest = [];
        suggesion.map((SuggestWord) =>{
          suggest.push(<span key={SuggestWord} onClick={() => this.onReplace(blockKey, start, end, SuggestWord)} className='p-2 m-0 select rounded-top'> { SuggestWord }  </span>)
        })
        const ignore = <p onClick={()=> this.ignore_(start, end, 'text')} className='p-2 m-0 ignore rounded-bottom'><i className="fa fa-trash-o" aria-hidden="true"></i>ignore</p>
        this.setState({show: true, x, y, suggesion:suggest, ignore})
      }

      ignore_ = (start, end, text) =>{
        // this.setState({
        //   editorState: EditorState.set(this.state.editorState, { decorator: this.generateDecorator(text) }),
        // });
      }

      onChange = (editorState) => {
        this.setState({
          editorState,
        });
    }

    passiveDecorator = (highlightTerm) =>{
      highlightTerm = 'is hit|is filled';
      const pattern = `\\b(${highlightTerm})\\b`;
      const regex = new RegExp(pattern,"g");
      return new CompositeDecorator([{
        strategy: (contentBlock, callback) => {
          if (highlightTerm !== '') {
            this.findWithRegex(regex, contentBlock, callback);
          }
        },
        component: (props) =>   <span className="passive">{props.children}</span>,
      }])
    }

       generateDecorator = (suggesion_res) => {
     
        let actual = suggesion_res.map((obj) => obj.actual)
        let highlightTerm = actual.toString().replace(/,/g, '|');
        console.log('highlightTerm', highlightTerm)
        const pattern = `\\b(${highlightTerm})\\b`;
        const regex = new RegExp(pattern,"g");
        return new CompositeDecorator([{
          strategy: (contentBlock, callback) => {
            if (highlightTerm !== '') {
              this.findWithRegex(regex, contentBlock, callback);
            }
          },
          component: (props) => this.SearchHighlight(props, suggesion_res),
        }])
      };

      onLeave = () =>{
        setTimeout(() => {
          if(!this.state.inside){
            this.setState({show:false})
          }
        }, 100);
        console.log("inside")
      }

   
      SearchHighlight = (props, suggesion_res) => {
        // console.log("props", props)
        let suggest = [];
        const text = props.children[0].props.text;
        let actual = suggesion_res.filter((obj) => obj.actual.toLowerCase() == text.toLowerCase());
        if(actual.length > 0){
          suggest = actual[0].expected;
        }
        console.log('actual', actual, 'text', text);

        // passive voice span
        if(actual[0].pgm && actual[0].pgm == 'passive'){
        return <span 
        onMouseEnter={this.passiveShowdiv} 
        onMouseLeave={this.passiveHidediv}
         className="passive">{props.children}</span>
        }
        // spell check span
        return ( <span 
            onMouseEnter={(e)=>this.mouseEnter(props.blockKey, props.start, props.end, suggest, e)}
            onMouseLeave={this.onLeave}
             className="spell-mistake">{props.children}
        </span>);
      };


       findWithRegex = (regex, contentBlock, callback) => {
        //  console.log("findWithRegex")
        const text = contentBlock.getText();
        // console.log(contentBlock)
        let matchArr, start, end;
        while ((matchArr = regex.exec(text)) !== null) {
          start = matchArr.index;
          end = start + matchArr[0].length;
          callback(start, end);
        }
      };

      handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

 

    focus = () => this.editor.focus();

    render() {
      const { show, x, y, suggesion, ignore, passiveShow } = this.state;
        return (
            <div className="container">
                <h3>daraftjs</h3>
                <br/>
        
                      <Toolbar />

                <div className="editor mt-2" onClick={this.focus}>
        <Editor
          ref={(element) => { this.editor = element; }}
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}  
          plugins={plugins}
        />

</div>
      <div className="d-flex identify">
      <div> Char <CharCounter limit={200} /> </div>
        <div> words <WordCounter limit={30} /> </div>
        <div>Line<LineCounter limit={10} /> </div>
      </div>

<br/>
        <div >

        {     show &&
                <div className="suggest rounded hov" style={{left: x, top:y }} onMouseEnter={()=> this.setState({inside:true})}
                 onMouseLeave={() => this.setState({show:false, inside: false})}>
                    { suggesion }
                    { ignore } 
                    {/* <p className='p-2 m-0 ignore rounded-bottom'><i className="fa fa-trash-o" aria-hidden="true"></i>ignore</p> */}
                </div>
               }
      </div>
    { passiveShow &&
      <div className='passive-suggesion'  style={{left: x, top:y }} >
        <p className="m-0">Passive Voice: Use active voice.</p>
      </div>
    }


            </div>
        )
    }
}
