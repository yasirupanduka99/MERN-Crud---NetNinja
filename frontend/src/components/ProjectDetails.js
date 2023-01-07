import { useProjectsContext } from "../hooks/useProjectsContext"

//date-fns package import
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ProjectDetails = ({ project }) => {
    const { dispatch } = useProjectsContext()

    const handleClick = async () => {
        const response = await fetch('/api/yasiru/' + project._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_PROJECT', payload: json})
            console.log('🗑️ ' + project.projectTopic + ' project was Deleted!', json)
        }
    }

    return (
        <div className="project-details">
            <h4>{project.projectTopic}</h4>
            <p><strong>Category: </strong>{project.projectCategory}</p>
            <p><strong>Type: </strong>{project.projectType}</p>
            <p><strong>Date: </strong>{project.projectTimePeriod}</p>
            <p><strong>Technologies: </strong>{project.projectTechnologies}</p>
            <p><strong>Description: </strong>{project.projectDescription}</p>
            <p><strong>Image: </strong>{project.projectImage}</p>
            <p>{formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default ProjectDetails