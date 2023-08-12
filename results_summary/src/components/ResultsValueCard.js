import React from "react";

const ResultsValueCard = (props) => {
    return (
        <div key={props.id} className={`flex py-2 pl-2 pr-3 w-[240px] my-2 justify-between rounded-lg bg-${props.bg}`}>
            <img src={props.icon} alt="icon"/>
            <p>{props.category}</p>
            <p>{props.score} /100</p>
        </div>
    )
}

export default ResultsValueCard;