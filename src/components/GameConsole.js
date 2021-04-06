import React from 'react'

function GameConsole(props) {

    const {isTimerRunning, timerCount, handleGameStart} = props.data

    return(
        <div className={`console-wrapper${isTimerRunning ? " active" : ""}`}>
            <h3 className="timer">{timerCount}</h3>
            <button
                className="start-btn"
                onClick={handleGameStart} 
                type="button" 
                disabled={isTimerRunning}
            >Start
            </button>
        </div>
    )
}

export default GameConsole