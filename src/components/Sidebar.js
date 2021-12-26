import React from "react";
import {Nav} from "react-bootstrap";
import {GiTiedScroll, GiSkills, GiLaptop} from "react-icons/gi";
import {BsFillPersonFill} from "react-icons/bs";
import {FaHardHat} from "react-icons/fa";



const Sidebar = () => {
   

    return (
        <div className="sidebar">
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/aboutme"><BsFillPersonFill/> About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/education"><GiTiedScroll/> Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/experience"><FaHardHat/> Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/skills" >
                <GiSkills/> Skills
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/projects"> <GiLaptop/> Projects</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </div>
        );
  };
  
  export default Sidebar