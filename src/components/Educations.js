import { useState } from "react"; 
import Education from "./Education";

const Educations = ({educations}) => {
    console.log(educations.length)
    return (
        <div>
        <h3 className="sectionTitle">
            Education
        </h3>
        <div id="educationArea">
            {
                educations.map((education) => (
                    <Education 
                    key={education.id}
                    education={education}
                    
                    />
                ))
            }
        </div>
        
    </div>
    )
}

export default Educations