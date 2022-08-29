import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";
import { CartContextProvider } from "./Context/CartContext";
import "./firebase";
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Main />
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
