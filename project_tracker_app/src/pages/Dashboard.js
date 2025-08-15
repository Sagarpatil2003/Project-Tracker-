import { useEffect, useState } from "react"
import { getProjects, deleteProject } from "../api/firebaseApi.jsx"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"

export default function Dashboard() {
  const [projects, setProjects] = useState([])
  const { logout } = useAuth()

  useEffect(() => {
    getProjects().then(res => {
      setProjects(res.data ? Object.entries(res.data).map(([id, value]) => ({ id, ...value })) : [])
    })
  }, [])

  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Projects</h1>
      <Link to="/add">Add Project</Link>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <Link to={`/project/${p.id}`}>{p.title}</Link>
            <Link to={`/edit/${p.id}`}>Edit</Link>
            <button onClick={() => deleteProject(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
