// App.js
// ... previous imports stay unchanged 

import Navbar from "./components/Navbar";      // <== IMPORT
import HomePage from "./pages/HomePage";       // <== IMPORT
import AboutPage from "./pages/AboutPage";     // <== IMPORT
import ProjectsPage from "./pages/ProjectsPage";   // <== IMPORT
import ErrorPage from "./pages/ErrorPage";         // <== IMPORT
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import ProjectDetailsPage from "./pages/ProjectDetailsPage"; 
import QueryStringExample from "./pages/QueryStringExample";

import { Routes, Route } from "react-router-dom";  // <== IMPORT

import projectsData from "./projects-data.json"; 

function App() {
  return (
    <div className="App">
      <Navbar />


      
      {/*   Add <Route /> components between <Routes> and </Routes>   */} 
      <Routes>
        {/* <Route path="/" element={<HomePage />} />  */}
        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route 
          path="/projects" 
          element={ <ProjectsPage projects={projectsData} /> } 
        />

        <Route 
          path="/projects/:projectId" 
          element={ <ProjectDetailsPage /> } 
        />

        <Route path="/example" element={ <QueryStringExample /> } />  

        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      
    </div>
  );
}

export default App;

