import { useEffect, useState} from 'react'
import { httpGetClient } from '../../services/api/httpGetClient'
import { Container } from './style'
import { Pokemon } from '../../types/pokemon'
import PokemonCard from '../PokemonCard'


const PokemonBoard = () => {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    async function getPokemonList (){
      const { data } = await httpGetClient("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      setPokemonList(data.pokemon)
    }
  
    useEffect(() => {
      getPokemonList()
    },[])


    return (
        <Container>
            {pokemonList.map(pokemon => {
                return (
                    <PokemonCard pokemon={pokemon}/>
                )
            }) }
        </Container>
    )
}

export {PokemonBoard} 