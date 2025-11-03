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
        <div className="typing-con">
            <h1>TYping Speed Test ⌨️</h1>
            <p>Give your typing speed a try with Nigerian Context</p>

            {!started && !finished && (
                <div className="Start-section">
                    <div className="sample-text">
                        <h3>Type this:</h3>
                        <p>{SampleText}</p>
                    </div>
                    <button className="start-btn" onClick={Begin}>Start Test</button>
                </div>
            )}

            {started && (
                <div className="test-section">
                    <div className="timer">
                        Time: {timeElasped}s
                    </div>

                    <div className="sample-display">
                        <h3>Type this: </h3>
                        <p className="sample-text-display">{SampleText}</p>
                    </div>

                    <textarea 
                        ref={inputRef}
                        value={userInput}
                        onChange={handleInputChange}
                        className="typing-area"
                        placeholder="Start typing ..."
                        rows='5'
                    />

                    <div className="stats">
                        <div className="stat">
                            <span className="stat-label">Words:</span>
                            <span className="stat-value">{wordsTyped}</span>
                        </div>

                        <div className="stat">
                            <span className="stat-label">WPM:</span>
                            <span className="stat-value">{wpm}</span>
                        </div>

                        <div className="stat">
                            <span className="stat-label">Accuracy:</span>
                            <span className="stat-value">{accuracy}</span>
                        </div>

                        <button onClick={reset} className="reset-btn">
                            Reset
                        </button>
                    </div>

                    {finished && (
                        <div className="result-section">
                            <h2>Test Complete ✅</h2>

                            <div className="results">
                                <div className="result-item">
                                    <span className="result-label">Time-taken</span>
                                    <span className="result-value">{timeElasped} seconds</span>

                                    <span className="result-label">Words Per Minutes</span>
                                    <span className="result-value">{wpm} WPM</span>

                                     <span className="result-label">Accuracy</span>
                                    <span className="result-value">{accuracy}%</span>

                                     <span className="result-label">Total words</span>
                                    <span className="result-value">{wordsTyped}</span>
                                </div>
                            </div>

                            <div className="performance">
                                {wpm >= 60 && <p className="excellent">Excellent 🎉</p>}
                                {wpm >= 40 && <p className="good">Good Job!👌</p>}
                                {wpm < 40 && <p className="try">Keep Practicing 📚</p>}
                            </div>

                            <button onClick={reset} className="reset">Try Again</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )







}