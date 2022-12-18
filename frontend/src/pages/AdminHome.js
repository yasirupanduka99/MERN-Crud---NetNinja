import { useEffect, useState } from 'react' //useEffect - when the component render

// components
import ProjectDetails from '../componenets/ProjectDetails'

//CSS
import './AdminHome.css'

const Home = () => {
    const [projects, setProjects] = useState(null)

    useEffect(() => {
        const fetchProject = async () => {
            const response = await fetch('/api/yasiru')

            const json = await response.json()

            if(response.ok) {
                setProjects(json)
            }
        }

        fetchProject()
    }, [])

    return (
        <div className="adminHome">
            <div className="projects">
                {projects && projects.map((project) => (
                    <ProjectDetails key={project._id} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Home