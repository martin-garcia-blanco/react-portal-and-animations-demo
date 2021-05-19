import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./App.css";

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Animations example <Link to="/animations"> here</Link>
        </p>
        <p>
          Portal example <Link to="/portals"> here</Link>
        </p>
      </header>
    </div>
  );
}

export default Landing;
