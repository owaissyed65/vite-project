import React from 'react'
import { ProjectContainer, ProjectImage, ProjectContent } from './ProjectStyle'
const ProjectComponent = (props) => {
    return (
        <ProjectContainer>
            <ProjectImage className="image"><img src={props.image} alt="" /></ProjectImage>
            <ProjectContent className="content">
                <h1 className="title">{props.title}</h1>
                <p style={{marginTop:'0.5rem'}}>{props.description}</p>
                <button className="button-79" role="button"><a href="#">See project</a></button>
            </ProjectContent>
        </ProjectContainer>
    )
}

export default ProjectComponent