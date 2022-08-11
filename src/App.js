import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
