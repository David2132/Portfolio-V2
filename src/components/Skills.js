import Skill from "./Skill"
import { IconContext } from "react-icons/lib"
const Skills = ({skills}) => {
    return (
        <div className="rightSideComponent">
            <h3 className="sectionTitle">
                Skills
            </h3>
            
            <div id="skillsArea">
            <IconContext.Provider 
            value={{color: "black", size: "2em"}}
            >

                {
                    skills.map((skill) => (
                        <div>
                        <Skill 
                        key={skill.id} 
                        skill={skill}/>
                        </div>
                    ))
                }
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Skills