import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import CredentialView from './pages/CredentialView';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link> <br/>
        <Link to="/credential/Tom">Credential Tom</Link><br/>
        <Link to="/credential/Jerry">Credential Jerry</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home  />
        </Route>

        <Route path="/credential/:name">
          <CredentialView  />
        </Route>
      </Switch>
    </Router>
);
}

export default App;
