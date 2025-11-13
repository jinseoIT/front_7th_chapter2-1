import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";
import NotFound from "@/pages/NotFound";

const root = document.querySelector("#root");
let currentPageComponent = null; // 현재 페이지 컴포넌트 추적

const routes = [
  { path: "/", component: HomePage },
  { path: "/product/:id", component: ProductPage },
];

const pathToRegex = (path) => new RegExp(`^${path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)")}$`);

// 경로에서 파라미터 이름 추출
const extractParamNames = (routePath) => (routePath.match(/:\w+/g) || []).map((param) => param.slice(1));

// 매칭 결과에서 파라미터 객체 생성
const buildParams = (paramNames, matchResult) =>
  paramNames.reduce((params, paramName, index) => {
    params[paramName] = matchResult[index + 1];
    return params;
  }, {});

// 경로 매칭 및 파라미터 추출
const matchRoute = (route, path) => {
  const regex = pathToRegex(route.path);
  const match = path.match(regex);
  if (!match) return null;

  const paramNames = extractParamNames(route.path);
  const params = buildParams(paramNames, match);
  return { route, isMatch: match, params };
};

export const getMatch = (path) => {
  const matchedRoute = routes.map((route) => matchRoute(route, path)).find((result) => result !== null);
  return matchedRoute || null;
};

export const render = (path, param) => {
  // 이전 페이지 컴포넌트 unmount
  if (currentPageComponent && typeof currentPageComponent.unmount === "function") {
    currentPageComponent.unmount();
  }

  const match = getMatch(path);
  // param이 있으면 우선 사용, 없으면 매칭된 params 사용
  const finalParam = param || match?.params || {};
  const newComponent = match ? new match.route.component(root, finalParam) : new NotFound(root);

  // 새로운 페이지 컴포넌트 저장
  currentPageComponent = newComponent;

  return newComponent;
};

export const navigateTo = (path, param) => {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", window.location.origin + path);
    return render(path, param);
  }
};

export const initailizeRouter = () => {
  window.addEventListener("popstate", () => render(window.location.pathname));
  const currentPath = window.location.pathname;
  render(currentPath);
};
