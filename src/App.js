import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1 className="underline text-3xl py-2">I am Nafisa Akter</h1>
      <h2 className="text-2xl py-2 font-mono font-semibold">
        I am from Dhaka.
      </h2>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
