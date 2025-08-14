    import React from 'react'
    import { useState, useEffect } from 'react'

    function Timer() {

    const [second, setSecond] = useState(0);

    useEffect(() => {
        const intervalId = setInterval( () => {
            console.log("Set Interval Exicuted");
            setSecond(prevSecond => prevSecond + 1);
        }, 1000);

        return () => {
            console.log("Time to stop");
            clearInterval(intervalId);
        };
    }, [])
        

    return (
        <div>
        <h1>Seconds : {second}</h1>
        </div>
    )
    }

    export default Timer
