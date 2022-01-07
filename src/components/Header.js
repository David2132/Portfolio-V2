
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import {BsFillPinMapFill,BsLinkedin} from "react-icons/bs";
import {GrGithub} from "react-icons/gr";
import ProfilePicture from "../images/profile_picture.jpg";
import {MdEmail} from "react-icons/md";
import resume from "../images/resume.pdf"
const Header = () => {
    const [showModal, setModal] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("DavidDuong75@gmail.com")
        setModal(true)
        setTimeout(() => {
            setModal(false)
        }, 2000)
    }

    return ( 
        <header className="rightSideComponent" id="header">
            <div >
                <img src={ProfilePicture} id="profilePicture"/>
                <a href={resume} without rel="noopener noreferrer" target="_blank">
                    <Button variant="success" id='resumeButton' style={{"color": "gold"}}> 
                        View Resume →
                    </Button>
                </a>
                <h3>David Duong</h3>
                <h5>
                    <a class="icon" onClick={copyEmail} style={{ "marginRight":"5px", "cursor": "pointer"}}>
                        <MdEmail/> 
                    </a>
                    DavidDuong75@gmail.com
                    <br/>
                    <BsFillPinMapFill class="icon"/> Houston, Texas
                    <br/>
                    <a href="https://www.linkedin.com" class="icon" style={{ "marginRight":"10px"}}>
                        <BsLinkedin/>
                    </a> 
                    <a href="https://www.github.com" class="icon">
                        <GrGithub/>
                    </a>
                    
                </h5>
            </div>

            <Modal
            show={showModal}
            backdrop="static"
            >
                <Modal.Header>
                    <h4 style={{"paddingLeft": "20%"}}>
                        Email copied to clipboard!
                    </h4>
                </Modal.Header>

            </Modal>

        </header>
    )
}

export default Header;