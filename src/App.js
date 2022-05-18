import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Project from './Project/Project';
import Contact from './Contact/Contact';

function App() {
  return (
    <div>
    <div className="background"></div>
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/project" exact>
          <Project />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
    </div>
  );
}

export default App;
