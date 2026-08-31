import { Link } from "react-router-dom";
import { Typography, Button, Space } from "antd";

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div className="page page-centered">
      <Title>Bienvenido al Recetario</Title>
      <Paragraph className="home-text">
        Este catálogo reúne una selección de recetas caseras clásicas de la
        cocina argentina: desde milanesas y empanadas hasta postres como el
        flan casero. Navegá el catálogo, explorá el detalle de cada receta y
        descubrí sus ingredientes y preparación.
      </Paragraph>
      <Space>
        <Link to="/catalogo">
          <Button type="primary" size="large">
            Ver catálogo
          </Button>
        </Link>
        <Link to="/nosotros">
          <Button size="large">Nosotros</Button>
        </Link>
      </Space>
    </div>
  );
}

export default Home;
