
const AboutMe = ({description}) => {
    return (
        <div className="rightSideComponent">
        <h3 className="sectionTitle" >
            About Me
        </h3>
        <div id="aboutMeArea">
            <h5>
                {description}
            </h5>
            
        </div>
    </div>
    )
}

export default AboutMe