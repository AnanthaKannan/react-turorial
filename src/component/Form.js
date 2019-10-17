import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             address:'',
             select:''
        }
    }
    
    handleNameChange = (e) =>{
        this.setState({ name: e.target.value });
    }

    handleAddressChange = (e) =>{
        this.setState({ address: e.target.value });
    }

    handleTopicChange = (e) =>{
        this.setState({ select: e.target.value });
    }

    handleSubmit = (e) =>{
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        let { name, address, select } = this.state;

        return (
            <div>
                <form onSubmit={ this.handleSubmit } >
                    <div>
                        <label>Name</label>
                        <input type="text" value={ name }  onChange={this.handleNameChange } />
                        <label>Address</label>
                        <textarea value={ address } onChange={ this.handleAddressChange }>  </textarea>
                        <label>Topic</label>
                        <select value={ select } onChange={ this.handleTopicChange } >
                            <option value="angular"> Angular </option>
                            <option value="react" > React </option>
                            <option value="vue"> Vue </option>
                            
                        </select>
                    </div>
                    <button type="submit" >Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Form
