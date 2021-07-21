import React, { useState, useMemo} from 'react'

export default function UseMemoHook() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0)

    const clickOne = () => {
        setCounterOne(counterOne + 1)
    }

    const clickTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        console.log('memorised')
        let i = 0;
        while (i < 2000000000)
            i++;

        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <h1 className='text-center mt-5'>
            <button onClick={clickOne}> clickOne {counterOne} {isEven ? 'Even' : 'Odd'}</button>
                <br /> <br />
            <button onClick={clickTwo}> clickTwo {counterTwo}</button>
        </h1>
    )
}
