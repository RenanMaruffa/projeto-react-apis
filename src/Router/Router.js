import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsLisPage from "../Pages/PokemonsListPage/PokemonsListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import Header from "../Components/Header/Header";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"


const Router = () => {

    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<PokemonsLisPage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/detalhes/:nome" element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;