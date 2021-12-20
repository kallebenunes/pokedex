import { ChangeEvent,FormEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../GlobalContext'
import {Container} from './style'

const SearchBar = () => {
    
    const {pokemonList, setFilteredPokemonList} = useContext(GlobalContext)

    const [inputSearch, setInputSearch] = useState("")
    

    function handleInputSearch(e: ChangeEvent<HTMLInputElement>){
        setInputSearch(e.target.value)
     
    }

    function handleSubmitForm(e: FormEvent<HTMLFormElement> ){
        e.preventDefault()
        const filteredArray = pokemonList.filter(item =>{
            return item.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
            item.id === Number(inputSearch)
        })
       
        setFilteredPokemonList(filteredArray)
    }


    return (
        <Container>
            <form onSubmit={handleSubmitForm} id="divBusca">
                <input onChange={handleInputSearch} value={inputSearch} type="text" id="txtBusca" placeholder="Pesquisar..."/>
                <input type="submit" value="Pesquisar" alt="Pesquisar"/>
            </form>
        </Container>
    )
}
export default SearchBar