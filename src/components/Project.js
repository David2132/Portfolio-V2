
const Project = ({project}) => {

    return (
        <div className="project">
            <h6 style={{float:"right", paddingTop:"5px"}}>
                Timeline: {project.dateCreated}
            </h6>
            <h4>
                {project.title}
            </h4>
            <b>
                Description:
            </b>
            <p>
                {project.description}
            </p>
            <span>
                <b>Tools used: </b>
                {project.tools}
            </span>

            
               
           
        </div>
    )
}

export default Project