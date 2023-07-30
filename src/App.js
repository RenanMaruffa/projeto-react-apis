
import ModalPokemon from "./Components/Modal/modal";
import GlobalState from "./Global/GlobalState";
import Router from "./Router/Router";
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
    return (
    <GlobalState>
        <ChakraProvider>
            <ModalPokemon />
            <Router />
        </ChakraProvider>
    </GlobalState>
    );
}
