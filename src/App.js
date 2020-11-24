import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import './App.css';

import Contactus from "./components/home/contactUs/Contactus";
import Home from "./components/home/home/Home";
import Login from "./components/home/login/Login";
import Register from "./components/home/register/Register";
import Trippack from "./components/home/trippackage/Trippack";



function App() {
  return (
    <div className="App">

      <Router>

<nav className="navbar navbar-expand-lg navbar-blue bg-dark">
          <a className="navbar-brand" href="#">
            MyTrip.com
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contactus">
                  ContactUs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Trippack">
                  Mytrip
                </a>
              </li>
            </ul>
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link" href="/Register">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </nav>

      
      <Switch>
      <Route exact path="/" component={Home} />
          <Route path="/Contactus" component={Contactus} />
          <Route path="/Trippack" component={Trippack} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
