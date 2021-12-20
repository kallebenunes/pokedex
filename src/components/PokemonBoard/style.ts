import styled from 'styled-components'

const Container = styled.section`
  padding: 1rem;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;


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

const NotFound = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70vh;
`

export {Container, NotFound}