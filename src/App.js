import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';
import Contact from './Contact/Contact';

function App() {
  return (
    <div>
     <Router>
    <div className="background"></div>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch> 
      <Switch>
        <Route path="/project" exact>
          <Project />
        </Route>
        </Switch> 
        <Switch>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
    </Router> 
    </div>
  );
}

export default App;
