import "./App.css";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a mi tienda" />
      <ItemDetailContainer id={2} />
    </div>
  );
}

export default App;
