import { createContext, FC, useState, useEffect } from 'react';
import { httpGetClient } from './services/api/httpGetClient';

import { Pokemon } from './types/pokemon';

interface GlobalContextData {
    pokemonList: Pokemon[] 
    filteredPokemonList: Pokemon[]
    setFilteredPokemonList?: any
    setPokemonList?: any
}

const GlobalContext = createContext<GlobalContextData>({pokemonList: [], filteredPokemonList: []});

const GlobalContextProvider:FC<any> = ({children}) => {
    

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([])

    async function getPokemonList (){
      const { data } = await httpGetClient("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      setPokemonList(data.pokemon)
      setFilteredPokemonList(data.pokemon)
    }

    const globalContextData: GlobalContextData = {
        pokemonList,
        filteredPokemonList,
        setFilteredPokemonList,
        setPokemonList
    }

    useEffect(() => {
        getPokemonList()
    }, [])
    
    return (

        <GlobalContext.Provider value={globalContextData}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalContextProvider };
