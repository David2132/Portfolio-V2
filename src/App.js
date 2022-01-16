
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import Sidebar from "./components/Sidebar";
import { useState } from "react"
import {
  BrowserRouter as Router,
  HashRouter,
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
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  const [experiences, setExperience] = useState([
    {
        id: 1,
        employer: "IBM",
        location: "Baton Rouge, Louisiana",
        start: "February 2019",
        end: "September 2019",
        description: ["Learned and excuted the methods of Agile for projects",
          "Proactively delivered products to users before deadlines",
          "Full Stack development using React, Spring Boot, MySql",
          "Full Stack development using  Angular, NodeJs, MySql",
          "Front End development using React",
          "Collaborated with team member during development"
          ],
        position: "Application Development Specialist Intern"
    }, 
    {
        id: 2,
        employer: "Saigon Noodles",
        location: "Lafayette, Louisiana",
        start: "May 2019",
        end: "February 2020",
        description: ["Maintained adequate inventory",
          "Trained new employees",
          "Focused on Customers’ Satisfaction", 
          "Maintained restaurant's appearance",
          "Cultivated coworkers", 
          
          ],
        position: "Manager/Server"
    }, 
    {
        id: 3,
        employer: "360Fuel",
        location: "Baton Rouge, Louisiana",
        start: "February 2020",
        end: "June 2020",
        description: ["Developed a gui application displayed at the gas pumps",
          "Proactively scheduled meetings with cowokers and owner",
          "Full stack development using JavaScript, Html, Django, PostGres",
          "Collaborated with team members to resolve issues",
          "Proactively researched technologies and methods to enhance business and users' experience"
          ],
        position: "Full Stack Developer - Part Time"
    }, 
    {
        id: 4,
        employer: "KBR - Johnson Space Center",
        location: "Houston, Texas",
        start: "June 2020",
        end: "Present",
        description: ["Gui application development to aid simulation", 
          "RHEL6 to RHEL8 upgrade for applications", 
          "Precision time upgrade for applications",
          "Developer biweekly reports",
          "Demo applications",
          "Create fest/assertJ test code",
          "Database entity creations in oracle",
          "Collaborated with team members gui and database design",
          "Creating and maintaing applications' documention",
          "Productively scheduled meetings with team members and users"
          ],
        position: "Software Engineer"
    }
  ])

  const [educations, setEducations] = useState([
    {
        id: 1,
        school: "Bogalusa High School",
        location: "Bogalusa, Louisiana",
        completed: "May 2016",
        description: ["Rifle Team - JROTC",
          "Drill Team - JROTC",
          "Over 40 community service hours for JROTC",
          "Graduated as Salutatorian",
          ],
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
        description: ["Obtained Multiple Dean’s List",
          "Software Developer at IBM",
          "Part time full stack developer at 360Fuel",
          "Nursing major for two years",
          "Tested out of two classes",
          "Graduated with 160 credit hours in four years"
          ],
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
      skill: "PostgresSQL",
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

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Recruitment App",
      description: "A frontend web application which allow the user to effeciently add/edit candidates information during an interview at a hosted IBM career fair. The user can also see the list of candidates and see the offers given by other users and allows to see which interviewer is ready for another candidate.",
      dateCreated: "July 2019",
      tools: "Angular 8, Postman, Jasmine & Karma, HTML5, CSS3"
    },
    {
      id: 2,
      title: "Employee Site",
      description: "Full Stack web application allowing users to access the list of employees and mutate the list/employee. This project has two different stacks used to code the frontend and backend. One iteration used Angular for frontend and NodeJs as backend. The second iteration used React as frontend and SpringBoot as the backend.",
      dateCreated: "July 2019",
      tools: "Spring Boot, React, Angular 8, NodeJs, MySQL, Postman, HTML5, CSS, JSON"
    },
    {
      id: 3,
      title: "IOS Development Course",
      description: "A class to instruct individuals on IOS mobile application development development on Mac OS. Some projects include coding: a calculator, a photo album which was connected to a Restful API, and more.",
      dateCreated: "Fall 2019",
      tools: "XCode, SwiftUI, Swift"
    },
    {
      id: 4,
      title: "Hospital Full Stack",
      description: "A Full Stack project which kept track of the patients' information (name, gender, birthdate, diagnonis, etc), the employees' information (name, schedule, working floor number, position, etc), the hospital's count of medicication on hand, the medicaiton requested from the hospital to a pharmaceutical company, and the pharmaceutical company's on hand medication. This was a school project and idea was thought of by an intern at a medical center.",
      dateCreated: "Spring 2020",
      tools: "React, NodeJs, MySQL, HTML5, CSS3"
    },
    {
      id: 5,
      title: "Applications upgrade to RHEL 8 upgrade from RHEL 6",
      description: "Convert and test multiple applications from RHEL 6 to RHEL 8. Projects with issues needed some type of code changes, peer reviews, and documentation changes.",
      dateCreated: "December 2020 - April 2021",
      tools: "Netbeans, Linux, RHEL 6, RHEL 8, Java"
    },
    {
      id: 6,
      title: "Application upgrade from Miliseconds to Nanoseconds",
      description: "A task to change the FreeFlyer code for more precision in calculations. This change involved using a different version of FreeFlyer and its methods. While changing some of the FreeFlyer code, test files had to be reran and adjusted based on the new precision.",
      dateCreated: "June 2021 - August 2021",
      tools: "Netbeans, Java, FreeFlyer"
    },
    {
      id: 7,
      title: "Vav Gui",
      description: "A graphical user inferace which allows the users to add force models based on time in the database. The added data is then used in a different application for a space simulation to help with projection of a spacecraft in orbit. The gui allows the users to import/export to be used on other activities if data is not available.",
      dateCreated: "September 2021 - January 2022",
      tools: "Java, JavaSwing, AssertJ, Java Persistence"
    },
    {
      id: 8,
      title: "Portfolio V2",
      description: "Portfolio V2 is a web application to showcase my projects and resume in a well designed format.",
      dateCreated: "December 2021",
      tools: "React, HTML5, CSS3, React-Bootstrap "
    }
  ])
  console.log("hi")
  console.log(process.env.PUBLIC_URL)
  const description = " Hello, I am David Duong. I am a software engineer working at the NASA Johnson Space Center in Houston, Texas employed through KBR. Even though I graduated with a computer science degree, I was actually majoring in nursing my first two years of school. After two years of nursing school and having practical experience in the hospital, I realized a nursing career was not for me. With some inspiration from others, I decided to try coding and instantly fell in love. With this new passion of coding, I was able to test out of two classes, obtain an internship at IBM, be a part time full stack developer at 360Fuel, graduate with over 160 credit hours, and land a position as  a contracting software engineer at the NASA Johnson Space Center within two years of changing my major. \
  My eagerness to learn and adapt to coding led me to obtaining the position ‘Application Development Specialist Intern’ at IBM six month after changing my major to computer science. There, I was able to learn frontend development, backend development, database concepts, and agile methods through the individual/team given projects. I even led a few demos on some frontend projects which were used during the IBM career fair.\
  Six months after my internship at IBM, I received an offer to be a part time ‘Full Stack Developer’ at 360Fuel. This is where I developed a lot of my creative development in frontend development. I was in charge of developing/maintaining the user interface shown at the gasoline pumps, including advertisement, gas prices,user’s gas charges, etc.\
  A month after I obtained my bachelor’s degree, I started my current position at NASA Johnson Space Center. Here, I did many application upgrades (upgrades to Red Hat 6 to Red Hat 8, time upgrade from millisecond to nanosecond, deprecated code, etc.), create test files, create a graphical user interface called VAV, and more. VAV is a user interface to allow the adjustment of vents to be stored. Once stored, the stored vents are used when running spacecraft simulation during travel. This is my most notable project because of how much I have been involved with it from developing to demoing to users to documentation.\
  Problem solving and creating something from an idea to being able to be used by others is what gives me passion from coding. I will always consider myself as a “studious person,” always trying to stay tuned with the latest technologies/methods to efficiently code and try to apply the knowledge to what I am developing today. \
  I am seeking more opportunities to chase my passion in development."

  return (
    <div className="App">
      <Header />
      <div className="contentBody" style={{"minHeight": "75vh"}}> 
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/aboutme">
              <AboutMe description={description}/>
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
              <Projects projects={projects.reverse()}/>
            </Route>
          </Switch>
        </HashRouter>
        
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
