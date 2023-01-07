import { useEffect } from 'react' //useEffect - when the component render   || useState removed from here when adding context
import { useProjectsContext } from "../hooks/useProjectsContext"

// components
import ProjectDetails from '../components/ProjectDetails'
import ProjectForm from '../components/ProjectForm'

//CSS
import './AdminHome.css'

const Home = () => {
    //const [projects, setProjects] = useState(null)   --this remove when adding context//
    const {projects, dispatch} = useProjectsContext()

    useEffect(() => {
        const fetchProject = async () => {
            const response = await fetch('/api/yasiru')

            const json = await response.json()

            if(response.ok) {
                //setProjects(json) --this remove when adding context//
                dispatch({type: 'SET_PROJECTS', payload: json})
            }
        }

        fetchProject()
    }, [dispatch])

    return (
        <div className="adminHome">
            <div className="projects">
                {projects && projects.map((project) => (
                    <ProjectDetails key={project._id} project={project}/>
                ))}
            </div>
            <ProjectForm />
        </div>
    )
}

export default Home