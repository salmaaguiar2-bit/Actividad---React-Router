import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

function Nosotros() {
  return (
    <div className="page page-centered">
      <Title level={2}>Sobre el proyecto</Title>
      <Card className="nosotros-card">
        <Paragraph>
          Este sitio es un trabajo práctico realizado para la materia de
          desarrollo web, con el objetivo de poner en práctica el manejo de
          rutas en una aplicación de React utilizando la librería{" "}
          <strong>react-router-dom</strong>.
        </Paragraph>
        <Paragraph>
          Toda la navegación de la aplicación (Home, Catálogo, Detalle,
          Comentarios y Nosotros) se resuelve exclusivamente con componentes
          y hooks de React Router: <code>BrowserRouter</code>,{" "}
          <code>Routes</code>, <code>Route</code>, <code>Link</code>,{" "}
          <code>NavLink</code>, <code>useParams</code>,{" "}
          <code>useNavigate</code>, <code>useSearchParams</code> y{" "}
          <code>Outlet</code>.
        </Paragraph>
        <Paragraph>
          Para la parte visual se utilizó la librería <strong>Ant Design</strong>.
        </Paragraph>
      </Card>
    </div>
  );
}

export default Nosotros;
