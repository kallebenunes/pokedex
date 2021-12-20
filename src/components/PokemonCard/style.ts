import styled from "styled-components";

const Container = styled.div`
  margin: 1rem 0;

  .pokemon-image {
    background: #eeeeee;
    padding: 3rem;
    width: 100%;
  }

  .pokemon-id {
    text-align: left;
    padding-top: 5px;
    top: -12px;
    position: relative;
    border-top-right-radius: 5px;
    width: 50%;
    background: white;

  }

  .pokemon-name {
    margin: .5rem 0;
    line-height: 1;
  }

  .pokemon-type-container {
    display: flex;
    flex-wrap: wrap;
  }

  .pokemon-type {
    background: black;
    color: white;
    padding: .3rem;
    margin: .2rem;
    border-radius: 5px;
  }
`;

const PokemonImage = styled.img`
`

export {Container, PokemonImage}