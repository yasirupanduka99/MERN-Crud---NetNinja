import { useState } from 'react'

const ProjectForm = () => {
    
    const [topic, setTopic] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')
    const [timePeriod, setTimePeriod] = useState('')
    const [description, setDescription] = useState('')
    const [technology, setTechnology] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault() // when sumbmit page refresh. so this method prevent refreshing

        const project = { topic, category, type, timePeriod, description, technology, image }

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
            <input type="text" onChange={(e) => setTopic(e.target.value)} value={topic}/>

            <label>Project Category:</label>
            <input type="text" onChange={(e) => setCategory(e.target.value)} value={category} />

            <label>Project Type:</label>
            <input type="text" onChange={(e) => setType(e.target.value)} value={type} />

            <label>Project Started Date:</label>
            <input type="text" onChange={(e) => setTimePeriod(e.target.value)} value={timePeriod} />

            <label>Project Description:</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />

            <label>Project technology:</label>
            <input type="text" onChange={(e) => setTechnology(e.target.value)} value={technology} />

            <label>Project Image:</label>
            <input type="text" onChange={(e) => setImage(e.target.value)} value={image} />

            <button type="submit">Add Project</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ProjectForm