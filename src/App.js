
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import Sidebar from "./components/Sidebar";
import { useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Educations from "./components/Educations";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Awards from "./components/Awards";
function App() {
  const [experiences, setExperience] = useState([
    {
        id: 1,
        employer: "IBM",
        location: "Baton Rouge, Louisiana",
        start: "February 2019",
        end: "August 2019",
        description: "Implemented a full stack application to allow a perficient to be used during career fairs.",
        position: "Software Developer Intern"
    }, 
    {
        id: 2,
        employer: "Saigon Noodles",
        location: "Lafayette, Louisiana",
        start: "March 2018",
        end: "February 2020",
        description: "Implemented a full stack application to allow a perficient to be used during career fairs.",
        position: "Manager/Server"
    }, 
    {
        id: 3,
        employer: "360Fuel",
        location: "Baton Rouge, Louisiana",
        start: "March 2020",
        end: "June 2020",
        position: "Full Stack Developer - Part Time"
    }, 
    {
        id: 4,
        employer: "KBR - Johnson Space Center",
        location: "Houston, Texas",
        start: "June 2020",
        end: "Present",
        position: "Software Engineer"
    }
  ])

  const [educations, setEducations] = useState([
    {
        id: 1,
        school: "Bogalusa High School",
        location: "Bogalusa, Louisiana",
        completed: "May 2016",
        description: "Implemented a full stack application to allow a perficient to be used during career fairs.",
        level: "High School",
        gpa: "3.9",
        major: null,
        picture:"BHS"
    }, 
    {
        id: 2,
        school: "University of Louisiana at Lafayette",
        location: "Lafayette, Louisiana",
        completed: "May 2020",
        description: "Implemented a full stack application to allow a perficient to be used during career fairs.",
        level: "College",
        gpa: "3.6",
        major: "Computer Science",
        picture:"ULL"

    }
    
  ])

  const [awards, setAwards] = useState([
    {
      id: 1,
      title: "Salutatorian",
      timeFrame: "Sping 2016"
    },
    {
      id: 2,
      title: "Dean's List",
      timeFrame: "Spring 2017"
    }, 
    {
      id: 3,
      title: "Dean's List",
      timeFrame: "Spring 2019"

    },
    {
      id: 4,
      title: "Dean's List",
      timeFrame: "Spring 2020"
    },
    {
      id: 5,
      title: "Frank Piccione, Sr. Scholarship",
      timeFrame: "Fall 2019 - Spring 2020"

    },
    {
      id: 6,
      title: "TOPS Scholarship",
      timeFrame: "Fall 2016 - Spring 2020"
  }
    
  ])

  const [skills, setSkillss] = useState([
    {
      id: 1,
      skill: "Java",
      icon: "DiJava"
    },
    {
      id: 2,
      skill: "JavaScript",
      icon: "SiJavascript"
    },
    {
      id: 3,
      skill: "Python",
      icon: "IoLogoPython"
    },
    {
      id: 4,
      skill: "React",
      icon: "DiReact"
    },
    {
      id: 5,
      skill: "GitHub",
      icon: "DiGithubBadge"
    }, 
    {
      id: 6,
      skill: "C/C++",
      icon: "Computer"
    },
    {
      id: 7,
      skill: "Angular",
      icon: "SiAngular"
    },
    {
      id: 8,
      skill: "AssertJ",
      icon: "Computer"
    },
    {
      id: 9,
      skill: "PostGresSQL",
      icon: "SiPostgresql"
    },
    {
      id: 10,
      skill: "MySQL",
      icon: "SiMysql"
    }, 
    {
      id: 11,
      skill: "MongoDB",
      icon: "SiMongodb"
    },
    {
      id: 12,
      skill: "JavaScript",
      icon: "SiJavascript"
    },
    {
      id: 13,
      skill: "Full Stack Development",
      icon: "Computer"
    },
    {
      id: 14,
      skill: "JavaFx",
      icon: "Computer"
    },
    {
      id: 15,
      skill: "JavaSwing",
      icon: "Computer"
    }, 
    {
      id: 16,
      skill: "Agile",
      icon: "Default"
    },
    {
      id: 17,
      skill: "SpringBoot",
      icon: "SiSpringboot"
    },
    {
      id: 18,
      skill: "JSON",
      icon: "VscJson"
    },
    {
      id: 19,
      skill: "RESTful API",
      icon: "Computer"
    },
  ])

  return (
    <div className="App">
      <Sidebar style={{"float":'left'}}/>
      <Header />
      <Router>
        <Switch>
          <Route path="/aboutme">
            <AboutMe/>
          </Route>
          <Route path="/education">
            { educations.length > 0 ?
              <Educations
              educations={educations.reverse()} 
              />

            : "Error has occurred while trying to connect to the backend. Please try again later!"  
            }
            
          </Route>
          <Route path="/experience">
            { experiences.length > 0 ?
              <Experiences 
                experiences={experiences.reverse()} 
              />
            : "Error has occurred while trying to connect to the backend. Please try again later!"  
            }
          </Route>
          <Route path="/awards">
            <Awards awards={awards.reverse()}/>
          </Route>
          <Route path="/skills">
            <Skills skills={skills}/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
