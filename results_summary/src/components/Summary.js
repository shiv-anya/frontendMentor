import React from "react"
import Reaction from "../assets/images/icon-reaction.svg"
import Memory from "../assets/images/icon-memory.svg"
import Visual from "../assets/images/icon-visual.svg"
import Verbal from "../assets/images/icon-verbal.svg"
import ResultsValueCard from "./ResultsValueCard";
import classes from "./Aggregate.module.css"

const Summary = () => {
    const data = [
        {
          category: "Reaction",
          score: 80,
          icon: Reaction,
          bg: "Red"
        },
        {
          category: "Memory",
          score: 92,
          icon: Memory,
          bg: "Orangey"
        },
        {
          category: "Verbal",
          score: 61,
          icon: Verbal,
          bg: "Green"
        },
        {
          category: "Visual",
          score: 72,
          icon: Visual,
          bg: "Cobalt"
        }
      ]      
    return (
        <div className="flex-1 p-6 flex flex-col justify-between max-md:items-center">
            <h1 className="font-semibold text-left">Summary</h1>
            <div>
                {data.map((val,index) => <ResultsValueCard key={index} id={index} icon={val.icon} category={val.category} score={val.score} bg={val.bg}/>)}
            </div>
            <button className={`bg-[#303b5a] py-2 px-2 rounded-full text-white font-semibold ${classes.btn} max-md:w-full`}>Continue</button>
        </div>
    )
}

export default Summary;