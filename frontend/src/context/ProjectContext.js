import { createContext, useReducer } from 'react'

export const ProjectsContext = createContext()

export const projectsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return {
                projects: action.payload
            }
        case 'CREATE_PROJECT':
            return {
                projects: [action.payload, ...state.projects]
            }
        case 'DELETE_PROJECT':
            return {
                projects: state.projects.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ProjectsContextProvider = ({ children }) => {   //children propety represent that <App /> propety in index.js file //
    const [state, dispatch] = useReducer(projectsReducer, {
        projects: null
    })

    return (
        <ProjectsContext.Provider value={{...state, dispatch}}>
            { children }
        </ProjectsContext.Provider>
    )
}