import { useNavigate } from "react-router-dom";
import { Result, Button } from "antd";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <Result
        status="404"
        title="404"
        subTitle="La página que buscás no existe."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            Volver al inicio
          </Button>
        }
      />
    </div>
  );
}

export default NotFound;
