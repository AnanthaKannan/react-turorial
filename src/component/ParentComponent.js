import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

 class ParentComponent extends Component {

    greetParent =( childName ) => {
        alert(`called from the child ${ childName }`)
    }
    

    render() {
        return (
            <div>
                <div> Method as props</div>
                <ChildComponent hadler={ this.greetParent } />
            </div>
        )
    }
}

export default ParentComponent
