import { routes } from "./router/routes";
import renderRoutes from "./router/renderRoutes";

function App() {
  return (
    <div>{renderRoutes(routes)}</div>
  );
}

export default App;
