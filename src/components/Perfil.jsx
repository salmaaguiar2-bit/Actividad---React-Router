const Perfil = ({ nombre, apellido, foto }) => {
  return (
    <div className="perfil-card">
      <img src={foto} alt={`${nombre} ${apellido}`} className="perfil-foto" />
      <h1>{nombre} {apellido}</h1>
      <h2>Perfil de prueba</h2>
    </div>
  );
};

export default Perfil;
