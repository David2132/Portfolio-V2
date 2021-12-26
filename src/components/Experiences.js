import Experience from "./Experience";
import Accordion from 'react-bootstrap/Accordion'
const Experiences = ({experiences}) => {
    
    return (
        <div className="rightSideComponent">
            <h3 className="sectionTitle">
                Experience
            </h3>
            <Accordion defaultActiveKey="0">
            {experiences.map((experience) => (
                <Experience 
                    key = {experience.id} 
                    experience = {experience} 
                />
            )
            )}
            </Accordion>
        </div>
    )
}

Experiences.defaultProps = {
    experiences: [
        {
            id: -1,
            employer: "",
            location: "",
            start: "",
            end: "",
            position: ""

        }
    ]
}
export default Experiences