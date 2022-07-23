import "./App.css";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <div className="containerTittle">
        <h2 className="Tittle">Tienda Mock</h2>
      </div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a mi tienda" />
    </div>
  );
}

export default App;
