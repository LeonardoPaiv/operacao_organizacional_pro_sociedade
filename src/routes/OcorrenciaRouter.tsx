import { Outlet, RouteObject } from "react-router-dom";
import Ocorrencia from "../components/containers/Ocorrencia";
import Cadastrar from "../pages/Ocorrencia/Cadastrar";

const routes: RouteObject[] = [
    {
        path: 'ocorrencia',
        element: <Ocorrencia>
            <Outlet/>
        </Ocorrencia >,
        children: [
            {
                path: 'cadastrar',
                element: <Cadastrar />
            }
        ]
    },
];

export default routes;
