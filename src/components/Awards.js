import { useState } from "react"; 
import { IconContext } from "react-icons/lib";
import Award from "./Award"
const Awards = ({awards}) => {
    return (
        <div className="rightSideComponent">
        <h3 className="sectionTitle">
            Awards
        </h3>
        <div id="awardsArea">
            <IconContext.Provider 
            value={{color: "black", size: "2em"}}
            >

                {
                    awards.map((award) => (
                        <Award 
                        key={award.id}
                        award={award}
                        />
                ))
                }
            </IconContext.Provider>
        </div>
    </div>
    )
}

export default Awards