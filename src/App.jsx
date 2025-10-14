import "./App.css";
import Menu from "./components/common/Menu";
import FooterMenu from "./components/sections/FooterMenu";
import BotonWsp from "./components/ui/BotonWsp";
import Home from "./pages/Home";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <div className="App fondo-gradient  scroll-smooth">
        <Menu></Menu>
        <Home></Home>
        <BotonWsp></BotonWsp>
        <FooterMenu></FooterMenu>
      </div>
    </>
  );
}

export default App;
