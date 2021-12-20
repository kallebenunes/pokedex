import { Container } from "./style"  
import { Pokemon } from "../../types/pokemon"
import { FC } from "react"

type PokemonBoardProps = {
    pokemon: Pokemon
}

const PokemonCard:FC<PokemonBoardProps> = ({pokemon}) => {

    
    return (
        <Container key={pokemon.id}>
            <div className="pokemon-image-container">
                <img className="pokemon-image" src={pokemon.img} alt=""/>
                
            </div>
            <p className="pokemon-id">#{String(pokemon.id).padStart(3,"0")}</p>
            <h1 className="pokemon-name">{pokemon.name}</h1>
            <div className="pokemon-type-container">
                {pokemon.type.map(type => {
                    return <span className={`pokemon-type ${type.toLowerCase()}`}>{type}</span>
                })}
            </div>
        </Container>
    )
}
export default PokemonCard