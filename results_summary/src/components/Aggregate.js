import React from "react";
import classes from "./Aggregate.module.css"

const Aggregate = () => {
    return (
        <div className={`flex-1 rounded-[24px] p-6 flex flex-col justify-between items-center text-center ${classes.card} max-md:rounded-t-none`}>
            <h1 className="text-[#c8c7ff] font-semibold">Your Result</h1>
            <div className={`h-[150px] w-[150px] rounded-full flex flex-col justify-center items-center text-xs ${classes.blob}`}><p className="text-[#fff] text-[48px] font-bold mb-5">76</p><p className="text-[#c8c7ffc5] font-semibold">of 100</p></div>
            <div>
                <p className="mb-4 text-white text-lg font-semibold">Great</p>
                <p className="font-semibold text-xs text-[#c8c7ff]">You scored higher than 65% of <br/>the people who have taken <br/>these tests.</p>
            </div>
        </div>
    )
}

export default Aggregate;