import { useContext } from 'react'
import { Container } from './style'
import PokemonCard from '../PokemonCard'
import { GlobalContext } from '../../GlobalContext'


const PokemonBoard = () => {

    const {filteredPokemonList} = useContext(GlobalContext)

    return (
        <Container>
            {filteredPokemonList.map(pokemon => {
                return (
                    <PokemonCard pokemon={pokemon}/>
                )
            }) }
        </Container>
    )
}

export {PokemonBoard} 