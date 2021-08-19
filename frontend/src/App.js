import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import history from './history';
import Navbar from './components/navbar';


class App extends Component{

  // componentDidMount() {
  //   fetch("http://localhost:8081/api/heroes")
  //       .then(response => response.json())
  //       .then(data=> console.log(data));
  // }

  render() {
    return (

      <Router history={history}>
        <Navbar />
      <div className="container">
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
