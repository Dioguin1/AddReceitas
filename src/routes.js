import { BrowserRouter, Routes, Route } from "react-router-dom";


import DetalhesReceita from "./paginas/Ingredientes";

import Header from "./componentes/cabecalho";

import Erro from "./paginas/erro";

import ListaTitulosReceitas from "./paginas/Receitas";
import CriarReceita from "./paginas/addReceita";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<ListaTitulosReceitas />}></Route>
                <Route path="/detalhes/:id" element={<DetalhesReceita />} />
                <Route path="*" element={<Erro />}></Route>
                <Route path="/nova" element={<CriarReceita />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;

//<Route path="/add" element={<Sobre />}></Route>