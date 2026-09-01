const Producto = ({ producto }) => {
  return (
    <div className="producto-card">
      <h3>{producto.nombre}</h3>
      <p>${producto.precio}</p>
    </div>
  );
};

export default Producto;
