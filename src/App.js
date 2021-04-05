import React from 'react'
import useWordGame from './hooks/useWordGame'
import './App.css';

function App() {
    const {
        textareaRef,
        textData,
        handleTextChange,
        isTimerRunning,
        timerCount,
        handleGameStart,
        wordCount
    } = useWordGame()

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
    )
}

export default App;
