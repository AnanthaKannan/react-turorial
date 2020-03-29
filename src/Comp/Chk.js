import React, { Component } from 'react'
import {Editor, EditorState, RichUtils, Modifier} from 'draft-js';

export default class Chk extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command, editorState) {
    console.log("funcitonCalled", command)
    const newState = RichUtils.handleKeyCommand(editorState, 'BOLD');
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  modi = () =>{
    const sdf
   const cState = Modifier.replaceText(
      contentState,
      selectionState,
      replace,
    )
  }
  
  render() {
    return (
      <div className='border w-100'>
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
      />
      </div>
    
    );
  }
}


// https://reactrocket.com/post/draft-js-search-and-replace/