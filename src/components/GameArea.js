import React from 'react'

function GameArea(props) {

    const {textareaRef, textData, handleTextChange, isTimerRunning} = props.data

    return (
        <textarea
            className="text-field"
            ref={textareaRef}
            name="gameInput"
            value={textData}
            onChange={handleTextChange}
            disabled={!isTimerRunning}
        />
    )
}

export default GameArea