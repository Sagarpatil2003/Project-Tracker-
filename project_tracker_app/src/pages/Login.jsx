import { useRef } from "react"
import { useAuth } from "../context/AuthContext.jsx"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    await login(emailRef.current.value, passwordRef.current.value)
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} placeholder="Email" />
      <input type="password" ref={passwordRef} placeholder="Password" />
      <button type="submit">Login</button>
      <p>No account? <Link to="/signup">Signup</Link></p>
    </form>
  )
}
