import React, { Component } from 'react'

 class ClassClick extends Component {


    callMe(){
        console.log('callme functin called inside class');
    }

    render() {
        return (

            <div>
                <h5> Class Click</h5>
                <button  onClick={this.callMe }    > Click me</button>
            </div>
        )
    }
}

export default ClassClick
