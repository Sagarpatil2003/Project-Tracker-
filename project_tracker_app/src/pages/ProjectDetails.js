import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api, addTask, deleteTask, updateTask } from "../api/firebaseApi.jsx"

export default function ProjectDetails() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [taskTitle, setTaskTitle] = useState("")

  useEffect(() => {
    const fetchProject = async () => {
      const res = await api.get(`/projects/${id}.json`)
      setProject({ id, ...res.data })
    }
    fetchProject()
  }, [id])

  const handleAddTask = async () => {
    if (!taskTitle) return
    await addTask(id, { title: taskTitle, completed: false, priority: "low" })
    setTaskTitle("")
  }

  return project ? (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <input value={taskTitle} onChange={e => setTaskTitle(e.target.value)} placeholder="Task title" />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {project.tasks && Object.entries(project.tasks).map(([tid, task]) => (
          <li key={tid}>
            {task.title} - {task.priority}
            <button onClick={() => updateTask(id, tid, { ...task, completed: !task.completed })}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(id, tid)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  ) : <p>Loading...</p>
}
