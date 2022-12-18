import { useState } from 'react'

const ProjectForm = () => {
    
    const [projectTopic, setTopic] = useState('')
    const [projectCategory, setCategory] = useState('')
    const [projectType, setType] = useState('')
    const [projectTimePeriod, setTimePeriod] = useState('')
    const [projectDescription, setDescription] = useState('')
    const [projectTechnologies, setTechnology] = useState('')
    const [projectImage, setImage] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() // when sumbmit page refresh. so this method prevent refreshing

        const project = { projectTopic, projectCategory, projectType, projectTimePeriod, projectDescription, projectTechnologies, projectImage }

        const response = await fetch('/api/yasiru', {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setTopic('')
            setCategory('')
            setType('')
            setTimePeriod('')
            setDescription('')
            setTechnology('')
            setImage('') //these are for after added a new project form will clear to empty
            console.log('New project added!', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}> 
            <h3>Add a New Project</h3>

            <label>Project Topic:</label>
            <input type="text" onChange={(e) => setTopic(e.target.value)} value={projectTopic}/>

            <label>Project Category:</label>
            <input type="text" onChange={(e) => setCategory(e.target.value)} value={projectCategory} />

            <label>Project Type:</label>
            <input type="text" onChange={(e) => setType(e.target.value)} value={projectType} />

            <label>Project Started Date:</label>
            <input type="text" onChange={(e) => setTimePeriod(e.target.value)} value={projectTimePeriod} />

            <label>Project Description:</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={projectDescription} />

            <label>Project technology:</label>
            <input type="text" onChange={(e) => setTechnology(e.target.value)} value={projectTechnologies} />

            <label>Project Image:</label>
            <input type="text" onChange={(e) => setImage(e.target.value)} value={projectImage} />

            <button type="submit">Add Project</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ProjectForm