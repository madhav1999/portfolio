import './App.css';
import {HashRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import ProjectDisplay from './pages/ProjectDisplay';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path='/portfolio' element={<Home/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/project/:id' element={<ProjectDisplay/>}/>
          <Route path='/experience' element={<Experience/>}/>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}


export default App;
