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
import Hooks_UseState_Ex from "./study/hooks/useState_Ex";
import Hooks_UseEffect_Ex from "./study/hooks/useEffect_Ex";
import Hooks_Reducer_Ex from "./study/hooks/useReducer_Ex";
import Hooks_UseMemo_Ex from "./study/hooks/useMemo_Ex";
import Hooks_UseCallback_Ex from "./study/hooks/useCallback_Ex";
import Hooks_UseRef_Ex from "./study/hooks/useRef_Ex";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const [color, setColor] = useState("#000000");
  const [visible, setVisible] = useState(1);

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
      {/* 
      <button onClick={handleClick}>랜덤색상</button>
      <ErrorBoundary>
        <LifeCycleSample color={color} />
      </ErrorBoundary>
      */}
      <Hooks_UseState_Ex />
      <br></br>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <Hooks_UseEffect_Ex />}
      <br></br>
      <Hooks_Reducer_Ex />
      <br></br>
      <Hooks_UseMemo_Ex />
      <br></br>
      <Hooks_UseCallback_Ex />
      <br></br>
      <Hooks_UseRef_Ex />
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
