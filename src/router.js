import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Product from "@/pages/Product";
import NotFound from "@/pages/NotFound";

const root = document.querySelector("#root");

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Product },
  { path: "/cart", component: Cart },
];

const getRoute = (path) => {
  const route = routes.find((r) => r.path === path);
  return route;
};

const render = (path, param) => {
  const route = getRoute(path);
  return route ? new route.component(root, param) : new NotFound(root);
};

export const navigate = (path, param) => {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", window.location.origin + path);
  return render(path, param);
};

export const initailizeRouter = () => {
  window.addEventListener("popstate", () => render(window.location.pathname));
  render("/");
};
