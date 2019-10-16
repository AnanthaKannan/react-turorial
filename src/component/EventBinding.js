import React, { Component } from 'react'

 class EventBinding extends Component {

    constructor(props) {
        super(props)
        this.state = {
             message:'Hello'
        }
        this.eventBinding_forue = this.eventBinding_forue.bind(this);
    }
    

    eventBinding(){
        this.setState({ message:'Good bye!' });
        console.log(this)
    }

    eventBinding_therr = () =>{
        this.setState({ message: 'third approch'})
    } 

    eventBinding_forue(){
        this.setState({ message: 'fourth approch'})
    }
    render() {
        const { message } = this.state;
        return (
            <div>
                <h5>Event EventBinding : { message } </h5>
                <button onClick={ this.eventBinding.bind(this) } > 1 st approch </button>
                <button onClick = { ()=> this.eventBinding() }> 2nd approch </button>
                <button onClick = { this.eventBinding_therr } > 3rd apporch </button>
                <button onClick ={ this.eventBinding_forue }> 4th apporch </button>
            </div>
        )
    }
}

export default EventBinding
