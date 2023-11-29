import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "../components/containers/Main";
import Home from "../pages/Home/Home";
import login from "./loginRoutes";
import ocorrencias from "./OcorrenciaRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Main>
        <Outlet />
      </Main>
    ),
    children: [{ path: "", element: <Home /> }, ...login],
  },
  ...ocorrencias
]);
