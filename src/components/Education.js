import { useState } from "react"; 
import { Card } from "react-bootstrap";
import ULL from "../images/ULL.jpg"
import BHS from "../images/BHS.jpg"
const Education = ({education}) => {
    const [showMore, setShowMore] = useState(false);
    const changeShowMore = () => {
        setShowMore(!showMore)
    }
    return (   
        <div className="educationCard">
        <Card className="card" >
            <Card.Img variant="top" style={{ maxHeight:"250px", width: "100%"}} src={education.picture === "BHS" ? BHS:ULL}/>
            <Card.Body style={{marginLeft:"5px"}}>
                <Card.Title>{education.school}</Card.Title>
                <Card.Text>
                    GPA: {education.gpa}
                    <br/>
                    Level: {education.level}
                    <br/>
                    {education.level === "College" ? 
                        <>
                            Major: {education.major} 
                            <br/>
                        </>: ""
                    }
                    Location: {education.location}
                    <br/>
                    Completed: {education.completed}
                    <br/>
                    {showMore ?
                        <>
                            While seeking this level of education:
                            <br/>
                            {
                                education.description
                            }
                            <br/>
                        </>:
                        ""
                    }
                    
                {showMore ?
                    <a className="clickAbleText" onClick={changeShowMore}>
                        Show Less
                    </a>:
                    <a className="clickAbleText" onClick={changeShowMore}>
                        Show More
                    </a>
                }
                </Card.Text>
            </Card.Body>
        </Card> 
        </div>
        
    )
}

export default Education