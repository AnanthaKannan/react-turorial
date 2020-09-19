import React, { Component } from 'react'
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, CompositeDecorator, getDefaultKeyBinding, } from 'draft-js';
import blockStyleFn from '../tool/utils/BlockStyle';
import WysiwygEditor from '../tool/Check';
export default class DraftEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState:EditorState.createEmpty()
        };
    }
    onChange = editorState => {
        this.setState({ editorState });
    };
    render() {
        const { editorState } = this.state;
        return (
            <div>
                <WysiwygEditor editorState={editorState}/>
              
            </div>
        )
    }
}
