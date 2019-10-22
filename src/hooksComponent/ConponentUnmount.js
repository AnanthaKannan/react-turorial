import React, {useState, useEffect} from 'react'
import MouseMove from './MouseMove';

const ConponentUnmount = () => {

    const [toogle, setToogle] = useState(true);
    return (
        <div>
            <button onClick={()=> setToogle(!toogle)} > Toogle  </button>
            { toogle && <MouseMove /> }
        </div>
    )
}

export default ConponentUnmount
