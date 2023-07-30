import { useEffect, useState } from "react";
import { DivProgress, ImagesContainer, ImgWrapper, MainContainer, MovesContainer, PStatsName, PStatsNumber, PokeImg, PokeInfosContainer, PokeballImg, ProgressBar, ProgressContainer, StatsContainer, TitleContainer, TypeAndMovesContainer, TypeImg, TypesContainer} from "./styled";
import { getPokemonByName } from "../../API/request";
import { useParams } from "react-router-dom";
import { returnColorCard } from "../../Utils/returnColorCard";
import { returnTypes } from "../../Utils/returnTypes";
import pokeboll from "../../assets/pokeboll.png"

const PokemonDetailPage = () => {
    const [pokemon, setPokemon] = useState({});
    const { nome } = useParams();

    useEffect(() => {
        getPokemonByName(nome, setPokemon); // eslint-disable-next-line
    }, []);

    let pokemonType;
    let pokemonId;
    let pokemonName;

    if ("types" in pokemon) {
        pokemonType = returnColorCard(pokemon.types[0].type.name);
        pokemonId = pokemon.id.toString().length === 1 ? `0${pokemon.id}` : pokemon.id;
        pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
    }

    return (
    <MainContainer>
    <PokeInfosContainer colorType={pokemonType}>
        <ImagesContainer>
            <ImgWrapper src={pokemon.sprites?.front_default} />
            <ImgWrapper src={pokemon.sprites?.back_default} />
        </ImagesContainer>
        <StatsContainer>
            <PokeballImg src={pokeboll}></PokeballImg>
            <PokeImg src={pokemon.sprites?.other["official-artwork"].front_default} alt={`Imagem do Pokemon ${pokemon?.name}`}/>
            <TitleContainer><strong>Base Stats:</strong></TitleContainer>
                <ProgressContainer>
                    {pokemon.stats?.map((poke) => {
                        return (
                            <section>
                                <PStatsName><strong>{poke.stat.name}</strong></PStatsName>
                                    <PStatsNumber>{poke.base_stat}</PStatsNumber>
                                        <DivProgress>
                                            <ProgressBar widthBar={poke.base_stat}></ProgressBar>
                                        </DivProgress>
                            </section>
                        );
                    })}
                </ProgressContainer>
        </StatsContainer>

        <TypeAndMovesContainer>
            <TypesContainer>
                <p>#{pokemonId}</p>
                <h1>{pokemonName}</h1>
                {pokemon.types?.map((poke) => {
                    return <TypeImg src={returnTypes(poke.type.name)} />;
                })}
                
            </TypesContainer>
            <MovesContainer>
                <TitleContainer> <strong>Moves: </strong></TitleContainer>
                    {pokemon.moves?.map((poke, index) => {
                        return index < 5 && <p key={index}>{poke.move.name}</p>;
                    })}
            </MovesContainer>
            </TypeAndMovesContainer>
    </PokeInfosContainer>
    </MainContainer>
);
};

export default PokemonDetailPage;
