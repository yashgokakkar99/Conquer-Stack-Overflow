import {Route, Routes} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (<>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  </>
  );
}

export default App;
