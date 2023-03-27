import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//import Layout from "./components/Layout.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Props_Ex from "./study/props/props_Ex";
import State_Ex from "./study/state/state_Ex";
import EventHandling_Ex from "./study/eventhandling/eventhandling_Ex";
import Ref_Ex from "./study/ref/ref_Ex";
import Iteration_Ex from "./study/iteration_map_key/map_Ex";
import LifeCycleSample from "./study/lifecycle/lifecycle_Ex";
import ErrorBoundary from "./study/lifecycle/errorCatch";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const [color, setColor] = useState("#000000");

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div>
      <Header />
      <Footer />
      <Props_Ex />
      <State_Ex />
      <EventHandling_Ex />
      <Ref_Ex />
      <Iteration_Ex />
      <br></br>
      <button onClick={handleClick}>랜덤색상</button>
      <ErrorBoundary>
        <LifeCycleSample color={color} />
      </ErrorBoundary>
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
