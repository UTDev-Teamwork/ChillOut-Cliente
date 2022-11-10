import { Articulo } from "./articuloHome/articulo-component";

export const ListaArticulos = ({ articulos }) => {
  return (
    <div className="lista-articulos">
      {articulos.map((articulo, index) => (
        <div key={index} className="articulo">
            <Articulo articulo={articulo}/>
        </div>
      ))}
    </div>
  );
};
