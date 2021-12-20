import React from 'react'
import {Container} from './style'
import SearchBar from './../SearchBar/index';
const Header = () => {
    return (
        <Container>
            <h1>Pokédex</h1>
            <SearchBar/>
        </Container>
    )
}
export default Header