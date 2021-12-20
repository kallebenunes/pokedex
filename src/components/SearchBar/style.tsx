import styled from 'styled-components';
const Container  = styled.div`
    background: #2c2c2c;
    color: white;
    padding: 1rem 0;

    form {
        display: flex;
    }

    input {
        padding: 0.3rem;
        display: block;
        margin: 0;
        border-radius: 5px;
    }

    input[type="submit"]{
        background: #f18429;
        border: none;
        
        margin-left: .5rem;
        color: #FFF;
    }
`;
export  {Container}