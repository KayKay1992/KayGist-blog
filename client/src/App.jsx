import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Dashboard from "./Pages/Dashboard"
import SignIn from "./Pages/Signin"
import SignUp from "./Pages/SignUp"
import Header from "./components/Header"


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </BrowserRouter>
  )
}
