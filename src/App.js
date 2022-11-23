import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Regster from "./pages/Regster";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Attend from "./pages/attend";



import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
     
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regster" element={<Regster />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/attend" element={<Attend />} />





        </Routes>
      </div>
    </>
  )
}

export default App;
