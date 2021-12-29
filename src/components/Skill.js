import {DiJava, DiGithubBadge, DiReact } from "react-icons/di";
import {HiOutlineDesktopComputer as Computer} from "react-icons/hi"
import {GiProgression as Default} from "react-icons/gi";
import { IoLogoPython, IoLogoHtml5} from "react-icons/io"
import {SiJavascript, SiMysql,SiMongodb, SiPostgresql, SiSpringboot, SiVisualstudio, SiCss3, SiAngular} from "react-icons/si"
import {VscJson} from "react-icons/vsc"
const Skill = ({skill}) => {
    const components = {
        DiJava, 
        SiJavascript, 
        IoLogoPython, 
        DiReact, 
        DiGithubBadge,
        IoLogoHtml5,
        SiMysql,
        SiPostgresql,
        SiSpringboot,
        SiVisualstudio,
        SiCss3,
        Computer,
        SiAngular,
        SiMongodb,
        VscJson
    }

    

    const getComponent = (icon) => {
        const DynamicComponent = components[icon]
        if(DynamicComponent !== undefined) {
            return <DynamicComponent/>
        }
        return <Default/>
        
    }
    return (
        <div className="skill">
            <span className="skillText">
                {getComponent(skill.icon)}
                <br/>
                {skill.skill}
            </span>
            
        </div>
    )
} 

export default Skill