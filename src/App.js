import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/AboutMe/Aboutme"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience"
import Contact from "./components/ContactMe/Contactme"
import Footer from "./components/Footer/Footer"
import Response from "./components/Response/Response"
import LoginResponse from "./components/LoginResponse/LoginResponse"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./UserContext"
import './App.css';

const router=createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><Home /><Footer/></>
  },
  {
    path: "/about",
    element:<><Navbar/><About /><Footer/></>
  },
  {
    path: "/projects",
    element:<><Navbar/><Projects /><Footer/></>
  },
  {
    path: "/experience",
    element:<><Navbar/><Experience /><Footer/></>
  },
  {
    path: "/contact",
    element:<><Navbar/><Contact /><Footer/></>
  },
  {
    path:"/response",
    element:<><Navbar/><Response /><Footer /></>  
   },
   {
    path:"/login-response",
    element:<><Navbar/><LoginResponse/><Footer /></>
   },
   {
    basename: "/Official_Portfolio"
  }
   
])
function App() {
  
  return (
    // <div className="App">
    // </div>
    <><UserContextProvider>
      <RouterProvider router={router} />
      </UserContextProvider>
    </>
    
  );
}

export default App;
