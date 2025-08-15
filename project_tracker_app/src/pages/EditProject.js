import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api, updateProject } from "../api/firebaseApi"

export default function EditProject() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    api.get(`/projects/${id}.json`).then(res => {
      setTitle(res.data.title)
      setDescription(res.data.description)
    })
  }, [id])

  async function handleSubmit(e) {
    e.preventDefault()
    await updateProject(id, { title, description, createdAt: Date.now() })
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  )
}
