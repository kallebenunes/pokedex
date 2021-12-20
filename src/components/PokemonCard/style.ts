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

    &.grass {
      background: #00db4d;
      color: #222222;
    }

    &.fire {
      background: #f78d00;
      color: #fff;
    }

    &.poison {
      background: #bf75f0;
      color: #fff;
    }

    &.flying {
      background: #9bfaff;
      color: #222222;
    }

    &.water {
      background: #397da2;
    }

    &.ground {
      background: #b6b6b6;
    }

    &.bug {
      background: #0314e9;
      color: #fff;
    }
  }
`;

const PokemonImage = styled.img`
`

export {Container, PokemonImage}