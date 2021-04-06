import React from 'react'
import useWordGame from './hooks/useWordGame'
import GameConsole from './components/GameConsole'
import GameArea from './components/GameArea'
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

    const consoleData = {isTimerRunning, timerCount, handleGameStart}
    const areaData = {textareaRef, textData, handleTextChange, isTimerRunning}

    return (
        <div className="game-wrapper">
            <h1 className="title">SPEED TYPERRR</h1>
            <GameArea data={areaData}/>
            <GameConsole data={consoleData} />
            <h2 className="score">WORDS: {wordCount}</h2>
        </div>
    )
}

export default App;
