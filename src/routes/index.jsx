import {createBrowserRouter} from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Sobre } from "../pages/Sobre/Sobre";
import { Produto } from "../pages/Produtos/Produto";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: 'Sobre',
        element: <Sobre/>
    },
    {
        path: 'Produtos',
        element: <Produto/>
    },

])