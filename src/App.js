import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/AboutMe/Aboutme"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience"
import Contact from "./components/ContactMe/Contactme"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './App.css';

const router=createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><Home /></>
  },
  {
    path: "/about",
    element:<><Navbar/><About /></>
  },
  {
    path: "/projects",
    element:<><Navbar/><Projects /></>
  },
  {
    path: "/experience",
    element:<><Navbar/><Experience /></>
  },
  {
    path: "/contact",
    element:<><Navbar/><Contact /></>
  },
])
function App() {
  
  return (
    // <div className="App">
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
