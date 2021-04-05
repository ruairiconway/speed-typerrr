import React, { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
    const START_TIME = 5
    const [ textData, setTextData ] = useState('')
    const [ timerCount, setCount ] = useState(START_TIME)
    const [ isTimerRunning, setIsTimerRunning ] = useState(false)
    const [ wordCount, setWordCount ] = useState(0)
    const textareaRef = useRef(null)

    function handleTextChange(e) {
        const { value } = e.target
        setTextData(value)
    }

    function handleWordCount(textStr) {
        const inputArray = textStr.trim().split(' ')
        const filteredWordCount = inputArray.filter(word => word !== '').length
        return filteredWordCount
    }

    async function handleGameStart() {   
        setTextData('')
        setCount(START_TIME)
        await setIsTimerRunning(true)
        textareaRef.current.focus()
    }

    function handleGameEnd() {
        setIsTimerRunning(false)
        setWordCount(handleWordCount(textData))
    }

    useEffect(() => {
        if (timerCount > 0 && isTimerRunning) {
            setTimeout( () => {
                setCount(prevTimerCount => prevTimerCount - 1)
            }, 1000)
        } else if (timerCount === 0) {
            handleGameEnd()
        }
    }, [timerCount, isTimerRunning])

    return (
        <div>
            <h1>SPEED TYPERRR</h1>
            <textarea
                ref={textareaRef}
                name="gameInput"
                value={textData}
                onChange={handleTextChange}
                disabled={!isTimerRunning}
            />
            <h4>TIME: {timerCount}</h4>
            <button
                onClick={handleGameStart} 
                type="button" 
                disabled={isTimerRunning}
            >START</button>
            <h1>WORD COUNT: {wordCount}</h1>
        </div>
    );
}

export default App;
