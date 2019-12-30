import React, {useState} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import './animation.css'
export default function AnimationEff() {

    const [arr, setArr] = useState(['apple', 'nana']);

    const added = () =>{
        setArr([...arr, arr[0]])
    }
    return (
        <div>
            <p>AnimationEff in css</p>
            
            <button onClick={added}>click me</button>
            
            <div className="d-flex flex-row">
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
                transitionEnter={true}
                transitionLeave={true}>    
                <div>
                {
                    arr.map(val=> <h3 className="bg-info p-3">{val}</h3>)
                }
</div>
            </ReactCSSTransitionGroup>
            </div>
        </div>
    )
}
