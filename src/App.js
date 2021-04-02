import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
    const [ textData, setTextData ] = useState('')
    const [ timerCount, setCount ] = useState(5)

    function handleTextChange(e) {
        const { value } = e.target
        setTextData(value)
    }

    function handleWordCount(textStr) {
        const inputArray = textStr.trim().split(' ')
        const filteredWordCount = inputArray.filter(word => word !== '').length
        return filteredWordCount
    }

    useEffect(() => {
        timerCount > 0 &&
        setTimeout( () => {
            setCount(prevTimerCount => prevTimerCount - 1)
        }, 1000)
    }, [timerCount])

    return (
        <div>
            <h1>SPEED TYPERRR</h1>
            <textarea
                name="gameInput"
                value={textData}
                onChange={handleTextChange}
            />
            <h4>TIME: {timerCount}</h4>
            <button onClick={() => handleWordCount(textData)} type="submit">START</button>
            <h1>WORD COUNT: ???</h1>
        </div>
    );
}

export default App;
