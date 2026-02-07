
import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";

const routes = [...routesClient, ...routesAdmin];

export default routes;
