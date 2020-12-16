import Layout from '../layout'
import Chart from "../views/Chart";
import Community from "../views/Community";
import Detail from "../views/Detail";
import Mine from "../views/Mine"
import Budget from "../views/Budget";
import Bill from "../views/Bill";
import NotFound from "../views/NotFound";

/* 第一层路由 */
const routes = [
  {
    path: "/",
    exact: true,
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
