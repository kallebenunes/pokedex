import { useContext } from 'react'
import { Container, NotFound } from './style'
import PokemonCard from '../PokemonCard'
import { GlobalContext } from '../../GlobalContext'


const PokemonBoard = () => {

    const {filteredPokemonList} = useContext(GlobalContext)

    return (
        
            filteredPokemonList.length > 0 
            ?(
                <Container>
                {filteredPokemonList.map(pokemon => {
                    return (
                        <PokemonCard pokemon={pokemon}/>
                    )
                })} 
                </Container>
            ) 
            : <NotFound>Não foi possível localizar pokemons</NotFound>
        
    )
}

export {PokemonBoard} 