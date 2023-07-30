import { useContext, useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {PokemonListContainer, SectionPokemon, Title} from "./styled"
import { getAllPokemons } from "../../API/request";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const PokemonsListPage = () => {
    const {pokedex, setPokedex, addPokemon} = useContext(GlobalStateContext);
    
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getAllPokemons(setPokemons)
    }, []) 

    const filteredPokemons = pokemons.filter((pokemon) => 
        !pokedex.find((poke)=> poke.name === pokemon.name))
    
    return (
        <PokemonListContainer>
        <Title>Todos Pokémons</Title>
            <SectionPokemon>
                {
                    filteredPokemons.map((poke) => {
                        return (
                            <PokemonCard key={poke.id} poke={poke} pokedex={pokedex} setPokedex={setPokedex} addPokemon={addPokemon}/>
                        )
                    })
                }        
            </SectionPokemon>
        </PokemonListContainer>
    );
};

export default PokemonsListPage;