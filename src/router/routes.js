import Layout from '../layout'
import Chart from "../views/Chart";
import Community from "../views/Community";
import Detail from "../views/Detail";
import Mine from "../views/Mine"
import Budget from "../views/Budget";
import Bill from "../views/Bill";
import Login from "../views/Login";
import Register from '../views/Register'
import NotFound from "../views/NotFound";

/* 第一层路由 */
const routes = [
  {
    path: "/",
    exact: true,
    component: Layout
  },
  {
    path: "/main",
    component: Layout
  },
  {
    path: "/budget",
    component: Budget
  },
  {
    path: "/bill",
    component: Bill
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register/:step",
    component: Register
  },
  {
    path: "/not-found",
    component: NotFound
  },
];

/* 第二层路由 */
const componentsRoutes = [
  {
    path: "/",
    exact: true,
    component: Detail
  },
  {
    path: "/main/chart",
    component: Chart
  },
  {
    path: "/main/community",
    component: Community
  },
  {
    path: "/main/mine",
    component: Mine
  },
];

export { routes, componentsRoutes };
