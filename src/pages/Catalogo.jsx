import { Link, useSearchParams } from "react-router-dom";
import { Row, Col, Card, Typography, Input, Empty } from "antd";
import recetas from "../data";

const { Title } = Typography;
const { Search } = Input;

function Catalogo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const buscar = searchParams.get("buscar") || "";

  const recetasFiltradas = recetas.filter((receta) =>
    receta.nombre.toLowerCase().includes(buscar.toLowerCase())
  );

  const handleSearch = (valor) => {
    if (valor) {
      setSearchParams({ buscar: valor });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="page">
      <Title level={2}>Catálogo de recetas</Title>

      <Search
        placeholder="Buscar receta por nombre..."
        allowClear
        defaultValue={buscar}
        onSearch={handleSearch}
        onChange={(e) => {
          if (e.target.value === "") setSearchParams({});
        }}
        className="catalogo-buscador"
      />

      {recetasFiltradas.length === 0 ? (
        <Empty description="No se encontraron recetas" />
      ) : (
        <Row gutter={[16, 16]} className="catalogo-grid">
          {recetasFiltradas.map((receta) => (
            <Col xs={24} sm={12} md={8} lg={6} key={receta.id}>
              <Link to={`/catalogo/${receta.id}`}>
                <Card
                  hoverable
                  cover={<img alt={receta.nombre} src={receta.imagen} />}
                >
                  <Card.Meta title={receta.nombre} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Catalogo;
