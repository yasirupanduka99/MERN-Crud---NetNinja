const ProjectDetails = ({ project }) => {
    return (
        <div className="project-details">
            <h4>{project.projectTopic}</h4>
            <p><strong>Category: </strong>{project.projectCategory}</p>
            <p><strong>Type: </strong>{project.projectType}</p>
            <p><strong>Time-Period: </strong>{project.projectTimePeriod}</p>
            <p><strong>Technologies: </strong>{project.projectTechnologies}</p>
            <p><strong>Description: </strong>{project.projectDescription}</p>
            <p><strong>Image: </strong>{project.projectImage}</p>
            <p>{project.createdAt}</p>
        </div>
    )
}

export default ProjectDetails