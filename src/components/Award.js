
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