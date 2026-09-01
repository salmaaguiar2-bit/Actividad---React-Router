import { Card, Avatar, Typography } from "antd";

const { Text } = Typography;

const Perfil = ({ nombre, apellido, foto }) => {
  return (
    <Card className="perfil-card" size="small">
      <Card.Meta
        avatar={<Avatar src={foto} size={64} />}
        title={`${nombre} ${apellido}`}
        description={<Text type="secondary">Perfil de prueba</Text>}
      />
    </Card>
  );
};

export default Perfil;
