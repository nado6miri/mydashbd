import logo from "./logo.svg";
import "./App.css";
//import Layout from "./components/Layout.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Props_Ex from "./study/props/props_Ex";
import State_Ex from "./study/state/state_Ex";
import EventHandling_Ex from "./study/eventhandling/eventhandling_Ex";
import Ref_Ex from "./study/ref/ref_Ex";
import Iteration_Ex from "./study/iteration_map_key/map_Ex";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Props_Ex />
      <State_Ex />
      <EventHandling_Ex />
      <Ref_Ex />
      <Iteration_Ex />
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
