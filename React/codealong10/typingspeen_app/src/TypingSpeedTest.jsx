import { useState, useRef, useEffect} from "react";

function TypingSpeedTest() {

    // the useState
    const [started, setStarted] = useState(false);
    const[finished, setFinished] = useState(false);
    const[timeElasped, setTimeElapsed] = useState(0);
    const[userInput, setUserInput] = useState('');

    // useRef
    const inputRef = useRef(null);
    const timerRef = useRef(null);
    const StartTimeRef = useRef(null);

    const SampleText = "Learning Web Development has been interesting though a little challenging but i will cope. Thanks to a great tutor!"

    // to focus on the input tag which depends of started
    useEffect(() => {
        if (started && inputRef.current){
            inputRef.current.focus()
        }
    }, [started]);

    // to begin the program
    function Begin() {
        setStarted(true);
        setFinished(false);
        setTimeElapsed(0);
        setUserInput('');
        StartTimeRef.current = Date.now()
    };

    // begin the timer
    timerRef.current = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - StartTimeRef.current)/ 1000))
    }, 1000);

    function end() {
        setFinished(true);
        setStarted(false);
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    function handleInputChange(e) {
        const value = e.target.value;
        setUserInput(value); 

        if (value === SampleText) {
            end()
        }
    };

    // to reset
    function reset() {
        setStarted(false);
        setFinished(false);
        setUserInput('');
        setTimeElapsed(0);
        clearInterval(timerRef.current);
        timerRef.current = null
    };

    // Calculate Statistics

    const wordsTyped = userInput.trim().split(/\s+/).filter(word => word.length > 0).length;

    const accuracy = userInput.length > 0 ? Math.round((userInput.split('').filter((char, i) => char === SampleText[i]).length / SampleText.length)* 100): 0;

    const wpm = timeElasped > 0 ? Math.round((wordsTyped/ timeElasped)* 60): 0;

    return(
        <div className="typing-container">
            <h1>⌨️ Typing Speed Test</h1>
            <p className="subtitle">Test your typing speed with Nigerian context</p>

            {!started && !finished && (
                <div className="start-section">
                    <div className="sample-text">
                        <h3>Type this text</h3>
                        <p>{SampleText}</p>
                    </div>
                    <button onClick={startTest} className="start-btn">Start Test</button>
                </div>
            )}

            {started && (
                <div className="test-section">
                    <div className="timer">
                        Timer: {timeElasped}
                    </div>

                    <div className="sample-display">
                        <h3>Type this:</h3>
                        <p className="sample-text-display">{SampleText}</p>
                    </div>

                    <textarea
                        ref={inputRef}
                        value={userInput}
                        onChange={handleInputChange}
                        className="typing-input"
                        placeholder="Start typing here..."
                        rows="5"
                    />

                    <div className="stats">
                        <div className="stat">
                            <span className="stat-label">Words:</span>
                            <span className="stat-value">{wordsTyped}</span>
                        </div>

                        <div className="stat">
                            <span className="stat-label">WPM</span>
                            <span className="stat-value">{wpm}</span>
                        </div>

                        <div className="stat">
                            <span className="stat-label">Accuracy</span>
                            <span className="stat-value">{accuracy}%</span>
                        </div>
                    </div>
                    <button onClick={reset} className="reset-btn">Reset</button>
                </div>
            )}


            {finished && (
                <div className="results-section">
                    <h2>🎉 Test Complete!</h2>

                    <div className="results">
                        <div className="result-item">
                            <span className="result-label">Time Taken:</span>
                            <span className="result-value">{timeElasped}</span>
                        </div>

                        <div className="result-item">
                            <span className="result-label">Words Per Minute:</span>
                            <span className="result-value">{wpm} WPM</span>
                        </div>

                        <div className="result-item">
                            <span className="result-label">Accuracy:</span>
                            <span className="result-value">{accuracy}</span>
                        </div>

                        <div className="result-item">
                            <span className="result-label">Total Words:</span>
                            <span className="result-value">{wordsTyped}</span>
                        </div>
                    </div>

                    <div className="performance">
                        {wpm >= 60 && <p className="excellent">Excellent</p>}
                        {wpm >= 40 && wpm < 60 && <p className="good">Good Job!👍</p>}
                        {wpm < 40 && <p className="practice">Keep Practicing 📚</p>}
                    </div>

                    <button onClick={reset} className="try-again-btn">
                        Try Again
                    </button>
                </div>
            )}
        </div>
    )
}