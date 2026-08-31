import { useParams, useNavigate, Link, Outlet } from "react-router-dom";
import { Button, Typography, Result, Image, Divider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import recetas from "../data";

const { Title, Paragraph } = Typography;

function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const receta = recetas.find((r) => r.id === Number(id));

  const volverAlCatalogo = () => {
    navigate("/catalogo");
  };

  if (!receta) {
    return (
      <div className="page">
        <Result
          status="warning"
          title="Elemento no encontrado"
          subTitle={`No existe ninguna receta con el id "${id}" en el catálogo.`}
          extra={
            <Button type="primary" onClick={volverAlCatalogo}>
              Volver al catálogo
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="page">
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={volverAlCatalogo}
        className="boton-volver"
      >
        Volver al catálogo
      </Button>

      <div className="detalle-contenido">
        <Image
          src={receta.imagen}
          alt={receta.nombre}
          width={400}
          className="detalle-imagen"
        />
        <div>
          <Title level={2}>{receta.nombre}</Title>
          <Paragraph className="detalle-descripcion">
            {receta.descripcion}
          </Paragraph>
          <Link to={`/catalogo/${receta.id}/comentarios`}>
            Ver comentarios
          </Link>
        </div>
      </div>

      <Divider />
      <Outlet />
    </div>
  );
}

export default Detalle;
