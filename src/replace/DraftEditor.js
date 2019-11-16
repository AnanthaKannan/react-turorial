import React, { Component } from 'react';
import { EditorState, Editor, CompositeDecorator, SelectionState, Modifier } from 'draft-js';
import './draft.css'

export default class DraftEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
          search: '',
          replace: '',
          editorState: EditorState.createEmpty(),
          show:false,
          x:0,
          y:0,
          suggesion:[],
          ignore:null
        }
      }

    componentDidMount(){
      this.fatalResponse();
    }

    onChangeSearch = (e) => {
        const search = e.target.value;
        this.setState({
          search,
          editorState: EditorState.set(this.state.editorState, { decorator: this.generateDecorator(search) }),
        });
      }
    
      onChangeReplace = (e) => {
        this.setState({
          replace: e.target.value,
        });
      }

      fatalResponse = () =>{
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
          )
        })
      }

      mouseEnter = (blockKey, start, end, suggesion, element) =>{
        console.log(blockKey, start, end, suggesion);
        const x = element.clientX;
        const y = element.pageY;
        let suggest = [];
        suggesion.map((SuggestWord) =>{
          suggest.push(<span key={SuggestWord} onClick={() => this.onReplace(blockKey, start, end, SuggestWord)} className='p-2 m-0 select rounded-top'> { SuggestWord } </span>)
        })
        const ignore = <p onClick={()=> this.ignore_(start, end, 'text')} className='p-2 m-0 ignore rounded-bottom'><i className="fa fa-trash-o" aria-hidden="true"></i>ignore</p>
        this.setState({show: true, x, y, suggesion:suggest, ignore})
      }

      ignore_ = (start, end, text) =>{
        this.setState({
          editorState: EditorState.set(this.state.editorState, { decorator: this.generateDecorator(text) }),
        });
      }

      onChange = (editorState) => {
        this.setState({
          editorState,
        });
      }

       generateDecorator = (highlightTerm) => {
        let suggesion_res = this.fatalResponse();
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

      SearchHighlight = (props, suggesion_res) => {
        console.log("props", props)
        let suggest = [];
        const text = props.children[0].props.text;
        let actual = suggesion_res.filter((obj) => obj.actual.toLowerCase() == text.toLowerCase());
        if(actual.length > 0){
          suggest = actual[0].expected;
        }
        console.log('actual', actual, 'text', text);
        return ( <span onMouseEnter={(e)=>this.mouseEnter(props.blockKey, props.start, props.end, suggest, e)} className="error">{props.children}
        </span>);
      };


       findWithRegex = (regex, contentBlock, callback) => {
        const text = contentBlock.getText();
        console.log(text)
        let matchArr, start, end;
        while ((matchArr = regex.exec(text)) !== null) {
          start = matchArr.index;
          end = start + matchArr[0].length;
          callback(start, end);
        }
      };


    render() {
      const { show, x, y, suggesion, ignore } = this.state;
        return (
            <div className="container">
                <h3>daraftjs</h3>
                <div>
        <Editor
        placeholder="Type here"
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
        <div className="search-and-replace">
          <input
            value={this.state.search}
            onChange={this.onChangeSearch}
            placeholder="Search..."
          />
          <input
            value={this.state.replace}
            onChange={this.onChangeReplace}
            placeholder="Replace..."
          />
          <button onClick={this.onReplace}>
            Replace
          </button>
        </div>

        {
                    show && 
                <div className="suggest rounded" style={{left: x, top:y }} onMouseLeave={() => this.setState({show:false})}>
                    { suggesion }
                    { ignore }
                    {/* <p className='p-2 m-0 ignore rounded-bottom'><i className="fa fa-trash-o" aria-hidden="true"></i>ignore</p> */}
                </div>
               }
      </div>
            </div>
        )
    }
}
