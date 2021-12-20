import { ChangeEvent,FormEvent, useState } from 'react'
import {Container} from './style'
const SearchBar = () => {

    const [inputSearch, setInputSearch] = useState("")
  


    

    function handleInputSearch(e: ChangeEvent<HTMLInputElement>){
        setInputSearch(e.target.value)
        
    }

    function handleSubmitForm(e: FormEvent<HTMLFormElement> ){
        e.preventDefault()
        
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