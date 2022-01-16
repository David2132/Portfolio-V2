import React from "react";
import {Nav} from "react-bootstrap";
import {GiTiedScroll, GiSkills, GiLaptop} from "react-icons/gi";
import {BsFillPersonFill} from "react-icons/bs";
import {FaAward, FaHome, FaHardHat} from "react-icons/fa";



const Sidebar = ({showNavBar, toggleNavBar}) => {
   

    return (
        <div className={showNavBar?"sidebar active":"sidebar"}>
            {/* <span id="exitSidebar">
                X    
            </span> */}
            <Nav id=""
            onClick={toggleNavBar}
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href="/Portfolio-V2/#/"><FaHome/> Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Portfolio-V2/#/aboutme"><BsFillPersonFill/> About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Portfolio-V2/#/experience"><FaHardHat/> Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Portfolio-V2/#/projects"> <GiLaptop/> Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Portfolio-V2/#/skills" >
                <GiSkills/> Skills
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Portfolio-V2/#/education"><GiTiedScroll/> Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Portfolio-V2/#/awards" >
                <FaAward/> Awards
                </Nav.Link>
            </Nav.Item>
            
            </Nav>
          
        </div>
        );
  };
  
  export default Sidebar