import axios from "axios"

const BASE_URL = "https://YOUR_DB_URL"

export const api = axios.create({
  baseURL: BASE_URL
})

export function getProjects() {
  return api.get("/projects.json")
}

export function addProject(project) {
  return api.post("/projects.json", project)
}

export function updateProject(id, project) {
  return api.put(`/projects/${id}.json`, project)
}

export function deleteProject(id) {
  return api.delete(`/projects/${id}.json`)
}

export function addTask(projectId, task) {
  return api.post(`/projects/${projectId}/tasks.json`, task)
}

export function updateTask(projectId, taskId, task) {
  return api.put(`/projects/${projectId}/tasks/${taskId}.json`, task)
}

export function deleteTask(projectId, taskId) {
  return api.delete(`/projects/${projectId}/tasks/${taskId}.json`)
}
