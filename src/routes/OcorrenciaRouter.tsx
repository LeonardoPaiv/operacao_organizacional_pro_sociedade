import { Outlet, RouteObject } from "react-router-dom";
import Ocorrencia from "../components/containers/Ocorrencia";
import Analisar from "../pages/Ocorrencia/Analisar";
import Cadastrar from "../pages/Ocorrencia/Cadastrar";
import Visualizar from "../pages/Ocorrencia/Visualizar";

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
            },
            {
                path: 'visualizar/:id',
                element: <Visualizar />
            },
            {
                path: 'analisar/:id',
                element: <Analisar />
            },
        ]
    },
];

export default routes;
