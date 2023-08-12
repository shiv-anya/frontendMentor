import React from "react";
import Aggregate from "./Aggregate";
import Summary from "./Summary";
import classes from "./ResultsCard.module.css"

const ResultsCard = () => {
    return (
        <div className={`h-[350px] w-[550px] flex ${classes.card} rounded-[24px] max-md:flex-col max-md:rounded-none max-md:h-[700px]`}>
            <Aggregate/>
            <Summary/>
        </div>
    )
}

export default ResultsCard;