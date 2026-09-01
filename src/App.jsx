import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Perfil from "./components/Perfil";
import ListaProductos from "./components/ListaProductos";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Detalle from "./pages/Detalle";
import Comentarios from "./pages/Comentarios";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";
import "./App.css";

const { Content, Footer } = Layout;

function App() {
  const [productos] = useState([
    { id: 1, nombre: "Teclado mecánico", precio: 15000 },
    { id: 2, nombre: "Mouse inalámbrico", precio: 8000 },
    { id: 3, nombre: "Monitor 24''", precio: 60000 },
  ]);

  return (
    <BrowserRouter>
      <Layout className="app-layout">
        <Navbar />
        <Perfil
          nombre="Juan"
          apellido="Pérez"
          foto="https://i.pravatar.cc/150?img=12"
        />
        <ListaProductos productos={productos} />
        <Content className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/catalogo/:id" element={<Detalle />}>
              <Route path="comentarios" element={<Comentarios />} />
            </Route>
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer className="app-footer">
          Actividad React Router — Recetario 2026
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
