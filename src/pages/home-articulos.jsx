import "./home-articulos.css";
import { useState } from "react";

// Components
import { NavBar } from "./components/navBar/navBar-component";
import { ListaArticulos } from "./components/articulos/listaArticulos/listaArticulos-component";

export const HomePage = () => {
  const [articulos, setArticulos] = useState([]);
  const [numCarrito, setNumCarrito] = useState(0);

  return (
    <div>
      <NavBar />
      <ListaArticulos articulos={articulos} setNumCarrito={setNumCarrito} />
    </div>
  );
};
