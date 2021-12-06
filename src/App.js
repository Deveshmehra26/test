import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Welcome } from "./components/welcome/Welcome";
import { Bar } from "./components/graph/bar/Bar";
import { Pie } from "./components/graph/pie/Pie";
import { Spline } from "./components/graph/spline/Spline";
import { Basic } from "./components/graph/basic/Basic";
import { Drilldown } from "./components/graph/drilldown/Drilldown";


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              Radiowalla
              {/* <img 
                alt=""
                src="/rw-logo.png" 
                width="30px" 
                height="30px" 
                className="d-inline-block align-top"/>{' '} */}
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {/* <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to=>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to=>Sign up</Link>
              </li>
            </ul> */}
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/bar" element={<Bar />} />
          <Route exact path="/basic" element={<Basic />} />
          <Route exact path="/drilldown" element={<Drilldown/>} />
          <Route exact path="/pie" element={<Pie />} />
          <Route exact path="/spline" element={<Spline />} />
        </Routes>
        {/* <Bar></Bar> */}
      </div>
    </Router>
  );
}

export default App;
