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
    } = useWordGame(30)

    return (
        <div className="game-wrapper">
            <h1 className="title">SPEED TYPERRR</h1>
            <textarea
                className="text-field"
                ref={textareaRef}
                name="gameInput"
                value={textData}
                onChange={handleTextChange}
                disabled={!isTimerRunning}
            />
            <div className={`console-wrapper${isTimerRunning ? " active" : ""}`}>
                <h4 className="timer">{timerCount}</h4>
                <button
                    className="start-btn"
                    onClick={handleGameStart} 
                    type="button" 
                    disabled={isTimerRunning}
                >START
                </button>
            </div>
            <h2 className="score">WORD COUNT: {wordCount}</h2>
        </div>
    )
}

export default App;
