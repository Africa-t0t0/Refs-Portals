import { useState, useRef } from "react"
import ResultModal from "./ResultModal";


// this is not a solution, because we are using the same timer variable
// in all the other instances of the components, this causes a problem.
// let timer;

export default function TimerChallenge({ title, targetTime }) {
    // using useRef is the best solution, because each independent component will have
    // their own timer!!
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    console.log('timer is active?', timerIsActive);

    if (timeRemaining <= 0) {
        console.log('timer is up')
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                handleReset={handleReset}
            />
            <section className="challenge">
                <h2>
                    {title}
                </h2>
                <p className="challenge-time">
                    {targetTime} seconds{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button
                        onClick={timerIsActive ? handleStop : handleStart}
                    >
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running!!!' : 'Timer inactive'}
                </p>
            </section>

        </>
    )
}