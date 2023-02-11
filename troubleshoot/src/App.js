import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <Router>
  <Navbar/>
    <Switch>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      </Switch>
    </Router>
  
  );
}

export default App;
