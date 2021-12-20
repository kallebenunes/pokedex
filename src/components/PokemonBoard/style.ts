import styled from 'styled-components'

const Container = styled.section`
  padding: 1rem;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  @media(max-width: 1024px){
    grid-template-columns: 1fr 1fr 1fr;
  } 

  @media(max-width: 764px){
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }

`
export {Container}