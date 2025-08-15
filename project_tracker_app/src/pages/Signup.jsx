import { useRef } from "react"
import { useAuth } from "../context/AuthContext.jsx"
import { useNavigate, Link } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    await signup(emailRef.current.value, passwordRef.current.value)
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} placeholder="Email" />
      <input type="password" ref={passwordRef} placeholder="Password" />
      <button type="submit">Signup</button>
      <p>Already have account? <Link to="/login">Login</Link></p>
    </form>
  )
}
