import { useContext } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { MainContainer, PokedexContainer } from "./styled";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const PokedexPage = () => {
    const {pokedex, removePokemon} = useContext(GlobalStateContext);
    return(
        <MainContainer>
        <PokedexContainer>
            {
                pokedex.map((poke) => {
                    return (
                        <PokemonCard poke={poke} removePokemon={removePokemon} />
                    )
                })
            }
        </PokedexContainer>
        </MainContainer>
    )
};

export default PokedexPage;