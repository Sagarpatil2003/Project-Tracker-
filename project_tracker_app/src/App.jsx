import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.jsx"
import PrivateRoute from "./routes/PrivateRoute.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import ProjectDetails from "./pages/ProjectDetails.jsx"
import AddProject from "./pages/AddProject.jsx"
import EditProject from "./pages/EditProject.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/project/:id" element={<PrivateRoute><ProjectDetails /></PrivateRoute>} />
          <Route path="/add" element={<PrivateRoute><AddProject /></PrivateRoute>} />
          <Route path="/edit/:id" element={<PrivateRoute><EditProject /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App
