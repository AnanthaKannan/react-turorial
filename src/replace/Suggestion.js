import React, { Component } from 'react'


export default class Suggestion extends Component {

  state={
    child:[]
  }

  chk = () =>{
    
  }

  render() {
    return (
    <div>
      <button onClick={this.chk} >click</button>
        <div className="container">
        { this.state.child}
      </div>
    </div>
    )
  }
}
