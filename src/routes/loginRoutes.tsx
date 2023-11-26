import { RouteObject } from "react-router-dom";
import Cadastrar from "../pages/login/Cadastrar";
import Login from "../pages/login/Login";

const routes: RouteObject[] = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "cadastrar",
    element: <Cadastrar />,
  },
];

export default routes;
