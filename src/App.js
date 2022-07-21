import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <div className="containerTittle">
        <h2 className="Tittle">Tienda Mock</h2>
        <img
          alt=""
          className="logoImage"
          src="https://cdn-icons-png.flaticon.com/512/6662/6662930.png"
        />
      </div>

      <NavBar />
    </div>
  );
}

export default App;
