import { createBrowserRouter, Outlet } from "react-router-dom";
import Main from "../components/containers/Main";
import login from "./loginRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Main>
        <Outlet />
      </Main>
    ),
    children: [...login],
  },
]);
