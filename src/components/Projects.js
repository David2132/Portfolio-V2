import Project from "./Project"
const Projects = ({projects}) => {
    return (
        <div className="rightSideComponent" style={{height:"100%"}}>
        <h3 className="sectionTitle">
            Projects
        </h3>
        <div id="projectsArea">
            {
                projects.map((project) => (
                    <Project 
                    key={project.id} 
                    project={project}
                    />
                ))
            }

        </div>
    </div>
    )
}

export default Projects