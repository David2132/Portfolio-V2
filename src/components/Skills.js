import { useState } from "react"; 
import Skill from "./Skill"
const Skills = ({skills}) => {
    return (
        <div className="rightSideComponent">
        <h3 className="sectionTitle">
            Skills
        </h3>
        <div id="skillsArea">
            {
                skills.map((skill) => (
                    <Skill 
                    key={skill.id}
                    skill={skill}
                    />
            ))
            }
        </div>
    </div>
    )
}

export default Skills