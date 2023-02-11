import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
  <Router>
  <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about'  exact component={About}/>
      <Route path='/projects' exact component={Projects}/>
      </Switch>
    </Router>
  
  );
}

export default App;
