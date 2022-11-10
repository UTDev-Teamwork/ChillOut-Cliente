export const Articulo = ({ articulo }) => {
  <div className="card">
    <img
      src={articulo.imagen}
      alt={articulo.descripcion}
    />
    <div className="card-body">
      <p id="nombreArticulo">
        {articulo.descripcion}
      </p>
      <p id="precioArticulo">
        $ {articulo.precio_venta}
      </p>

      <div className="articulo-selector">
        {articulo.stock > 0 ? (
          <div>
            SELECTOR
          </div>
        ) : (
          <div>
            AGOTADO
          </div>
        )}
      </div>
    </div>
  </div>;
};
