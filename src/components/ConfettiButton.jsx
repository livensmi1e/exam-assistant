import React, { useState } from "react";
import Confetti from "react-confetti";

function ConfettiButton() {
    const [isVisible, setIsVisible] = useState(false);
    const audio = new Audio("/assets/yodel.mp3");

    function handleClick() {
        if (isVisible) {
            audio.pause();
            audio.currentTime = 0;
            setIsVisible(false);
        } else {
            audio.play();
            setIsVisible(true);
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;
                setIsVisible(false);
            }, 20000);
        }
    }
    return (
        <>
            <button
                onClick={handleClick}
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center gap-1"
            >
                Làm xong roài! Yeeeh!
            </button>
            {isVisible && (
                <Confetti
                    initialVelocityX={10}
                    initialVelocityY={10}
                    height={window.innerHeight}
                />
            )}
        </>
    );
}

export default ConfettiButton;
