import { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext"

const GlobalState = ({children}) => {
    const [pokedex, setPokedex] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [controlModal, setControlModal] = useState(1);

    const addPokemon = (pokemon) => {
        setIsOpen(true);
        setControlModal(1);
        setPokedex([...pokedex, pokemon])
    }
    const removePokemon = (pokeName) => {
        setIsOpen(true);
        setControlModal(2);
        setPokedex(pokedex.filter((poke) => poke.name !== pokeName))
    }
    const data = {
        pokedex, setPokedex, addPokemon, removePokemon, isOpen, setIsOpen, controlModal, setControlModal
    };

    return (
        <GlobalStateContext.Provider value={data}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;