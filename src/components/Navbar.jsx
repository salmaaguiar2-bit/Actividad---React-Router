import { NavLink } from "react-router-dom";
import { Layout } from "antd";

const { Header } = Layout;

const links = [
  { to: "/", label: "Home" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/nosotros", label: "Nosotros" },
];

function Navbar() {
  return (
    <Header className="navbar">
      <div className="navbar-brand">🍲 Recetario</div>
      <nav className="navbar-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </Header>
  );
}

export default Navbar;
