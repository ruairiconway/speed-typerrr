import React, { useState } from 'react'
import './App.css';

function App() {
    const [ textData, setTextData ] = useState('')

    function handleTextChange(e) {
        const { value } = e.target
        setTextData(value)
    }

    function handleWordCount(textStr) {
        const inputArray = textStr.trim().split(' ')
        const filteredWordCount = inputArray.filter(word => word !== '').length
        return filteredWordCount
    }

    return (
        <div>
            <h1>SPEED TYPERRR</h1>
            <textarea
                name="gameInput"
                value={textData}
                onChange={handleTextChange}
            />
            <h4>TIME: 00:00</h4>
            <button onClick={() => handleWordCount(textData)} type="submit">START</button>
            <h1>WORD COUNT: ???</h1>
        </div>
    );
}

export default App;
