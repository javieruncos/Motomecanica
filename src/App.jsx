import "./App.css";
import Menu from "./components/common/Menu";
import Home from "./pages/Home";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <div className="App fondo-gradient">
        <Menu></Menu>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
