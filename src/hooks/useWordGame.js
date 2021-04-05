import { useState, useEffect, useRef } from 'react'

function useWordGame(startTime = 15) {
    const [ textData, setTextData ] = useState('')
    const [ timerCount, setCount ] = useState(startTime)
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
        setCount(startTime)
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

    return {textareaRef, textData, handleTextChange, isTimerRunning, timerCount, handleGameStart, wordCount}
}

export default useWordGame