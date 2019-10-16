import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogin: true
        }
    }


    render() {
        const { isLogin } = this.state;

        // Short circuit operator
        return isLogin && <div> Conditonal rendering </div>

        // Ternary conditional operator
        return (isLogin ?
            <div>Hai kannan</div> :
            <div> Hello india </div>
        )

        // Element variable
        let message
        if (isLogin) {
            message = <div> Hai kannan</div>
        } else {
            message = <div> Hello india</div>
        }
        return message

        // if else condion
        if (isLogin) {
            return <div> Hai kannan</div>
        }
        else {
            return <div>Hello inid</div>
        }

    }
}

export default ConditionalRendering
