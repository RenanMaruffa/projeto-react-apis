import { ButtonCapture, ButtonContainer, ButtonDetail, ButtonRemove, ImgContainer, InfoContainer, PokeCardContainer, PokeImg, PokeballImg, TypeImg } from "./styled";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../Router/coordinator";
import { returnTypes } from "../../Utils/returnTypes";
import { returnColorCard } from "../../Utils/returnColorCard"
import pokeboll from "../../assets/pokeboll.png"

const PokemonCard = ({poke, addPokemon, removePokemon}) => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    return (        
        <PokeCardContainer type={returnColorCard(poke.types[0].type.name)}>
            <InfoContainer>
                <p>#{poke.id}</p>
                <h1>{poke.name}</h1>
                <div>
                {
                    poke.types.map((type) => {
                        return (
                            <TypeImg src={returnTypes(type.type.name)} />  // eslint-disable-next-line
                        )
                    })
                }
                </div>
            </InfoContainer>
            <ImgContainer>
                <PokeballImg src={pokeboll}></PokeballImg>
                <PokeImg src={poke.sprites.other["official-artwork"].front_default} alt={`Imagem do Pokemon ${poke.name}`}/>
            </ImgContainer>
           
            <ButtonContainer>
                <ButtonDetail onClick={() => goToDetailPage(navigate, poke.name)}> <u>Detalhes</u></ButtonDetail>
                { pathname === "/" ?
                <ButtonCapture onClick={() => addPokemon(poke)}> Capturar! </ButtonCapture> :
                <ButtonRemove onClick={() => removePokemon(poke.name)}> Remover</ButtonRemove>
                }                    
            </ButtonContainer>
        </PokeCardContainer>
    )
};

export default PokemonCard;