import React, { Component } from 'react'
import { EditorState, Editor, CompositeDecorator  } from 'draft-js';
import './draft.css'

export default class DraftEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
          search: '',
          replace: '',
          editorState: EditorState.createEmpty(),
        }
      }

    //   onChangeSearch = (e) => {
    //     this.setState({
    //       search: e.target.value,
    //     });
    //   }

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
    
      onReplace = () => {
        console.log(`replacing "${this.state.search}" with "${this.state.replace}"`);
      }
    
      onChange = (editorState) => {
        this.setState({
          editorState,
        });
      }

       generateDecorator = (highlightTerm) => {
        // const regex = new RegExp(`\b(some)\b`, 'g');
        // const pattern = /\b(some)\b/g;
        const pattern = `\\b(${highlightTerm})\\b`;
        const regex = new RegExp(pattern,"g");
        return new CompositeDecorator([{
          strategy: (contentBlock, callback) => {
            //   console.log(contentBlock)
            if (highlightTerm !== '') {
              this.findWithRegex(regex, contentBlock, callback);
            }
          },
          component: this.SearchHighlight,
        }])
      };

       findWithRegex = (regex, contentBlock, callback) => {
        const text = contentBlock.getText();
        console.log(text)
        let matchArr, start, end;
        // console.log(regex.exec(text));
        while ((matchArr = regex.exec(text)) !== null) {
          start = matchArr.index;
          end = start + matchArr[0].length;
          callback(start, end);
        }
      };

       SearchHighlight = (props) => ( <span onClick={()=> alert()} className="error">{props.children}</span>);

    render() {
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
      </div>
            </div>
        )
    }
}
