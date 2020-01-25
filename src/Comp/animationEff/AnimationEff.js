import React, {useState} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './animation.css'
export default function AnimationEff() {

    const [arr, setArr] = useState([]);

    const added = () =>{
        let str = randomString(5);
        setArr([...arr, str]);
    }

    function randomString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     

    return (
        <div className="container">
            <p>AnimationEff in css</p>
            
            <button onClick={added}>click me</button>
            <span>hello data</span>
            <div>
                <br/><br/>
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionEnter={true}
                transitionLeave={true}>    
                {
                    arr.map(val=> <span className="bg-info p-3 m-1">{val}</span>)
                }
            </ReactCSSTransitionGroup>
            </div>
        </div>
    )
}
