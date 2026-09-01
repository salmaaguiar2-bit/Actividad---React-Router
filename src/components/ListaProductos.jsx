import Producto from "./Producto";

const ListaProductos = ({ productos }) => {
  return (
    <div className="lista-productos">
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ListaProductos;
