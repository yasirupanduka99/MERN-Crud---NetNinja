import { useState } from 'react'
import { useProjectsContext } from '../hooks/useProjectsContext'

//CSS 
import './ProjectForm.css'

const ProjectForm = () => {
    const { dispatch } = useProjectsContext()

    const [projectTopic, setTopic] = useState('')
    const [projectCategory, setCategory] = useState('')
    const [projectType, setType] = useState('')
    const [projectTimePeriod, setTimePeriod] = useState('')
    const [projectDescription, setDescription] = useState('')
    const [projectTechnologies, setTechnology] = useState('')
    const [projectImage, setImage] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

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
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTopic('')
            setCategory('')
            setType('')
            setTimePeriod('')
            setDescription('')
            setTechnology('')
            setImage('') //these are for after added a new project form will clear to empty
            setError(null)
            setEmptyFields([])
            console.log('😀 New project added!', json)
            dispatch({type: 'CREATE_PROJECT', payload: json})
        }
    }

    return (

        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Project</h3>

            <label>Project Topic:</label>
            <input type="text" onChange={(e) => setTopic(e.target.value)} value={projectTopic} className={emptyFields.includes('projectTopic') ? 'error' : ''} />

            <label htmlFor="category">Project Category:</label>
            <select name="category" id="category" onChange={(e) => setCategory(e.target.value)} value={projectCategory} className={emptyFields.includes('projectCategory') ? 'error' : ''}>
                <option value="" selected disabled hidden>Choose Type</option>
                <option value="Programming">Programming</option>
                <option value="Drawing Stuff">Drawing Stuff</option>
                <option value="3D Stuff">3D Stuff</option>
                <option value="Animations">Animations</option>
            </select>

            <label htmlFor="type">Project Type:</label>
            <select name="type" id="type" onChange={(e) => setType(e.target.value)} value={projectType} className={emptyFields.includes('projectType') ? 'error' : ''}>
                <option value="" selected disabled hidden>Choose Type</option>
                <option value="Personal Project">Personal Project</option>
                <option value="Freelancing Works">Freelancing Works</option>
                <option value="Coloborated Works">Coloborated Works</option>
                <option value="Other">Other</option>
            </select>

            <label>Project Started Date:</label>
            <input type="date" onChange={(e) => setTimePeriod(e.target.value)} value={projectTimePeriod} className={emptyFields.includes('projectTimePeriod') ? 'error' : ''} />

            <label>Project technologies:</label>
            <input type="text" onChange={(e) => setTechnology(e.target.value)} value={projectTechnologies} className={emptyFields.includes('projectTechnologies') ? 'error' : ''} />

            <label>Project Description:</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={projectDescription} className={emptyFields.includes('projectDescription') ? 'error' : ''} />

            <label>Project Image:</label>
            <input type="file" onChange={(e) => setImage(e.target.value)} value={projectImage} className={emptyFields.includes('projectImage') ? 'error' : ''} />

            <button>Add Project</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ProjectForm