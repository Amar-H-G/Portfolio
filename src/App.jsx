import "./App.css";
import About from "./containers/about";
import Contact from "./containers/contact";
import Home from "./containers/home";
import Project from "./containers/project";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Experience from "./containers/experience"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <Router basename="/portfolio">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
