import { useState } from "react"
import Accordion from 'react-bootstrap/Accordion'
const Experience = ({experience}) => {
    const [showDescription, setShowDescription ]= useState(false)

    const changeDescription = () => {
        setShowDescription(!showDescription)
        console.log(showDescription)
    }
    return <Accordion.Item className='experience' onClick={changeDescription} eventKey={experience.id}>
            <Accordion.Header>
                <div style={{"width":"95%"}}>
                    <div className="floatLeft">
                        <h4>
                            {experience.employer} 
                            
                        </h4>
                        <br/>
                            {experience.position} 
                    </div>
                    <div className="floatRight">
                        <h4 >
                            {experience.start} - {experience.end}
                        </h4>
                        <br/>
                        
                        {experience.location}
                    </div>
                </div>
                </Accordion.Header>
            <Accordion.Body>
               
                    {experience.description}
            </Accordion.Body>
    </Accordion.Item>
}

export default Experience