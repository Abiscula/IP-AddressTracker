import styled from 'styled-components'

export const HeaderField = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    width: 180%;

  }
  
  h2 {
    color: #fff;
    margin-bottom: 2rem;
  }

  @media (max-width: 375px) {
    margin-bottom: 30%;

    div {
      width: 100%;
    }

    h2 {
      margin-bottom: 1.5rem;
    }
  }
`

export const Search = styled.input`
  padding: 1rem;
  border-radius: 15px 0 0 15px;
  width: 100%;
  border: none;
  font-size: 18px;

  ::placeholder {
    font-family: 'Rubik', sans-serif;
    color: hsl(0, 0%, 59%);
    font-size: 15px;
    padding-left: 0.7rem;
  }

  @media (max-width: 375px) {
    ::placeholder {
      font-size: 17.5px;
    }
  }
`

export const Button = styled.button`
  background:hsl(0, 0%, 17%);
  color: #fefefe;
  padding: 1rem;
  border-radius: 0 15px 15px 0;
  border: none;

  :hover {
    background: #000;
  }
`