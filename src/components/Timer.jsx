import React from "react";

function Timer() {
    return (
        <div className="py-lg">
            <h2 className="font-500 text-2xl mb-xxl mt-md flex justify-between items-center">
                Countdown Timer
            </h2>
            <div
                className="flex items-center justify-center gap-8 border-2 border-gray-400 rounded-lg p-xl tracking-wide"
                style={{ width: "fit-content", margin: "0 auto" }}
            >
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="text-5xl font-mono">15</span>
                    <span>days</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="text-5xl font-mono">15</span>
                    <span>hours</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="text-5xl font-mono">20</span>
                    <span>minutes</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="text-5xl font-mono">50</span>
                    <span>seconds</span>
                </div>
            </div>
        </div>
    );
}

export default Timer;
