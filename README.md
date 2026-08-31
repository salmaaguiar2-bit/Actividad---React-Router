# Recetario — Actividad React Router

**Alumno:** Salma Aguiar

Catálogo de recetas caseras construido con React + Vite, usando
`react-router-dom` para toda la navegación y `antd` (Ant Design) para la
interfaz visual.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Luego abrir la URL que muestra la consola (por defecto `http://localhost:5173`).

Para generar el build de producción:

```bash
npm run build
npm run preview
```

## Rutas implementadas

Todas definidas con `<Routes>` / `<Route>` dentro de un `<BrowserRouter>`
(`src/App.jsx`):

| Ruta | Componente | Descripción |
| --- | --- | --- |
| `/` | `Home` | Presentación del catálogo. |
| `/catalogo` | `Catalogo` | Lista todas las recetas en cards, con buscador por nombre (`?buscar=texto` vía `useSearchParams`). |
| `/catalogo/:id` | `Detalle` | Detalle completo de una receta, leyendo el `id` con `useParams`. Si el `id` no existe muestra "elemento no encontrado" en vez de romper. Incluye botón "Volver al catálogo" programático con `useNavigate`. |
| `/catalogo/:id/comentarios` | `Comentarios` | Ruta anidada dentro del detalle, renderizada mediante `<Outlet />`. |
| `/nosotros` | `Nosotros` | Página estática con información del proyecto. |
| `*` | `NotFound` | Página 404 para cualquier URL no reconocida. |

## Navegación

- Navbar fijo (`src/components/Navbar.jsx`) con `NavLink` a Home, Catálogo y
  Nosotros, resaltando la sección activa con una clase CSS distinta
  (`nav-link-active`).
- Botón "Volver al catálogo" en el detalle implementado con `useNavigate()`
  (no es un `<Link>`).

## Datos

Los datos del catálogo (10 recetas con `id`, `nombre`, `descripcion` e
`imagen`) están hardcodeados en [`src/data.js`](src/data.js), sin backend.

## Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [react-router-dom](https://reactrouter.com/) para el ruteo
- [antd](https://ant.design/) para los componentes visuales
