import { useParams } from "react-router-dom";
import { Typography, List, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

const comentariosFicticios = [
  { autor: "Marina", texto: "¡Quedó buenísima, la voy a repetir seguro!" },
  { autor: "Tomás", texto: "Le agregué un poco más de sal y estuvo perfecta." },
  { autor: "Lucía", texto: "Receta fácil de seguir, ideal para principiantes." },
];

function Comentarios() {
  const { id } = useParams();

  return (
    <div className="comentarios">
      <Title level={4}>Comentarios de la receta #{id}</Title>
      <List
        itemLayout="horizontal"
        dataSource={comentariosFicticios}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.autor}
              description={item.texto}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Comentarios;
