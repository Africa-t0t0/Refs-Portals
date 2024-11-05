import { forwardRef, useImperativeHandle, useRef } from "react"


const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, handleReset }, ref) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000) ) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost!</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form action="" method="dialog" onSubmit={handleReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
});

export default ResultModal


// deprecated because this method doesnt allow passing ref values.
// export default function ResultModal({ ref, result, targetTime }) {
//     return (
//         <dialog ref={ref} className="result-modal">
//             <h2>You {result}</h2>
//             <p>The target time was <strong>{targetTime}</strong> seconds.</p>
//             <p>You stopped the timer with <strong>X seconds left.</strong></p>
//             <form action="" method="dialog">
//                 <button>Close</button>
//             </form>
//         </dialog>
//     )
// }