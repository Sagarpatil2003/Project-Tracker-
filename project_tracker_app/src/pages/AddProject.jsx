import { useState } from "react"
import { addProject } from "../api/firebaseApi.js"
import { useNavigate } from "react-router-dom"

export default function AddProject() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    await addProject({ title, description, createdAt: Date.now(), tasks: {} })
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Add Project</button>
    </form>
  )
}
