import React, { useEffect, useState } from 'react'

export const ExampleComponent = () => {
    const [counter, setCounter] = useState(0)


    const handleCounter = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        const title = `Example component ${counter}`;
        console.log(title)
    }, [counter])
    
    return (<>
        <button onClick={ handleCounter } >Aumentar</button>
    </>);
}
