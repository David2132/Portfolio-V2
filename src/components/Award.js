import { useState } from "react"; 
// import {GiProgression} from "react-icons/gi"
import {FaJava} from "react-icons/fa"


const Award = ({award}) => {

    return (
        <div className="awardPlate">
        <h5>
            {award.title}
            <br/>
            {award.timeFrame}
        </h5>
        </div>
    )
}

export default Award