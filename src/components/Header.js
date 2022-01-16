
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import {BsFillPinMapFill,BsLinkedin} from "react-icons/bs";
import { FaBars } from 'react-icons/fa';
import {GrGithub} from "react-icons/gr";
import ProfilePicture from "../images/profile_picture.jpg";
import {MdEmail} from "react-icons/md";
import resume from "../images/resume.pdf"
import Sidebar from './Sidebar';
const Header = () => {
    const [showModal, setModal] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("DavidDuong75@gmail.com")
        setModal(true)
        setTimeout(() => {
            setModal(false)
        }, 2000)
    }

    const [showNavBar, setNavBar] = useState(false)
    const toggleNavBar = () => {
        setNavBar(!showNavBar)
    }

    return ( 
        <header >
           
            <div id='topBar'>
                <FaBars style={{cursor:"pointer"}} onClick={toggleNavBar}/>
                <Sidebar
                    showNavBar={showNavBar}
                    toggleNavBar={toggleNavBar}
                />
            </div>
            <div id="header">
                
                <img src={ProfilePicture} id="profilePicture" alt='ProfilePicture'/>
                <a href={resume} without rel="noopener noreferrer" target="_blank">
                    <Button variant="success" id='resumeButton' style={{"color": "gold"}}> 
                        View Resume →
                    </Button>
                </a>
                <span id ="headerText" style={{"fontWeight":"bold"}}>
                    David Duong
                    <br/>
                    <a className="icon" onClick={copyEmail} style={{ "marginRight":"5px", "cursor": "pointer"}}>
                        <MdEmail/> 
                    </a>
                    DavidDuong75@gmail.com
                    <br/>
                    <BsFillPinMapFill className="icon"/> Houston, Texas
                    <br/>
                    <a href="https://www.linkedin.com" className="icon" style={{ "marginRight":"10px"}}>
                        <BsLinkedin/>
                    </a> 
                    <a href="https://www.github.com" className="icon">
                        <GrGithub/>
                    </a>
                    
                </span>
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